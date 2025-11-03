import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build something intelligent together</h2>
              <p className="mt-2 text-foreground/80 max-w-2xl">Have a project, workshop, or collaboration in mind? I’m open to partnerships across content, education, and product.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@naufalar.com" className="px-4 py-2 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400 text-white">Email Me</a>
                <a href="#projects" className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5">See Projects</a>
              </div>
            </div>
            <p className="mt-8 text-xs text-foreground/60">© {new Date().getFullYear()} Muhammad Naufal AR. All rights reserved.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
