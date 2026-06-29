"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "already" | "error";

export function WaitlistForm({
  inputId,
  buttonLabel,
}: {
  inputId: string;
  buttonLabel: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === "success" || status === "already") {
      const timer = setTimeout(() => setStatus("idle"), 3200);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus(data.alreadyJoined ? "already" : "success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Try again.");
    }
  }

  const toastVisible = status === "success" || status === "already";

  return (
    <>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          id={inputId}
          type="email"
          className="email-input"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Joining..." : buttonLabel}
        </button>
      </form>

      {status === "error" && <p className="form-error">{errorMessage}</p>}

      <div className={`toast ${toastVisible ? "show" : ""}`} role="status">
        {status === "already" ? "Already on the list 👀" : "You're on the list! 🎉"}
      </div>
    </>
  );
}
