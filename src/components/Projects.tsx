import DataFragment from './DataFragment';

const projects = [
  {
    id: 1,
    title: "NovaTempo",
    stack: "Python, FastAPI, Node.js, Javascript, Web Audio API, Strands Agents, Google Calendar API",
    desc: "A voice-first calendar assistant using Amazon Nova Sonic to help users manage their schedules and tasks.",
    stage: "STAGE 1",
    demoUrl: "https://nova-tempo.vercel.app/"
  },
  {
    id: 2,
    title: "Min0",
    stack: "Python, FastAPI, Cerebras, Github API, ChromaDB, Slack API",
    desc: "An AI agent that detects deployment failures, retrieves historical fixes, and generates pull requests; successfully diagnosed and resolved a live Vercel deployment failure",
    stage: "STAGE 2",
    demoUrl: "https://drive.google.com/file/d/1MX9aOXHwPIX-_HD4yQHHkymvmoXnWLxF/view?usp=sharing"
  },
  {
    id: 3,
    title: "LectureLens",
    stack: "Typescript, HTML/CSS, Cloudflare Workers, D1, Durable Objects, Workers AI, OAuth 2.0",
    desc: "A lecture assistant application that allows users to upload lecture materials and receive AI-generated summaries and notes.",
    stage: "STAGE 3",
    demoUrl: "https://lectrurelens.pages.dev"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col bg-tiwis-black p-4 md:p-16 border-b-8 border-tiwis-offwhite relative">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-tiwis-blue mb-4 uppercase drop-shadow-[4px_4px_0_rgba(255,0,85,1)]">STAGE SELECT</h2>
        <div className="text-[10px] md:text-xs">CHOOSE YOUR MISSION</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative z-10 w-full max-w-7xl mx-auto">
        {projects.map((proj, index) => (
          <div key={proj.id} className="pixel-border p-6 flex flex-col bg-black hover:bg-tiwis-gray transition-none group relative">
            <div className="text-tiwis-red text-[10px] mb-4">-- {proj.stage} --</div>
            <h3 className="text-sm md:text-base text-tiwis-blue mb-6 leading-relaxed group-hover:text-tiwis-offwhite blink">{proj.title}</h3>

            <div className="w-full h-32 md:h-48 border-4 border-tiwis-offwhite bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgoJPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0iIzAwMCIvPgoJPHBhdGggZD0iTTAgMEw4IDhNOCAwTDAgOCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] mb-6 flex items-center justify-center">
              <span className="text-[10px] bg-black px-2">{proj.stack}</span>
            </div>

            <p className="text-[10px] leading-6 mb-8 flex-1">{proj.desc}</p>

            <a
              href={proj.demoUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button w-full text-[10px] block text-center"
            >
              START &gt;
            </a>

            {/* The second project hides the key */}
            {index === 1 && (
              <DataFragment id="fragment-projects" className="bottom-[-20px] right-[-20px] w-10 h-10 md:w-16 md:h-16 bg-tiwis-red border-4 border-tiwis-offwhite rotate-45" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
