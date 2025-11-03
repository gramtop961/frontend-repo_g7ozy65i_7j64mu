import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Video, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Muhammad Naufal AR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400">AI Creator • AI Educator • Full‑Stack Dev</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-foreground/80 max-w-xl"
            >
              I blend innovative storytelling with practical engineering to teach AI concepts, build intelligent products, and inspire creators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/20">
                <Rocket size={18} /> Explore Work
              </a>
              <a href="#about" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5">
                <BookOpen size={18} /> Learn More
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5">
                <Video size={18} /> Collaborate
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/30">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(236,72,153,0.15),rgba(249,115,22,0.05)_70%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
