import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (

        <div className="">
            <div className="">
                <div className="grid grid-cols-4 gap-4">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://anshuman2305.github.io/Daily-Notes/" target="_blank" rel="noopener noreferrer" id="share" className="pointer w-14 h-14 dark:bg-[#5a5a5a] dark:hover:bg-[#474747] bg-[#ccc] dark:text-[#ccc] hover:bg-[#444444] flex items-center justify-center share rounded-full ri-facebook-fill ease-in-out duration-200 col-span-1"></a>
                    <a href="https://api.whatsapp.com/send?text=पेश है आपके आज के माइनिंग नोट्स - https://anshuman2305.github.io/Daily-Notes/" target="_blank" rel="noopener noreferrer" id="share" className="pointer w-14 h-14 dark:bg-[#5a5a5a] dark:hover:bg-[#474747] bg-[#ccc] dark:text-[#ccc] hover:bg-[#444444] flex items-center justify-center share rounded-full ri-whatsapp-line ease-in-out duration-200 col-span-1"></a>
                    <a href="mailto:?subject=पेश है आपके आज के माइनिंग नोट्स&amp;body=Check out this site https://anshuman2305.github.io/Daily-Notes/." target="_blank" rel="noopener noreferrer" id="share" className="pointer w-14 h-14 dark:bg-[#5a5a5a] dark:hover:bg-[#474747] bg-[#ccc] dark:text-[#ccc] hover:bg-[#444444] flex items-center justify-center share rounded-full ri-mail-line ease-in-out duration-200 col-span-1"></a>
                    <button
                        className="pointer w-14 h-14 bg-[#cccccc] dark:bg-[#242424] rounded-full flex items-center justify-center focus:outline-none col-span-1"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="bg-[#242424] text-[#cccccc] p-5 rounded-full" />
                        ) : (
                            <SunIcon className="bg-[#cccccc] text-[#242424] p-5 rounded-full" />
                        )}
                    </button>
                </div>

            </div>
        </div>



    );
};

export default ThemeToggler;