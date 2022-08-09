import React from 'react'

function Header() {
  return (
    <div className="justify-between lg:max-w-6xl mx-auto max-h-screen items-center">
        <div className="flex flex-col items-center lg:flex-row flex-1 justify-between p-10 lg:p-20 lg:pb-5 lg:pt-15 pb-5 pt-15">
            <div className="flex items-center">
                <div className="logo flex-col text-center leading-[3.5em]">
                    <h1 className="text-[6em] font-extrabold">am</h1>
                    <p id="logo" className="text-[1.6em]">Daily Notes</p>    
                </div>
            </div>
            
            <div className="flex items-center">
                <div className="items-center space-x-4">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://anshuman2305.github.io/Daily-Notes/" target="_blank" id="share" class="pointer p-5 share rounded-full ri-facebook-fill ease-in-out duration-500"></a>
                    <a href="https://api.whatsapp.com/send?text=पेश है आपके आज के माइनिंग नोट्स - https://anshuman2305.github.io/Daily-Notes/" target="_blank" id="share" class="pointer p-5 share rounded-full ri-whatsapp-line ease-in-out duration-500"></a>
                    <a href="mailto:?subject=पेश है आपके आज के माइनिंग नोट्स&amp;body=Check out this site https://anshuman2305.github.io/Daily-Notes/." target="_blank" id="share" class="pointer p-5 share rounded-full ri-mail-line ease-in-out duration-500"></a>
                    <button onClick="togglemode()" id="darkmode" className="pointer w-16 h-16 darkmode rounded-full ri-moon-fill"></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header