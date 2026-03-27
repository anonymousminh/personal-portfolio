import DataFragment from './DataFragment';

export default function Footer() {
  return (
    <footer className="w-full bg-tiwis-black text-tiwis-offwhite p-8 md:p-16 text-center border-t-8 border-tiwis-red relative overflow-hidden">
      <div className="blink text-2xl md:text-4xl mb-12 text-tiwis-red">GAME OVER</div>

      <div className="text-[10px] md:text-xs mb-12 uppercase flex flex-col gap-8">
        <div>CONTINUE?</div>
        <div className="flex justify-center gap-12 text-tiwis-blue">
          <a href="https://www.linkedin.com/in/minhle7802/" className="hover:text-white transition-none">&gt; YES (LINKEDIN)</a>
          <a href="https://github.com/anonymousminh" className="hover:text-white transition-none">&gt; NO (GITHUB)</a>
        </div>
      </div>

      <div className="text-[8px] md:text-[10px] text-white/50 mt-16">
        (C) {new Date().getFullYear()} MINH LE_
      </div>

      {/* 3rd Data Fragment in footer */}
      <DataFragment id="fragment-footer" className="bottom-8 left-8 w-12 h-12 bg-tiwis-offwhite border-4 border-tiwis-blue animate-pulse" />
    </footer>
  )
}
