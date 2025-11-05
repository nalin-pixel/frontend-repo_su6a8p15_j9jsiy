import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'NextGen Dashboard',
    description: 'A responsive analytics dashboard with real-time charts and dark mode.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'E-commerce Storefront',
    description: 'High-performance storefront with product filtering, carts, and checkout.',
    tags: ['Vite', 'Redux', 'Stripe'],
    repo: '#',
    demo: '#',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive personal site featuring 3D scenes powered by Spline.',
    tags: ['Spline', 'Framer Motion', 'Vercel'],
    repo: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.03]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A selection of things I loved building recently.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 dark:border-white/20 hover:border-blue-400 hover:text-blue-600 transition w-max">
            Get in touch
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 hover:shadow-lg hover:shadow-blue-500/10 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                </div>
                <Code className="text-blue-600 shrink-0" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a href={p.repo} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-black/10 dark:border-white/20 hover:border-blue-400 hover:text-blue-600 transition">
                  <Github size={16} /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
