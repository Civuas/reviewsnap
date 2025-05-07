import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Email validation schema
const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = waitlistSchema.parse(body);

    // Insert into Supabase
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email: validatedData.email }])
      .select();

    if (error) {
      return NextResponse.json(
        { error: "Failed to add to waitlist" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Successfully added to waitlist", data },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
