"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "@/app/components/Auth/AuthCard";
import AuthLayout from "@/app/components/Auth/AuthLayout";
import DividerOr from "@/app/components/Auth/DividerOr";
import { EmailInput, PasswordInput } from "@/app/components/Auth/Inputs";
import RememberForgot from "@/app/components/Auth/RememberForgot";
import {
  FacebookButton,
  GoogleButton,
} from "@/app/components/Auth/SocialButtons";
import SubmitButton from "@/app/components/Auth/SubmitButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        // Login failed
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthLayout
      title="Welcome back"
      subtitle={"Login to continue your journey with us."}
    >
      <AuthCard>
        <div className="space-y-3">
          <GoogleButton />
          <FacebookButton />
        </div>

        <DividerOr label="Or sign in with email" />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <EmailInput
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <RememberForgot />

          <SubmitButton disabled={isLoading}>
            {isLoading ? "Signing in..." : "Login"}
          </SubmitButton>
        </form>

        <p className="mt-3 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 hover:text-indigo-700"
          >
            Sign Up
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
