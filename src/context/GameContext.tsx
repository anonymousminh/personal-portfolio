import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface GameContextType {
  fragmentsFound: string[];
  isModalOpen: boolean;
  foundFragment: (id: string) => void;
  closeModal: () => void;
  totalFragments: number;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fragmentsFound, setFragmentsFound] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalFragments = 3;

  const foundFragment = (id: string) => {
    setFragmentsFound((prev) => {
      if (!prev.includes(id)) {
        const newFragments = [...prev, id];
        // If they found all of them, open the modal
        if (newFragments.length === totalFragments) {
          setTimeout(() => setIsModalOpen(true), 1500); // Slight delay for dramatic effect
        }
        return newFragments;
      }
      return prev;
    });
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <GameContext.Provider
      value={{
        fragmentsFound,
        isModalOpen,
        foundFragment,
        closeModal,
        totalFragments,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
