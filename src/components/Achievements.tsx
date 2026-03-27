export default function Achievements() {
  const awards = [
    {
      id: 1,
      title: "CRIMSONHACKS",
      desc: "Awarded Funniest Idea by created a Mars-themed real-time photo app",
      year: "2025",
      image: "/mars-cam.png"
    },
    {
      id: 2,
      title: "AI AGENT HACKATHON",
      desc: "Built an AI agent that can detect Vercel deployment failures and automatically fix them and generate a PR waiting for you to review",
      year: "2026",
      image: "/minute-0.jpg"
    },
  ];

  return (
    <section id="achievements" className="w-full bg-tiwis-black p-4 md:p-16 border-b-8 border-tiwis-offwhite text-tiwis-offwhite relative">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-tiwis-offwhite mb-4 uppercase drop-shadow-[4px_4px_0_rgba(255,0,85,1)]">TROPHY ROOM</h2>
        <div className="text-[10px] md:text-xs text-tiwis-blue blink">ACHIEVEMENTS UNLOCKED: {awards.length}/{awards.length}</div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {awards.map((award) => (
          <div key={award.id} className="pixel-border p-6 bg-black flex gap-6 items-start hover:bg-tiwis-gray transition-none group">

            {/* Pixel Trophy Icon / Custom Image / Video Representation */}
            <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-yellow-400 border-4 border-white flex justify-center items-center shadow-[4px_4px_0_#ff0055] group-hover:scale-110 overflow-hidden relative">
              {(award as any).video ? (
                <video src={(award as any).video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : award.image ? (
                <img src={award.image} alt={award.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-black font-bold text-[10px] md:text-xs">🏆</span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-xs md:text-sm text-tiwis-blue mb-2 uppercase">{award.title}</h3>
              <p className="text-[8px] md:text-[10px] leading-5 md:leading-6 text-white/80 mb-4">{award.desc}</p>
              <div className="text-[8px] md:text-[10px] text-tiwis-red text-right">[{award.year}]</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
