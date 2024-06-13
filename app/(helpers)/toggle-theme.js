'use client';
import React from 'react';
import { useTheme } from 'next-themes';

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="absolute bottom-2 left-2 rounded-lg 
      bg-gray-800 px-8 py-2 text-white transition-all duration-100 hover:bg-gray-600 
      dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 md:bottom-auto md:left-auto md:right-5 md:top-3"
    >
      Toggle Mode
    </button>
  );
};

export default ToggleButton;
