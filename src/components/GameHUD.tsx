import { useGame } from '../context/GameContext';

export default function GameHUD() {
  const { fragmentsFound, totalFragments } = useGame();

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] border-t-8 border-tiwis-offwhite bg-tiwis-black p-4 text-[10px] md:text-sm tracking-widest uppercase flex justify-between items-center pointer-events-none">
        
      <div className="flex gap-4">
        <span className="text-tiwis-red">HP</span>
        <span>[====  ]</span>
      </div>

      <div className="flex gap-4 items-center">
        <span className="text-tiwis-blue">KEYS</span>
        <span className="text-tiwis-offwhite">
          {fragmentsFound.length}/{totalFragments}
          {fragmentsFound.length === totalFragments && <span className="text-tiwis-red ml-4 blink">UNLOCKED!</span>}
        </span>
      </div>

    </div>
  );
}
