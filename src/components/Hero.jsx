import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-content", { opacity: 1, x: 0, y: 0 });
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[calc(100vh-82px)] w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 py-20 text-center"
    >
      <div className="absolute inset-0 -z-20 bg-[#050816]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px] sm:h-[520px] sm:w-[520px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-purple-500/10 to-transparent" />

      <div className="hero-content mx-auto max-w-6xl opacity-100">
        <p className="mb-5 text-sm sm:text-base font-semibold tracking-[0.35em] text-cyan-300 uppercase">
          Smart Ticket Dashboard
        </p>

        <h1 className="mx-auto max-w-5xl text-[clamp(2.6rem,8vw,6.4rem)] leading-[0.95] font-black tracking-tight bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(34,211,238,0.22)]">
          Complaint
          <br />
          Management System
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base sm:text-xl text-slate-300">
          Enterprise complaint management dashboard for tracking tickets,
          assigning teams, and resolving complaints faster.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/complaints"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105"
          >
            Manage Complaints
          </Link>

          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
