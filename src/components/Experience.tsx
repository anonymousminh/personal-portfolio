// No unused imports

const experiences = [
  {
    id: 1,
    role: "AI Researcher",
    company: "Algoverse",
    duration: "JULY 2025 - JAN 2026",
    description: [
      "Built production-grade Python data pipelines processing 1M+ records on X",
      "Implemented automated evaluation systems achieving 87% accuracy for LLM jailbreak detection",
      "Designed dashboards to visualize system metrics and behavioral trends, accelerating iteration cycles",
    ],
    status: "IN PROGRESS - Paper under review"
  },
  {
    id: 2,
    role: "Full-Stack Engineer Intern",
    company: "IDX Exchange LLC",
    duration: "OCT 2025 - DEC 2025",
    description: [
      "Built a full-stack web application listing 52,000+ real estate in California using React, TypeScript, Java, and Spring Boot.",
      "Built NLP-powered search pipelines improving user task completion by 60%",
      "Integrated geospatial clustering and filtering to improve discovery by 50%",
      "Developed AI-powered customer support chatbot automating 80% of common inquiries"
    ],
    status: "COMPLETED"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full flex flex-col bg-tiwis-black p-4 md:p-16 border-b-8 border-tiwis-offwhite relative">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-tiwis-blue mb-4 uppercase drop-shadow-[4px_4px_0_rgba(255,0,85,1)]">QUEST LOG</h2>
        <div className="text-[10px] md:text-xs text-tiwis-red">CAREER CAMPAIGN PROGRESS</div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative z-10 w-full max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <div key={exp.id} className="pixel-border p-6 flex flex-col md:flex-row bg-black hover:bg-tiwis-gray transition-none group relative">

            <div className="md:w-1/3 mb-6 md:mb-0 border-b-4 md:border-b-0 md:border-r-4 border-tiwis-offwhite md:pr-6 md:mr-6 flex flex-col justify-start">
              <div className="text-tiwis-red text-[10px] mb-4">-- {exp.status} --</div>
              <h3 className="text-sm md:text-base text-tiwis-blue mb-2 leading-relaxed group-hover:text-tiwis-offwhite uppercase">{exp.role}</h3>
              <div className="text-[10px] md:text-xs text-tiwis-offwhite mb-2">{exp.company}</div>
              <div className="text-[10px] text-gray-400">{exp.duration}</div>
            </div>

            <div className="md:w-2/3 flex flex-col justify-center">
              <ul className="list-none space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[10px] md:text-xs leading-6 flex items-start group-hover:text-white text-gray-300">
                    <span className="text-tiwis-red mr-3 mt-1 blink">&gt;</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
