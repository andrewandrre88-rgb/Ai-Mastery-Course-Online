import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Rocket, 
  Target, 
  Star, 
  ChevronDown,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

const Banner = () => (
  <div className="bg-brand-primary text-black py-2 px-6 flex justify-center items-center gap-8 text-[11px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap">
    <div className="flex items-center gap-2">
      <Clock className="w-3 h-3" />
      <span>Flash Sale Ends In:</span>
      <span className="font-display text-sm">08 06 18</span>
    </div>
    <span className="opacity-50">—</span>
    <span>Save 75% Today Only</span>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-12 left-0 right-0 z-50 px-6 flex justify-center">
    <div className="glass px-8 py-3 rounded-full flex items-center gap-12 max-w-fit">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center">
          <Cpu className="text-black w-4 h-4" />
        </div>
        <span className="font-bold text-sm tracking-tight">AI INCOME</span>
      </div>
      <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/50">
        <a href="#problem" className="hover:text-brand-primary transition-colors">Problem</a>
        <a href="#solution" className="hover:text-brand-primary transition-colors">Solution</a>
        <a href="#curriculum" className="hover:text-brand-primary transition-colors">Curriculum</a>
        <a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a>
      </div>
      <a 
        href="https://digitalbagx.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-white transition-colors"
      >
        Enroll Now
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-24 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center">
    {/* Background Glows */}
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto"
    >
      {/* Badge */}
      <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-12">
        The 2026 Digital Economy Blueprint
      </div>

      {/* Headline */}
      <h1 className="text-6xl md:text-[120px] font-display leading-[0.9] mb-12 tracking-tight uppercase">
        Create Digital Products <br />
        With <span className="text-brand-primary italic">AI In Seconds.</span>
      </h1>

      {/* Offer Box */}
      <div className="glass p-6 rounded-2xl max-w-xl mx-auto mb-12 flex items-center justify-between gap-8 text-left border-white/5">
        <div>
          <p className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-1">AI Revolution Offer:</p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Price Increases to $197 Tomorrow</p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="font-display text-2xl leading-none">08</p>
            <p className="text-[8px] text-white/40 uppercase font-bold mt-1">Hrs</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl leading-none">06</p>
            <p className="text-[8px] text-white/40 uppercase font-bold mt-1">Min</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl leading-none">18</p>
            <p className="text-[8px] text-white/40 uppercase font-bold mt-1">Sec</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
        Stop struggling with blank pages. Learn how to leverage AI to research, design, and launch profitable digital products with zero technical skills.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="https://digitalbagx.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
        >
          Start Building Today <ArrowRight className="w-4 h-4" />
        </a>
        <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
          View Curriculum
        </button>
      </div>
    </motion.div>

    {/* Platform Bar */}
    <div className="mt-32 flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
      {["Stripe", "Gumroad", "Lemon Squeezy", "Shopify"].map((p) => (
        <span key={p} className="text-xl font-display uppercase tracking-widest">{p}</span>
      ))}
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-32 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
      <div>
        <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9] mb-12">
          The Old Way <br />
          Is <span className="text-red-500 italic">Broken.</span>
        </h2>
        <div className="space-y-8">
          {[
            { title: "Manual Research", desc: "Spending weeks guessing what might sell while others are already profiting." },
            { title: "Design Friction", desc: "Paying thousands for designers or struggling with tools you don't understand." },
            { title: "Zero Momentum", desc: "Starting from scratch every time instead of using AI-powered systems." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full" />
        <div className="glass rounded-3xl p-12 relative border-white/5">
          <div className="space-y-6">
            <div className="h-2 bg-white/5 rounded-full w-3/4" />
            <div className="h-2 bg-white/5 rounded-full w-1/2" />
            <div className="h-2 bg-white/5 rounded-full w-5/6" />
            <div className="pt-12 flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 mb-2">Status: Stuck</p>
                <div className="h-12 w-32 bg-red-500/10 rounded-lg border border-red-500/20" />
              </div>
              <p className="text-6xl font-display text-white/5 uppercase italic">Slow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
    <div className="max-w-7xl mx-auto text-center mb-24">
      <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px]">The AI Advantage</span>
      <h2 className="text-5xl md:text-8xl font-display uppercase mt-6 leading-[0.9]">
        Speed Is The <br />
        New <span className="text-brand-primary italic">Currency.</span>
      </h2>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        { step: "01", title: "AI Research", desc: "Analyze market gaps in seconds using custom AI agents that find what people are actually buying.", icon: Target },
        { step: "02", title: "Rapid Content", desc: "Generate high-value digital products, courses, and assets using our proprietary prompt library.", icon: Cpu },
        { step: "03", title: "Auto-Scale", desc: "Deploy automated sales funnels that work 24/7, allowing you to focus on the next big idea.", icon: Rocket }
      ].map((item, i) => (
        <div key={i} className="glass p-10 rounded-3xl relative group hover:bg-brand-primary/5 transition-all border-white/5">
          <div className="absolute top-6 right-10 text-6xl font-display text-white/5 group-hover:text-brand-primary/10 transition-colors">
            {item.step}
          </div>
          <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 border border-brand-primary/20">
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{item.title}</h3>
          <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Curriculum = () => (
  <section id="curriculum" className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9]">The Curriculum</h2>
        <p className="text-white/40 mt-6 font-bold uppercase tracking-widest text-[10px]">Everything you need to dominate the digital economy</p>
      </div>
      <div className="space-y-4">
        {[
          "The 2026 AI Landscape: Tools that actually matter",
          "Niche Arbitrage: Finding hidden digital goldmines",
          "Advanced Prompt Engineering for Creators",
          "Visual Asset Generation (No design skills required)",
          "Storefront Automation: Gumroad & Lemon Squeezy",
          "The Viral Traffic Engine: Scaling with AI content",
          "Retention Systems: Turning buyers into fans"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-all cursor-default border-white/5 group">
            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold uppercase tracking-widest text-white/80">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-display uppercase text-center mb-24 leading-[0.9]">
        Real People. <br />
        Real <span className="text-brand-primary italic">Results.</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Sarah J.", role: "Creator", text: "I went from zero to $1.2k in 30 days. The AI research module alone is worth the price.", avatar: "https://i.pravatar.cc/150?u=sarah" },
          { name: "Marcus T.", role: "Freelancer", text: "I've cut my production time by 80%. I'm launching products every week now.", avatar: "https://i.pravatar.cc/150?u=marcus" },
          { name: "Elena R.", role: "Designer", text: "AI is my new design assistant. This course showed me how to actually monetize it.", avatar: "https://i.pravatar.cc/150?u=elena" }
        ].map((t, i) => (
          <div key={i} className="glass p-10 rounded-3xl border-white/5">
            <div className="flex gap-1 text-brand-primary mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-lg font-medium italic text-white/70 mb-10 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold uppercase tracking-widest text-sm">{t.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-6">
    <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-24 relative overflow-hidden border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px] -z-10" />
      
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6">Limited Time Offer</span>
        <h2 className="text-5xl md:text-8xl font-display uppercase mb-6 leading-[0.9]">Join The <br />Revolution.</h2>
        <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Secure your spot in the 2026 digital economy</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          {[
            "Full Video Curriculum (12+ Hours)",
            "AI Prompt Library (500+ Prompts)",
            "Niche Research Database",
            "Private Discord Access",
            "Weekly Live Q&A Sessions",
            "Lifetime Updates"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center md:text-right">
          <div className="mb-8">
            <span className="text-white/20 line-through font-display text-4xl mr-6">$497</span>
            <span className="text-8xl font-display text-brand-primary">$49.99</span>
          </div>
          <a 
            href="https://digitalbagx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brand-primary text-black px-8 py-6 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/20 mb-6 text-center"
          >
            Get Instant Access
          </a>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">30-Day Money Back Guarantee. No questions asked.</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  
  const faqs = [
    { q: "Do I need technical skills?", a: "No. This course is designed for absolute beginners. We show you exactly how to use AI tools that do the heavy lifting for you." },
    { q: "How much extra will I need to spend on AI tools?", a: "We focus on free and low-cost tools. You can start with $0 and scale as you earn." },
    { q: "How long until I see results?", a: "Many students launch their first product within 7 days. Your first sale depends on your niche and effort, but our system is built for speed." },
    { q: "Is this just for ebooks?", a: "Not at all. We cover templates, stock assets, courses, planners, and even AI-as-a-service models." }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-display uppercase text-center mb-24">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold uppercase tracking-widest text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-8 pb-8 text-white/40 text-sm leading-relaxed font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-32 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-24">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
            <Cpu className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">AI INCOME</span>
        </div>
        <p className="text-white/30 max-w-sm text-sm font-medium leading-relaxed">
          Empowering the next generation of digital creators to leverage artificial intelligence for financial freedom in the new economy.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-white/50">Product</h4>
        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/30">
          <li><a href="#" className="hover:text-brand-primary">Curriculum</a></li>
          <li><a href="#" className="hover:text-brand-primary">Pricing</a></li>
          <li><a href="#" className="hover:text-brand-primary">Testimonials</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-white/50">Legal</h4>
        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/30">
          <li><a href="#" className="hover:text-brand-primary">Privacy</a></li>
          <li><a href="#" className="hover:text-brand-primary">Terms</a></li>
          <li><a href="#" className="hover:text-brand-primary">Refunds</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
      © 2026 AI Income Academy. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-black">
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Curriculum />
        <Testimonials />
        <Pricing />
        <FAQ />
        
        <section className="py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass p-24 rounded-[60px] border-brand-primary/20"
          >
            <h2 className="text-5xl md:text-8xl font-display uppercase mb-12 leading-[0.9]">Ready To <br />Build?</h2>
            <p className="text-lg text-white/40 mb-12 font-medium">Join 1,200+ creators who are already using AI to change their lives.</p>
            <a 
              href="https://digitalbagx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary text-black px-16 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/40"
            >
              Enroll Now - $49.99
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
