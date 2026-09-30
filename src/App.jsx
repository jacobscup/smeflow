import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Receipt,
  Users,
  WalletCards,
} from "lucide-react";
import { supabase } from "./supabase";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business_name: "",
    business_type: "",
    biggest_challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  if (
    !formData.name ||
    !formData.email ||
    !formData.business_name ||
    !formData.business_type ||
    !formData.biggest_challenge
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const { error } = await supabase
    .from("waitlist")
    .insert([formData]);

  if (error) {
    if (error.code === "23505") {
      alert("This email is already on the waitlist.");
    } else {
      console.error("Supabase error:", error);
      alert("Something went wrong. Please try again.");
    }

    return;
  }

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    business_name: "",
    business_type: "",
    biggest_challenge: "",
  });
};
  
return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="border-b border-slate-100 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
              S
            </div>

            <span className="text-xl font-bold tracking-tight">
              SME<span className="text-blue-600">Flow</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              How It Works
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Contact
            </a>

            <a
              href="#waitlist"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Join the Waitlist
            </a>
          </div>

          <a
            href="#waitlist"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Join
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <CheckCircle2 size={16} />
                Built for Nigerian businesses
              </div>

             <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
  Everything your business needs.{" "}
  <span className="text-blue-600">In one place.</span>
</h1>

             <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
  Track sales, inventory, customers, expenses and business performance
  without juggling notebooks, spreadsheets and multiple apps.
</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-700"
                >
                  Join the Waitlist
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Explore Features
                </a>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                We're building SMEFlow with real business owners.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Business overview</p>
                  <h2 className="text-xl font-bold text-slate-900">
                    Dashboard
                  </h2>
                </div>

                <div className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                  This month
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Sales</p>
                  <p className="mt-2 text-2xl font-bold">₦1.84m</p>
                  <p className="mt-1 text-xs text-emerald-600">
                    +12.4% this month
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Expenses</p>
                  <p className="mt-2 text-2xl font-bold">₦620k</p>
                  <p className="mt-1 text-xs text-slate-500">
                    24 transactions
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Customers</p>
                  <p className="mt-2 text-2xl font-bold">184</p>
                  <p className="mt-1 text-xs text-emerald-600">
                    16 new customers
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Outstanding</p>
                  <p className="mt-2 text-2xl font-bold">₦340k</p>
                  <p className="mt-1 text-xs text-orange-600">
                    Needs attention
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Sales performance</p>
                  <BarChart3 size={20} className="text-blue-600" />
                </div>

                <div className="mt-5 flex h-28 items-end gap-2">
                  {[35, 55, 42, 75, 60, 85, 68, 95, 78, 88, 72, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-blue-500/80"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The problem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Running a business shouldn't mean managing everything manually.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              SMEFlow is being designed to bring the everyday operations of a
              growing business into one clear and simple workspace.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Sales scattered across notebooks and spreadsheets",
              "Inventory becomes difficult to track",
              "Customer debts are easily forgotten",
              "Business performance is difficult to understand",
            ].map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <CheckCircle2 size={20} />
                </div>

                <p className="font-medium leading-7 text-slate-700">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Features
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
  Know what’s happening in your business.
</h2>
<p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
  SMEFlow brings your sales, inventory, customers, expenses and business
  performance together so you can make better decisions with confidence.
</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: WalletCards,
                  title: "Sales Tracking",
                  text: "Record sales and keep your business transactions organized.",
                },
                {
                  icon: Boxes,
                  title: "Inventory",
                  text: "Know what you have in stock and identify products that need attention.",
                },
                {
                  icon: Users,
                  title: "Customers",
                  text: "Keep customer records, purchase history and outstanding balances together.",
                },
                {
                  icon: Receipt,
                  title: "Invoices & Receipts",
                  text: "Create professional invoices and receipts for your customers.",
                },
                {
                  icon: WalletCards,
                  title: "Expense Tracking",
                  text: "Record business expenses and understand where your money goes.",
                },
                {
                  icon: BarChart3,
                  title: "Business Analytics",
                  text: "Turn your business activity into simple, useful insights.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Get started in three simple steps.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Add your business",
                text: "Set up your business profile and add the products or services you sell.",
              },
              {
                number: "02",
                title: "Record your activity",
                text: "Track sales, expenses, customers and inventory as your business operates.",
              },
              {
                number: "03",
                title: "Understand your numbers",
                text: "Use your business data to understand performance and make better decisions.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-black text-blue-100">
                  {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

       {/* Waitlist */}
<section id="waitlist" className="bg-slate-900">
  <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
    <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
      Early access
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Help us build SMEFlow.
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
      We're building SMEFlow with Nigerian business owners. Join the
      early-access list and help shape what we build.
    </p>

    {submitted ? (
      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-blue-500/20 bg-slate-800 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
          <CheckCircle2 className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white">
          You're on the SMEFlow early-access list!
        </h3>

        <p className="mt-3 text-slate-400">
          Thanks for helping us build a better way for Nigerian businesses to
          manage their operations.
        </p>
      </div>
    ) : (
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-xl space-y-3"
      >
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-3.5 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-3.5 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Business name"
          value={formData.business_name}
          onChange={(e) =>
            setFormData({ ...formData, business_name: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-3.5 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="What type of business do you run?"
          value={formData.business_type}
          onChange={(e) =>
            setFormData({ ...formData, business_type: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-3.5 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
        />

        <select
          value={formData.biggest_challenge}
          onChange={(e) =>
            setFormData({
              ...formData,
              biggest_challenge: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-3.5 text-white outline-none focus:border-blue-500"
        >
          <option value="" disabled>
            What is your biggest challenge managing your business?
          </option>

          <option value="Tracking sales">Tracking sales</option>
          <option value="Managing inventory">Managing inventory</option>
          <option value="Tracking expenses">Tracking expenses</option>
          <option value="Managing customers or debts">
            Managing customers or debts
          </option>
          <option value="Knowing my profit">Knowing my profit</option>
          <option value="Creating invoices or receipts">
            Creating invoices or receipts
          </option>
          <option value="Understanding business performance">
            Understanding business performance
          </option>
          <option value="Something else">Something else</option>
        </select>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
        >
          {submitting ? "Joining..." : "Join the Early Access List"}
        </button>
      </form>
    )}

    <p className="mt-4 text-sm text-slate-500">
      No spam. We're simply learning from businesses and building with them.
    </p>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-900">
              SME<span className="text-blue-600">Flow</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Business management, made simpler.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 SMEFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;