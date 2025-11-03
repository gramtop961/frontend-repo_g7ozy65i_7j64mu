import { motion } from 'framer-motion';
import { Brain, Code, Mic, Presentation } from 'lucide-react';

const skills = [
  { icon: Brain, title: 'AI Storytelling', desc: 'Turn complex AI ideas into engaging narratives for all levels.' },
  { icon: Mic, title: 'Content & Voice', desc: 'Voice-first explainers, livestreams, and tutorials with clarity.' },
  { icon: Code, title: 'Full‑Stack Engineering', desc: 'Ship modern web apps powered by AI systems and APIs.' },
  { icon: Presentation, title: 'Education', desc: 'Workshops and curricula that make AI hands-on and memorable.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Crafting with Intelligence and Imagination
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-3 max-w-2xl text-foreground/80"
        >
          I build tools, demos, and learning experiences that bring AI to life—bridging code, creativity, and communication.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="text-sm text-foreground/70 mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
