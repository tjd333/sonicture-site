"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnjboynv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-wrapper">
        <h2 className="contact-heading">received</h2>
        <p className="contact-body">
          we&rsquo;ll be in touch soon to start yours
        </p>
      </div>
    );
  }

  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">see your music</h2>
      <p className="contact-body">
        we create each sonicture personally, one song at a time
        <br />
        leave your email and we&rsquo;ll connect to start yours
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Honeypot for spam */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <input
          type="email"
          name="email"
          required
          className="form-input"
          placeholder="your email"
          aria-label="Email address"
        />

        <textarea
          name="message"
          rows={3}
          className="form-input form-textarea form-input--optional"
          placeholder="anything you'd like us to know (optional)"
          aria-label="Message (optional)"
        />

        <button
          type="submit"
          className="contact-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "sending..." : "see my music"}
        </button>

        {status === "error" && (
          <p className="contact-error">
            Something went wrong. Please try again or reach out directly.
          </p>
        )}
      </form>
    </div>
  );
}
