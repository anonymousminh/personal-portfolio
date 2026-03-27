export default function Skills() {
  const stats = [
    { name: "FRONTEND", level: 85 },
    { name: "BACKEND", level: 95 },
    { name: "DATA_SCI", level: 95 },
    { name: "MACHINE_LRN", level: 90 }
  ];

  return (
    <section id="skills" className="w-full bg-tiwis-black p-4 md:p-16 border-b-8 border-tiwis-offwhite text-tiwis-offwhite">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-tiwis-red mb-4 uppercase drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)]">CHARACTER STATS</h2>
        <div className="text-[10px] md:text-xs text-tiwis-blue">LEVEL 99 ENGINEER</div>
      </div>

      <div className="max-w-4xl mx-auto pixel-border p-8 bg-black">
        {stats.map((stat, idx) => (
          <div key={stat.name} className={`flex flex-col md:flex-row items-start md:items-center ${idx < stats.length - 1 ? 'mb-8' : ''}`}>
            <div className="w-48 text-[10px] md:text-xs mb-2 md:mb-0 text-white">
              {stat.name}
            </div>
            <div className="flex-1 flex gap-1 w-full items-center">
              {/* 10 blocks logic */}
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`h-6 flex-1 ${i < Math.floor(stat.level / 10) ? 'bg-tiwis-offwhite border-2 border-black' : 'bg-transparent border-2 border-white/20'}`}></div>
              ))}
              <div className="ml-4 text-[10px] md:text-xs w-12 text-right text-tiwis-red flex-shrink-0">
                {stat.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
