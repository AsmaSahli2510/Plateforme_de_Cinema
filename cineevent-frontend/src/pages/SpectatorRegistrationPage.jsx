import React from "react";
import { Link } from "react-router-dom";

export default function SpectatorRegistrationPage() {
  return (
    <div className="flex-1 bg-background-dark text-white">
      <header className="absolute top-0 z-50 w-full px-6 py-6 md:px-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-accent">
              <span className="material-symbols-outlined text-4xl">
                movie_filter
              </span>
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white">
              CINÉ<span className="text-accent">EVENT</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-white/60 md:block">
              Already have an account?
            </span>
            <Link
              className="text-sm font-bold text-accent hover:underline"
              to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <main className="relative flex flex-grow items-center justify-center px-6 pb-12 pt-24">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -left-[5%] -top-[10%] h-[40%] w-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[5%] h-[40%] w-[40%] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-xl">
          <div className="relative mb-12 flex items-center justify-between px-4">
            <div className="absolute left-0 top-1/2 z-0 h-[1px] w-full -translate-y-1/2 bg-white/10" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-accent text-sm font-bold text-charcoal">
                1
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                Personal
              </span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/10 bg-background-dark text-sm font-bold text-white/40">
                2
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Security
              </span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/10 bg-background-dark text-sm font-bold text-white/40">
                3
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Preferences
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl p-8 shadow-2xl md:p-12"
            style={{
              background: "rgba(28, 28, 28, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(245, 192, 101, 0.1)",
            }}>
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-black">
                Create Spectator Account
              </h2>
              <p className="text-white/60">
                Join the elite community of cinema enthusiasts.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="px-1 text-xs font-bold uppercase tracking-widest text-accent/80">
                    Full Name
                  </label>
                  <div className="group relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-accent">
                      person
                    </span>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-[#252525] py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="e.g. Julian Vane"
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="px-1 text-xs font-bold uppercase tracking-widest text-accent/80">
                    Email Address
                  </label>
                  <div className="group relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-accent">
                      alternate_email
                    </span>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-[#252525] py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="julian@prestige.com"
                      type="email"
                    />
                    <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1.5 text-emerald-500">
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                      <span className="text-[10px] font-bold uppercase">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="px-1 text-xs font-bold uppercase tracking-widest text-accent/80">
                    Password
                  </label>
                  <div className="group relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-accent">
                      lock
                    </span>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-[#252525] py-4 pl-12 pr-12 text-white placeholder:text-white/20 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="••••••••••••"
                      type="password"
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                      type="button">
                      <span className="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                  </div>
                  <div className="mt-2 flex gap-1">
                    <div className="h-1 flex-1 rounded-full bg-accent" />
                    <div className="h-1 flex-1 rounded-full bg-accent" />
                    <div className="h-1 flex-1 rounded-full bg-accent" />
                    <div className="h-1 flex-1 rounded-full bg-white/10" />
                    <span className="ml-2 text-[10px] font-bold uppercase text-white/40">
                      Strong
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 font-black text-charcoal shadow-xl shadow-accent/10 transition-all hover:bg-accent/90"
                  type="button">
                  Next Step
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>

              <p className="px-4 text-center text-[11px] leading-relaxed text-white/40">
                By continuing, you agree to CinéEvent&apos;s{" "}
                <a className="text-white hover:underline" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="text-white hover:underline" href="#">
                  Privacy Policy
                </a>{" "}
                regarding your spectator status.
              </p>
            </form>
          </div>

          <div className="mt-8 text-center">
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-accent"
              href="#">
              <span className="material-symbols-outlined text-lg">help</span>
              Need assistance with your registration?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
