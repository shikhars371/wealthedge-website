"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";



import CalculatorModal from "@/components/calculators/CalculatorModal";
import SIPCalculator from "@/components/calculators/SIPCalculator";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import EMICalculator from "@/components/calculators/EMICalculator";
import InsuranceCalculator from "@/components/calculators/InsuranceCalculator";

const ADVISORS = [
  {
    name: "Advisor Name",
    role: "Senior Wealth Manager",
    bio: "15+ years of experience in Mutual Funds, SIP Planning and Wealth Management.",
  },
  {
    name: "Advisor Name",
    role: "Insurance Specialist",
    bio: "12+ years helping families choose the right Life and Health cover.",
  },
  {
    name: "Advisor Name",
    role: "Retirement Planning Expert",
    bio: "10+ years designing long-term retirement and pension strategies.",
  },
  {
    name: "Advisor Name",
    role: "Tax Planning Consultant",
    bio: "8+ years optimizing ELSS, NPS and other tax-saving investments.",
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openCalculator, setOpenCalculator] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState<
  "sip" | "retirement" | "emi" | "insurance" | null
>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Please fill in your name, mobile number and email.");
      return;
    }

    // TODO: wire this up to your actual lead-capture endpoint
    console.log("Consultation request submitted:", form);

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  }

  return (
    <main className="bg-[#07111F] overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative">

        {/* Background Blur */}

        <div className="absolute left-[-220px] top-[-180px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

        <div className="absolute right-[-180px] bottom-[-180px] h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[160px]" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          {/* HERO WRAPPER */}

          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">

            {/* ================= LEFT ================= */}

            <div className="w-full lg:w-[45%]">

              <span className="inline-flex w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-400">
                Trusted Wealth Advisors
              </span>

              <h1 className="mt-8 text-center text-5xl font-black leading-tight text-white sm:text-6xl lg:text-left lg:text-7xl">
                Building
                <br />
                Wealth.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Protecting Futures.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-xl text-center text-lg leading-9 text-slate-300 lg:mx-0 lg:text-left">
                Professional Mutual Funds, Insurance,
                Retirement and Tax Planning solutions
                helping individuals and businesses
                achieve long-term financial success.
              </p>

              {/* BUTTONS */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 px-9 py-[18px] text-[17px] font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.35)] transition hover:from-blue-500 hover:to-blue-600"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className="rounded-2xl border border-white/15 bg-white/[.06] px-9 py-[18px] text-[17px] font-semibold text-white transition hover:bg-white/[.12]"
                >
                  Book Consultation
                </button>

              </div>

              {/* STATS */}

              <div className="mt-14 border-t border-white/10 pt-10">

                <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 lg:text-left">

                  <div>
                    <h2 className="text-4xl font-bold text-white">₹750Cr+</h2>
                    <p className="mt-2 text-slate-400">Assets Managed</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-white">5000+</h2>
                    <p className="mt-2 text-slate-400">Happy Clients</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-white">18+</h2>
                    <p className="mt-2 text-slate-400">Years Experience</p>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="flex w-full justify-center lg:w-[55%]">

              <div className="grid w-full max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Mutual Funds */}

                <div className="group flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-700">
                  <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_20px_50px_rgba(37,99,235,.45)]">
                    <Image
                      src="/mutual_funds.png"
                      alt="Mutual Funds"
                      width={85}
                      height={85}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center text-3xl font-bold text-white">Mutual Funds</h3>
                  <p className="mt-4 max-w-[260px] text-center leading-8 text-slate-300">
                    Professionally managed portfolios for long-term wealth creation.
                  </p>
                </div>

                {/* Insurance */}

                <div className="group flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:bg-slate-700">
                  <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 shadow-[0_20px_50px_rgba(16,185,129,.45)]">
                    <Image
                      src="/insurance.png"
                      alt="Insurance"
                      width={85}
                      height={85}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center text-3xl font-bold text-white">Insurance</h3>
                  <p className="mt-4 max-w-[260px] text-center leading-8 text-slate-300">
                    Complete financial protection for your family and future.
                  </p>
                </div>

                {/* Retirement */}

                <div className="group flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:bg-slate-700">
                  <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_20px_50px_rgba(245,158,11,.45)]">
                    <Image
                      src="/retirement.png"
                      alt="Retirement"
                      width={85}
                      height={85}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center text-3xl font-bold text-white">Retirement</h3>
                  <p className="mt-4 max-w-[260px] text-center leading-8 text-slate-300">
                    Build a secure retirement with disciplined long-term investing.
                  </p>
                </div>

                {/* Tax Planning */}

                <div className="group flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:bg-slate-700">
                  <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-[0_20px_50px_rgba(236,72,153,.45)]">
                    <Image
                      src="/taxes.png"
                      alt="Tax Planning"
                      width={85}
                      height={85}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center text-3xl font-bold text-white">Tax Planning</h3>
                  <p className="mt-4 max-w-[260px] text-center leading-8 text-slate-300">
                    Maximize tax savings with smart and compliant investment strategies.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TRUSTED PARTNERS ================= */}

      <section className="bg-white py-12 sm:py-14 lg:py-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-600">
              Trusted Financial Partners
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Investment &amp; Insurance Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
              We work with India&apos;s leading Mutual Fund Houses and Insurance
              providers to help you achieve your financial goals.
            </p>
          </div>

          {/* Logos */}

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {["HDFC", "SBI MF", "ICICI", "Axis", "Nippon", "LIC", "Tata AIA", "Star Health"].map(
              (partner) => (
                <div
                  key={partner}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="font-bold text-slate-700">{partner}</h3>
                </div>
              )
            )}
          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              OUR SERVICES
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Comprehensive Financial Solutions
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Whether you&apos;re starting your investment journey or planning your
              retirement, our expert advisors provide personalized financial
              solutions tailored to your goals.
            </p>
          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image src="/mutual_funds.png" alt="Mutual Funds" width={85} height={85} />
              <h3 className="mt-8 text-3xl font-bold text-slate-900">Mutual Funds</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Build long-term wealth through professionally managed mutual fund
                investments across equity, debt and hybrid portfolios.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image src="/insurance.png" alt="Insurance" width={85} height={85} />
              <h3 className="mt-8 text-3xl font-bold text-slate-900">Insurance</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Secure your family&apos;s future with Life, Health, Motor, Travel and
                General Insurance solutions from trusted providers.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image src="/taxes.png" alt="Tax Planning" width={85} height={85} />
              <h3 className="mt-8 text-3xl font-bold text-slate-900">Tax Planning</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Reduce tax liability with ELSS, NPS and other tax-efficient
                investment strategies designed for long-term wealth.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image src="/retirement.png" alt="Retirement" width={85} height={85} />
              <h3 className="mt-8 text-3xl font-bold text-slate-900">Retirement Planning</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Plan today for a financially independent tomorrow with customized
                retirement strategies and disciplined investing.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image src="/mutual_funds.png" alt="Portfolio Management" width={85} height={85} />
              <h3 className="mt-8 text-3xl font-bold text-slate-900">Portfolio Management</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Diversified investment portfolios managed with regular reviews,
                risk analysis and performance optimization.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-6 sm:p-8 lg:p-10 text-white shadow-xl transition hover:-translate-y-3">
              <h3 className="text-3xl font-bold">Free Financial Consultation</h3>
              <p className="mt-5 leading-8 text-blue-100">
                Speak with our certified financial experts and receive a
                personalized investment roadmap absolutely free.
              </p>
              <button
                type="button"
                className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Book Consultation
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#07111F] py-14 sm:py-20 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
              WHY CHOOSE US
            </span>
            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Trusted By Thousands Of Investors
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              We combine expert financial planning, personalized investment
              strategies and complete transparency to help you achieve your
              long-term financial goals.
            </p>
          </div>

          {/* Stats */}

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500">
              <h3 className="text-5xl font-bold text-blue-400">₹750Cr+</h3>
              <h4 className="mt-5 text-2xl font-semibold text-white">Assets Managed</h4>
              <p className="mt-4 leading-7 text-slate-400">
                Successfully managing diversified investment portfolios.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-emerald-500">
              <h3 className="text-5xl font-bold text-emerald-400">5000+</h3>
              <h4 className="mt-5 text-2xl font-semibold text-white">Happy Clients</h4>
              <p className="mt-4 leading-7 text-slate-400">
                Families and businesses trusting us with their financial future.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="text-5xl font-bold text-yellow-400">18+</h3>
              <h4 className="mt-5 text-2xl font-semibold text-white">Years Experience</h4>
              <p className="mt-4 leading-7 text-slate-400">
                Helping investors build wealth through disciplined planning.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-pink-500">
              <h3 className="text-5xl font-bold text-pink-400">98%</h3>
              <h4 className="mt-5 text-2xl font-semibold text-white">Client Satisfaction</h4>
              <p className="mt-4 leading-7 text-slate-400">
                Long-term relationships built on trust and consistent performance.
              </p>
            </div>

          </div>

          {/* Features */}

          <div className="mt-24 grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl bg-slate-800 p-5 sm:p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-white">Personalized Planning</h3>
              <p className="mt-4 leading-8 text-slate-300">
                Every investment strategy is designed around your goals, age,
                income and future aspirations.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-800 p-5 sm:p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-white">Complete Transparency</h3>
              <p className="mt-4 leading-8 text-slate-300">
                Clear communication, unbiased advice and complete visibility
                into every investment decision.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-800 p-5 sm:p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-white">Dedicated Relationship Manager</h3>
              <p className="mt-4 leading-8 text-slate-300">
                A single point of contact to guide you throughout your financial
                journey.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= INVESTMENT JOURNEY ================= */}

      <section className="bg-white py-14 sm:py-20 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              YOUR JOURNEY
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Your Journey Towards Financial Freedom
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We simplify wealth creation through a structured investment process,
              ensuring every financial decision aligns with your long-term goals.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

            {[
              { n: 1, color: "bg-blue-600", title: "Discovery", body: "We understand your income, goals, risk appetite and future aspirations." },
              { n: 2, color: "bg-emerald-600", title: "Financial Planning", body: "Our advisors prepare a customized investment and protection strategy." },
              { n: 3, color: "bg-yellow-500", title: "Investment", body: "Invest confidently across Mutual Funds, SIPs and Insurance products." },
              { n: 4, color: "bg-purple-600", title: "Portfolio Review", body: "Regular reviews ensure your investments remain aligned with your goals." },
              { n: 5, color: "bg-pink-600", title: "Wealth Growth", body: "Achieve financial independence with disciplined investing and expert guidance." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${step.color} text-4xl font-bold text-white`}>
                  {step.n}
                </div>
                <h3 className="mt-8 text-2xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{step.body}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

{/* ================= FINANCIAL TOOLS ================= */}

<section className="bg-slate-50 py-14 sm:py-20 lg:py-24">

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center">

      <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        SMART TOOLS
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
        Financial Planning Tools
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Plan your investments with our powerful financial calculators and
        planning tools.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {/* SIP */}

      <div className="flex min-h-[360px] flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

        <div className="text-5xl">📈</div>

        <h3 className="mt-6 text-2xl font-bold">
          SIP Calculator
        </h3>

        <p className="mt-4 flex-1 leading-8 text-slate-600">
          Estimate future returns on your monthly SIP investments using
          real financial formulas.
        </p>

        <button
          onClick={() => setActiveCalculator("sip")}
          className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Calculate
        </button>

      </div>

      {/* Retirement */}

      <div className="flex min-h-[360px] flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl">

        <div className="text-5xl">👴</div>

        <h3 className="mt-6 text-2xl font-bold">
          Retirement Planner
        </h3>

        <p className="mt-4 flex-1 leading-8 text-slate-600">
          Calculate the retirement corpus required to maintain your
          desired lifestyle after retirement.
        </p>

        <button
          onClick={() => setActiveCalculator("retirement")}
          className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Calculate
        </button>

      </div>

      {/* EMI */}

      <div className="flex min-h-[360px] flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-200 hover:shadow-2xl">

        <div className="text-5xl">🏠</div>

        <h3 className="mt-6 text-2xl font-bold">
          EMI Calculator
        </h3>

        <p className="mt-4 flex-1 leading-8 text-slate-600">
          Instantly calculate your monthly home loan or personal loan EMI
          with detailed repayment estimates.
        </p>

        <button
          onClick={() => setActiveCalculator("emi")}
          className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Calculate
        </button>

      </div>

      {/* Insurance */}

      <div className="flex min-h-[360px] flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-2xl">

        <div className="text-5xl">🛡️</div>

        <h3 className="mt-6 text-2xl font-bold">
          Insurance Need
        </h3>

        <p className="mt-4 flex-1 leading-8 text-slate-600">
          Estimate the ideal life insurance coverage required to secure
          your family's future.
        </p>

        <button
          onClick={() => setActiveCalculator("insurance")}
          className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Calculate
        </button>

      </div>

    </div>

  </div>

</section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="bg-white py-14 sm:py-20 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Trusted by professionals, families and business owners across India.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              { quote: "Their investment advice helped us build a disciplined SIP portfolio. We now have complete confidence in our financial future.", name: "Rahul Sharma", role: "Business Owner" },
              { quote: "They helped us choose the right insurance policies and retirement planning strategy. Highly recommended.", name: "Priya Verma", role: "Software Engineer" },
              { quote: "Transparent advice, regular portfolio reviews and excellent customer support. I have referred my entire family.", name: "Amit Gupta", role: "Chartered Accountant" },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-3xl bg-slate-50 p-6 sm:p-8 lg:p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-2xl text-yellow-500" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="mt-6 leading-8 text-slate-600">{t.quote}</p>
                <div className="mt-8">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= OUR ADVISORS ================= */}

      <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              OUR EXPERTS
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Meet Our Financial Experts
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Our experienced advisors help you make informed financial decisions
              with complete transparency and personalized guidance.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {ADVISORS.map((advisor, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-5 sm:p-6 lg:p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto h-32 w-32 rounded-full bg-slate-200" />
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{advisor.name}</h3>
                <p className="mt-2 font-medium text-blue-600">{advisor.role}</p>
                <p className="mt-5 leading-7 text-slate-600">{advisor.bio}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= INSIGHTS ================= */}

{/* ================= INVESTOR EDUCATION ================= */}

<section className="bg-white py-24">

  <div className="container">

    <div className="text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        INVESTOR EDUCATION
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
        Learn. Invest. Grow.
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Explore trusted educational resources from India's financial regulators
        and industry bodies to make informed investment decisions.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-3">

      {/* Card 1 */}

      <a
        href="https://www.amfiindia.com/investor"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

        <div className="p-8">

          <div className="text-5xl">📘</div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Mutual Fund Basics
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Understand how mutual funds work, different fund categories,
            risks, benefits and investing fundamentals.
          </p>

          <div className="mt-8 font-semibold text-blue-600 group-hover:translate-x-1 transition">
            Read on AMFI →
          </div>

        </div>

      </a>

      {/* Card 2 */}

      <a
        href="https://investor.sebi.gov.in/iematerial.html"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <div className="h-2 bg-gradient-to-r from-emerald-600 to-green-500"></div>

        <div className="p-8">

          <div className="text-5xl">📊</div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Investor Education
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Learn about investing, financial planning, ETFs, mutual funds,
            fraud awareness and investor protection.
          </p>

          <div className="mt-8 font-semibold text-emerald-600 group-hover:translate-x-1 transition">
            Visit SEBI →
          </div>

        </div>

      </a>

      {/* Card 3 */}

      <a
        href="https://iap.amfiindia.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <div className="h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>

        <div className="p-8">

          <div className="text-5xl">🎓</div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Investor Awareness Program
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Join AMFI's official investor awareness initiatives and improve
            your financial knowledge.
          </p>

          <div className="mt-8 font-semibold text-orange-600 group-hover:translate-x-1 transition">
            Explore Program →
          </div>

        </div>

      </a>

    </div>

    <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">

      <p className="text-sm leading-7 text-slate-700">

        These resources are maintained by official regulatory and industry
        organizations. They are intended for investor education and awareness.
        External links will open in a new browser tab.

      </p>

    </div>

  </div>

</section>

      {/* ================= GOAL BASED INVESTING ================= */}

      <section className="bg-[#07111F] py-14 sm:py-20 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
              PLAN YOUR GOALS
            </span>
            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              What Are You Investing For?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Every financial journey begins with a goal. We help you choose the
              right investment strategy to turn your dreams into reality.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              { icon: "🏠", title: "Buy a Dream Home", body: "Build wealth systematically for your future home." },
              { icon: "🎓", title: "Child Education", body: "Prepare financially for higher education with disciplined investing." },
              { icon: "🏖️", title: "Retirement", body: "Enjoy financial independence with long-term retirement planning." },
              { icon: "💰", title: "Wealth Creation", body: "Grow your money through diversified investment portfolios." },
              { icon: "💍", title: "Marriage Planning", body: "Invest today to celebrate tomorrow without financial stress." },
              { icon: "🌍", title: "Dream Vacation", body: "Plan for life's memorable experiences with goal-based investing." },
            ].map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 text-center transition hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="text-6xl">{goal.icon}</div>
                <h3 className="mt-6 text-2xl font-bold text-white">{goal.title}</h3>
                <p className="mt-4 leading-8 text-slate-400">{goal.body}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FREE CONSULTATION ================= */}

      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-16 sm:py-20 lg:py-28">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
                FREE CONSULTATION
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
                Start Your Wealth
                <br />
                Creation Journey
                <br />
                Today.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-blue-100">
                Whether you&apos;re planning your first investment,
                saving taxes, protecting your family or preparing
                for retirement, our certified financial advisors
                are here to guide you.
              </p>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-white">5000+</h3>
                  <p className="text-blue-100">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">₹750Cr+</h3>
                  <p className="text-blue-100">Assets Managed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">18+</h3>
                  <p className="text-blue-100">Years Experience</p>
                </div>
              </div>

            </div>

            {/* Right */}


            <div className="rounded-[35px] bg-white p-10 shadow-2xl">

              <h3 className="text-3xl font-bold text-slate-900">
                Get In Touch
              </h3>

              <p className="mt-3 text-slate-500">
                Connect with our financial advisors through your preferred channel.
              </p>

              <div className="mt-10 space-y-6">

                {/* Phone */}

                <div className="rounded-2xl border border-slate-200 p-6">

                  <p className="text-sm text-slate-500">
                    Call Us
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-slate-900">
                    +91 98765 43210
                  </h4>

                </div>

                {/* Email */}

                <div className="rounded-2xl border border-slate-200 p-6">

                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-slate-900">
                    info@yourcompany.com
                  </h4>

                </div>

                {/* Office */}

                <div className="rounded-2xl border border-slate-200 p-6">

                  <p className="text-sm text-slate-500">
                    Office
                  </p>

                  <p className="mt-2 text-slate-700 leading-7">
                    Tower A, Sector 62<br />
                    Noida, Uttar Pradesh
                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 space-y-4">

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
                >
                  💬 Chat on WhatsApp
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex w-full items-center justify-center rounded-xl border border-blue-600 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  📞 Call Now
                </a>

                <a
                  href="mailto:info@yourcompany.com"
                  className="flex w-full items-center justify-center rounded-xl border border-slate-300 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  ✉️ Send Email
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


<CalculatorModal
  open={activeCalculator !== null}
  onOpenChange={() => setActiveCalculator(null)}
  title={
    activeCalculator === "sip"
      ? "SIP Calculator"
      : activeCalculator === "retirement"
      ? "Retirement Planner"
      : activeCalculator === "emi"
      ? "EMI Calculator"
      : "Insurance Calculator"
  }
>
{activeCalculator === "sip" && <SIPCalculator />}

{activeCalculator === "retirement" && <RetirementCalculator />}

{activeCalculator === "emi" && <EMICalculator />}

{activeCalculator === "insurance" && <InsuranceCalculator />}
  

</CalculatorModal>
    
    </main>
  );
}