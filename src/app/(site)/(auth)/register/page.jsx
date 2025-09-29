import Link from "next/link";
import AuthCard from "@/app/components/Auth/AuthCard";
import AuthLayout from "@/app/components/Auth/AuthLayout";
import DividerOr from "@/app/components/Auth/DividerOr";
import { EmailInput, PasswordInput } from "@/app/components/Auth/Inputs";
import {
  FacebookButton,
  GoogleButton,
} from "@/app/components/Auth/SocialButtons";
import SubmitButton from "@/app/components/Auth/SubmitButton";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create account"
      subtitle="Join us to start shopping and enjoy complete access to everything we offer."
    >
      <AuthCard>
        <div className="space-y-3">
          <GoogleButton />
          <FacebookButton />
        </div>

        <DividerOr label="Or sign up with email" />

        <form className="space-y-3">
          <EmailInput name="email" />
          <PasswordInput name="password" />
          <PasswordInput
            name="confirmPassword"
            placeholder="Enter your password"
          />
          <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
            />
            I agree to terms & policy
          </label>

          <SubmitButton>Create Account</SubmitButton>
        </form>

        <p className="mt-3 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:text-indigo-700">
            Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
