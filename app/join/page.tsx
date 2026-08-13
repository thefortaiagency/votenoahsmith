import type { Metadata } from "next";
import { Rule } from "@/components/site-chrome";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Join the Campaign",
  description:
    "Sign up to help re-elect Noah Smith to the Fort Wayne Community Schools Board of School Trustees — yard signs, updates, and getting out the vote.",
};

export default function JoinPage() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Join the campaign</div>
          <h1>
            Count me
            <br />
            <em>in</em>
          </h1>
          <p className="lede">
            School board races are won on the ground — yard signs, literature at
            doors, and neighbours telling neighbours. Add your name and
            we&rsquo;ll tell you where you can help.
          </p>
        </div>
      </section>

      <section>
        <div className="shell shell-narrow">
          <Rule />
          <div className="section-head">
            <div className="kicker">Add your name</div>
            <h2>It takes about thirty seconds</h2>
          </div>
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
