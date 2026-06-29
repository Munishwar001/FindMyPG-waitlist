import { WaitlistForm } from "@/components/waitlist-form";

export function StatBlock({ count }: { count: number }) {
  return (
    <section className="stat-block">
      <div className="stat-card">
        <div className="stat-number">{count.toLocaleString()}+</div>
        <p className="stat-label">people have already joined the waitlist</p>
        <p className="stat-sub">
          Be the first to know when we launch in new cities and get exclusive
          early-bird discounts.
        </p>

        <WaitlistForm inputId="waitlist-email" buttonLabel="Get Early Access" />
      </div>
    </section>
  );
}
