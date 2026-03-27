import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-reveal", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="w-full bg-tiwis-black py-32 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-white/10">
      {/* Background flare */}
      <div className="absolute w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>
      
      <div className="max-w-4xl relative z-10">
        <h2 className="cta-reveal text-5xl md:text-7xl lg:text-8xl font-condensed font-bold uppercase tracking-tighter text-tiwis-offwhite mb-8">
          Let's build <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiwis-blue to-tiwis-red">something together.</span>
        </h2>
        
        <p className="cta-reveal text-xl md:text-2xl font-body text-white/50 mb-16 max-w-2xl mx-auto font-light">
          An idea, a project, or simply need to challenge the status quo? Let's talk.
        </p>

        <div className="cta-reveal flex justify-center">
            <a href="mailto:contact@example.com" className="group flex items-center justify-between w-[280px] bg-transparent text-white border border-white/20 hover:bg-white hover:text-tiwis-black hover:border-white px-8 py-5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden relative cursor-pointer">
                <span className="absolute left-8 w-10 h-10 rounded-full bg-tiwis-red flex items-center justify-center -translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-10">
                    <ArrowRight size={20} className="text-white" />
                </span>
                
                <span className="font-condensed flex-1 text-center uppercase tracking-widest text-xl font-bold z-10 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-6">
                    Let's Talk
                </span>
                
                <span className="w-8 h-8 flex justify-end items-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-10 group-hover:opacity-0 group-hover:translate-x-8 text-white group-hover:text-tiwis-black">
                    <ArrowRight size={24} />
                </span>
            </a>
        </div>
      </div>
    </section>
  )
}
