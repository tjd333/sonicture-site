"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="section-viewport" style={{ textAlign: "center" }}>
      <h1
        style={{
          fontFamily: "var(--font-soul)",
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        something went wrong
      </h1>
      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: "2rem",
          fontSize: "clamp(0.9rem, 0.85rem + 0.25vw, 1.05rem)",
        }}
      >
        an unexpected error occurred.
      </p>
      <button
        onClick={reset}
        style={{
          fontFamily: "var(--font-science)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          color: "var(--accent-home)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        try again
      </button>
    </main>
  );
}
