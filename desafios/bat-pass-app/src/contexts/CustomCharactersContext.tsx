import React, { createContext, useState, ReactNode  } from 'react';

interface CustomCharactersContextProps {
    customCharacters: string,
    setCustomCharacters: (value: string) => void,
    customLength: number,
    setCustomLength: (value: number) => void,
}

interface CustomCharactersProviderProps {
    children: ReactNode;
}

export const CustomCharactersContext = createContext<CustomCharactersContextProps | undefined>(undefined);

export const CustomCharactersProvider: React.FC<CustomCharactersProviderProps> = ({ children }) => {
  const [customCharacters, setCustomCharacters] = useState<string>('');
  const [customLength, setCustomLength] = useState<number>(8);

  return (
    <CustomCharactersContext.Provider value={{ customCharacters, setCustomCharacters, customLength, setCustomLength }}>
      {children}
    </CustomCharactersContext.Provider>
  );
};