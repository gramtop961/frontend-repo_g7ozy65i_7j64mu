import { motion } from 'framer-motion';
import { PlayCircle, Globe, Wand2 } from 'lucide-react';

const projects = [
  {
    title: 'AI Voice Agent Demos',
    desc: 'Conversational agents with expressive voice, memory, and tool use.',
    tag: 'Voice + LLM',
    link: '#',
    icon: PlayCircle,
  },
  {
    title: 'Interactive AI Lessons',
    desc: 'Hands-on educational modules that teach core ML concepts.',
    tag: 'Education',
    link: '#',
    icon: Wand2,
  },
  {
    title: 'Full‑Stack AI Apps',
    desc: 'Production-grade web apps integrating modern AI APIs and UX.',
    tag: 'Web',
    link: '#',
    icon: Globe,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Featured Work
        </motion.h2>
        <p className="mt-3 max-w-2xl text-foreground/80">A snapshot of things I love building—where storytelling meets systems engineering.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map(({ title, desc, tag, link, icon: Icon }, i) => (
            <motion.a
              key={title}
              href={link}
              target={link.startsWith('http') ? '_blank' : undefined}
              rel={link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">{tag}</span>
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-sm text-foreground/70 mt-1">{desc}</p>
              <div className="mt-4 text-sm text-fuchsia-300 group-hover:underline">View details →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
