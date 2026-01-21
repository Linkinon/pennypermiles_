import { NextResponse } from "next/server";

const SECRET_KEY = ""; // same as PHP $key

async function md5(message) {
  const data = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("MD5", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function middleware(req) {
  const url = req.nextUrl;
  const lpkeyua = url.searchParams.get("lpkeyua");

  if (!lpkeyua) {
    return new NextResponse(null, { status: 403 });
  }

  const [hash, hashTime] = lpkeyua.split(".");
  if (!hash || !hashTime) {
    return new NextResponse(null, { status: 403 });
  }

  if (Date.now() / 1000 > Number(hashTime)) {
    return new NextResponse(null, { status: 403 });
  }

  const userAgent = req.headers.get("user-agent") || "";

  const generatedHash =
    `${await md5(SECRET_KEY + hashTime + userAgent)}.${hashTime}`;

  if (generatedHash !== lpkeyua) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/personal-loan/:path*"],
};
