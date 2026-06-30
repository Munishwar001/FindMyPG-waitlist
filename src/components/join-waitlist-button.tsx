"use client";

export function JoinWaitlistButton() {
  function handleClick() {
    document
      .getElementById("final-cta")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <button className="nav-cta" onClick={handleClick}>
      Join Waitlist
    </button>
  );
}
