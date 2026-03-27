import { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';

export default function TerminalModal() {
  const { isModalOpen, closeModal } = useGame();
  const [textIndex, setTextIndex] = useState(0);

  const dialog = [
    "YOU HAVE COLLECTED ALL THE KEYS!",
    "THE SECRET VAULT HAS BEEN OPENED.",
    "INSIDE, YOU FIND A MYSTERIOUS FLOPPY DISK...",
    "(RESUME.PDF ACQUIRED)"
  ];

  useEffect(() => {
    if (isModalOpen) {
      setTextIndex(0);
      let i = 0;
      const interval = setInterval(() => {
        if (i < dialog.length - 1) {
          i++;
          setTextIndex(prev => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 pointer-events-auto bg-black/80">
      <div className="w-full max-w-3xl border-8 border-tiwis-offwhite bg-tiwis-black p-8 relative shadow-[8px_8px_0_0_#ff0055]">
        
        {/* Retro Dialog Header */}
        <div className="absolute -top-[18px] left-8 bg-tiwis-black px-4 text-tiwis-red text-sm md:text-lg">
          SECRET_VAULT
        </div>

        <div className="min-h-[150px] mb-8 mt-6 text-[10px] md:text-sm leading-8 md:leading-10 text-tiwis-offwhite">
           {dialog.slice(0, textIndex + 1).map((line, idx) => (
               <p key={idx} className="mb-4">{line}</p>
           ))}
        </div>

        {textIndex === dialog.length - 1 && (
            <div className="flex justify-between items-end border-t-4 border-dashed border-tiwis-offwhite/50 pt-8 mt-8">
                <a 
                 href="/minresume9.pdf" 
                 target="_blank"
                 className="pixel-button text-[10px] md:text-sm"
                >
                  DOWNLOAD
                </a>
                
                <button 
                  onClick={closeModal}
                  className="text-tiwis-red hover:text-white blink text-xs md:text-sm"
                >
                  &lt; EXIT
                </button>
            </div>
        )}
      </div>
    </div>
  );
}
