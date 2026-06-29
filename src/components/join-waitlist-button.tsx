"use client";

export function JoinWaitlistButton() {
  function handleClick() {
    const input = document.getElementById("waitlist-email");
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    (input as HTMLInputElement | null)?.focus();
  }

  return (
    <button className="nav-cta" onClick={handleClick}>
      Join Waitlist
    </button>
  );
}
