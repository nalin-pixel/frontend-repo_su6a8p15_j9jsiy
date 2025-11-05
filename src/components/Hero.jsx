import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white dark:from-neutral-950/80 dark:to-neutral-950" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Modern • Playful • Interactive</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-600">Your Name</span> —
            <br />Web Developer crafting delightful experiences
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
            I build performant, accessible web apps with a focus on clean code and crisp UI. Explore my recent work below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-500">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-black/10 dark:border-white/20 hover:border-blue-400 hover:text-blue-600 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
