import React from 'react'
import ThemeToggler from './ThemeToggler'

function Header() {
  return (
    <div className="justify-between lg:max-w-6xl mx-auto max-h-screen items-center">
        <div className="flex flex-col items-center lg:flex-row flex-1 justify-between p-10 lg:p-20 lg:pb-5 lg:pt-15 pb-5 pt-15">
            <div className="flex items-center">
                <div className="logo flex-col text-center leading-[3.5em]">
                    <h1 className="text-[6em] font-extrabold dark:text-[#ccc] text-[#535353]">am</h1>
                    <p id="logo" className="text-[1.5em] dark:text-[#ccc] text-[#535353] ">NOTEBOOK</p>    
                </div>
            </div>
            
            
                    <ThemeToggler />

                
            
        </div>
    </div>
  )
}

export default Header