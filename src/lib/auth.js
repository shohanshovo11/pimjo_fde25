const SECRET = process.env.AUTH_SECRET || "secret-key";

const b64u = (buf) => {
  if (typeof buf === 'string') {
    buf = new TextEncoder().encode(buf);
  }
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

const b64uToStr = (b64) => {
  const pad = (s) => s + "===".slice((s.length + 3) % 4);
  return atob(pad(b64).replace(/-/g, "+").replace(/_/g, "/"));
};

const sign = async (input) => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(input));
  return b64u(signature);
};

export async function createToken(payload, expSec = 60 * 60 * 24 * 7) {
  const header = b64u(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const now = Math.floor(Date.now() / 1000);
  const body = b64u(JSON.stringify({ ...payload, iat: now, exp: now + expSec }));
  const sig = await sign(`${header}.${body}`);
  return `${header}.${body}.${sig}`;
}

export async function verifyToken(token) {
  if (!token) return null;
  const [h, p, s] = token.split(".");
  if (!h || !p || !s) return null;
  const expect = await sign(`${h}.${p}`);
  
  if (s !== expect) return null;
  
  try {
    const payload = JSON.parse(b64uToStr(p));
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}
