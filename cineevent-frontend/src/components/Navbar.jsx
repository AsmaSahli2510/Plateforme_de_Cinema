import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/20 bg-background-dark/95 px-6 py-4 backdrop-blur-md md:px-20">
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
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            className="text-sm font-medium text-white transition-colors hover:text-accent"
            to="/">
            Home
          </Link>
          <Link
            className="text-sm font-medium text-white transition-colors hover:text-accent"
            to="/events">
            Events
          </Link>
          <Link
            className="text-sm font-medium text-white transition-colors hover:text-accent"
            to="/venues">
            Venues
          </Link>
          <Link
            className="text-sm font-medium text-white transition-colors hover:text-accent"
            to="/experience">
            Experience
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="rounded-full border border-accent/30 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-white/10"
            to="/login">
            Login
          </Link>
          <Link
            className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
            to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
