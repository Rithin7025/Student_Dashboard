import React from 'react'
import { useSelector,  } from 'react-redux'
import { RootState } from '../redux/store'; // Import the RootState type from your store file

interface ThemeProviderProps {
    children: React.ReactNode;
  }

  const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Define the type for the theme state
    const { theme } = useSelector((state: RootState) => state.theme);
  
    return (
      <div className={theme}>
        <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)]'>
          {children}
        </div>
      </div>
    );
  };
  
  export default ThemeProvider;