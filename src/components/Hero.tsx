import DataFragment from "./DataFragment";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center w-full bg-tiwis-black text-tiwis-offwhite relative border-b-8 border-tiwis-offwhite p-4 md:p-8">

      {/* HUD Bar at top */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between text-[10px] md:text-sm">
        <div>1P SCORE<br />000000</div>
        <div>HI-SCORE<br />999999</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl z-10">
        <h1 className="text-4xl md:text-[5vw] leading-normal text-tiwis-offwhite mb-8 tracking-widest text-shadow-pixel uppercase drop-shadow-[4px_4px_0_rgba(0,255,255,1)]">
          MINH LE
        </h1>

        <div className="pixel-border p-6 md:p-10 mb-16 max-w-2xl bg-black">
          <p className="text-[10px] md:text-sm leading-8 text-tiwis-offwhite uppercase">
            * SOFTWARE ENGINEER *<br /><br />
            Welcome to my portfolio!
          </p>
        </div>

        <div className="blink text-tiwis-red text-sm md:text-base mt-8 cursor-pointer pixel-button uppercase inline-block">
          INSERT COIN
        </div>
      </div>

      {/* Re-themed DataFragment hidden as a retro box */}
      <DataFragment id="fragment-hero" className="top-[30%] right-[15%] w-8 h-8 md:w-12 md:h-12 bg-tiwis-blue border-4 border-tiwis-offwhite animate-bounce" />
    </section>
  )
}
