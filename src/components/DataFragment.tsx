import { useGame } from '../context/GameContext';

interface DataFragmentProps {
  id: string;
  className?: string; 
}

export default function DataFragment({ id, className = "" }: DataFragmentProps) {
  const { fragmentsFound, foundFragment } = useGame();
  const isFound = fragmentsFound.includes(id);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isFound) {
      foundFragment(id);
    }
  };

  if (isFound) return null;

  return (
    <div
      onClick={handleClick}
      className={`absolute cursor-pointer z-20 hover:scale-110 active:scale-90 flex items-center justify-center text-center shadow-[4px_4px_0_#fff] p-1 md:p-2 ${className}`}
      title="COLLECT KEY"
    >
        <span className="text-[6px] md:text-[8px] font-bold w-full text-center leading-[10px] text-white">K<br/>E<br/>Y</span>
    </div>
  );
}
