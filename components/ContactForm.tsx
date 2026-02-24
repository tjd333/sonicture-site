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
      const res = await fetch("https://formspree.io/f/mreaovgp", {
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
        <h2 className="contact-heading">Received.</h2>
        <p className="contact-body">
          We&rsquo;ll be in touch to arrange the file transfer and begin
          processing your Sonicture.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">Independent artists: see your music.</h2>
      <p className="contact-body">
        Submit your track for an Early Edition Sonicture and the full SIP
        artifact suite. We process each submission personally.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Honeypot for spam */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <label className="form-label">
          <span>Name</span>
          <input type="text" name="name" required className="form-input" />
        </label>

        <label className="form-label">
          <span>Email</span>
          <input type="email" name="email" required className="form-input" />
        </label>

        <label className="form-label">
          <span>Artist Name</span>
          <input type="text" name="artist" required className="form-input" />
        </label>

        <label className="form-label">
          <span>Track Title</span>
          <input type="text" name="track" required className="form-input" />
        </label>

        <label className="form-label">
          <span>Message (optional)</span>
          <textarea
            name="message"
            rows={3}
            className="form-input form-textarea"
          />
        </label>

        <button
          type="submit"
          className="form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit"}
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
