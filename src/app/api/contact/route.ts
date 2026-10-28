import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, audience, subject, message, botCheckWebsite } = body;

    // 1. Honeypot verification: if hidden field is filled, silently reject or fake success
    if (botCheckWebsite && botCheckWebsite.trim() !== "") {
      console.warn("Spam bot submission caught by honeypot:", { email, ip: req.ip });
      return NextResponse.json({ success: true, message: "Inquiry processed" });
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "A valid full name (minimum 2 characters) is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a detailed message (minimum 10 characters)." },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedData = {
      name: name.trim().slice(0, 150),
      email: email.trim().toLowerCase().slice(0, 150),
      organization: (organization || "").trim().slice(0, 200),
      audience: (audience || "youth").trim().slice(0, 50),
      subject: (subject || "General Inquiry").trim().slice(0, 200),
      message: message.trim().slice(0, 4000),
      timestamp: new Date().toISOString(),
    };

    // 3. Provider routing (Formspree external hook or local handling)
    const provider = process.env.NEXT_PUBLIC_CONTACT_PROVIDER || "local";
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (provider === "formspree" && formspreeEndpoint) {
      const formspreeRes = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!formspreeRes.ok) {
        throw new Error("Formspree upstream dispatch error");
      }
    } else {
      // Local mode: log structured payload (ready for SMTP, Slack webhook, or database handover)
      console.log("=== NEW AFRIYOUTH OFFICIAL INQUIRY ===", sanitizedData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded.",
        timestamp: sanitizedData.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process inquiry at this moment. Please email collaborate@afriyouth.org directly.",
      },
      { status: 500 }
    );
  }
}

