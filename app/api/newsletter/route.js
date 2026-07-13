import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.active) {
        return NextResponse.json(
          { message: "You are already subscribed!" },
          { status: 200 }
        );
      }
      await prisma.newsletter.update({
        where: { email },
        data: { active: true },
      });
      return NextResponse.json(
        { message: "Welcome back! You have been resubscribed." },
        { status: 200 }
      );
    }

    await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json(
      { message: "Successfully subscribed to our newsletter!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
