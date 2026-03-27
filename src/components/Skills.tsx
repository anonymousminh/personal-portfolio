export default function Skills() {
  const skillCategories = [
    {
      category: "LANGUAGES",
      skills: ["TypeScript", "Python", "Java", "JavaScript", "HTML/CSS", "SQL", "C++"]
    },
    {
      category: "FRAMEWORKS",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "Express"]
    },
    {
      category: "TOOLS",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux"]
    }
  ];

  return (
    <section id="skills" className="w-full bg-tiwis-black p-4 md:p-16 border-b-8 border-tiwis-offwhite text-tiwis-offwhite">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-tiwis-red mb-4 uppercase drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)]">SKILL TREE</h2>
        <div className="text-[10px] md:text-xs text-tiwis-blue">LEVEL 99 ENGINEER</div>
      </div>

      <div className="max-w-4xl mx-auto pixel-border p-8 bg-black">
        {skillCategories.map((group, idx) => (
          <div key={group.category} className={`flex flex-col md:flex-row items-start ${idx < skillCategories.length - 1 ? 'mb-8' : ''}`}>
            <div className="w-48 text-[10px] md:text-xs mb-4 md:mb-0 text-white uppercase pt-2">
              {group.category}
            </div>
            <div className="flex-1 flex flex-wrap gap-3 w-full items-center">
              {group.skills.map(skill => (
                <div key={skill} className="px-3 py-1 bg-tiwis-offwhite text-black font-bold text-[8px] md:text-[10px] shadow-[2px_2px_0_#ff0055] hover:-translate-y-1 hover:shadow-[4px_4px_0_#ff0055] transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
