import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something great</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          I’m available for freelance work, contract roles, and exciting collaborations.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-500"
          >
            <Mail size={18} /> Email me
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 dark:border-white/20 hover:border-blue-400 hover:text-blue-600 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 dark:border-white/20 hover:border-blue-400 hover:text-blue-600 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
