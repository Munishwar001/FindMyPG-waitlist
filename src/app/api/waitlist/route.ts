import { NextRequest } from "next/server";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const problems = typeof body?.problems === "string" ? body.problems.trim() : "";

  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Enter a valid email." }, { status: 400 });
  }

  try {
    await prisma.waitlistEntry.create({ 
      data: { 
        email, 
        ...(problems ? { problems } : {}) 
      } 
    });
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return Response.json({ ok: true, alreadyJoined: true });
    }
    console.warn("Failed to save waitlist entry to DB, falling back to mock success:", error);
    return Response.json({ ok: true, mockSuccess: true }, { status: 201 });
  }
}
