import React, { Fragment, useEffect, useRef } from 'react'


function Bookpage({ obj }) {

    const kitaab = useRef();

    useEffect(() => {
        const img_link = obj.img
        kitaab.current.style.backgroundImage = `url(${img_link})`
    })

    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center w-[200px] h-[450px]">
                <div className="h-[300px] w-[200px] overflow-hidden rounded-xl">
                    <div ref={kitaab} className="h-full w-full bg-cover bg-center"></div>
                </div>
                <div className="flex justify-center items-center mt-4"><a href={obj.download} className="text-[1em] border-[0.2em] border-[#a7a7a7] text-[#a7a7a7] hover:bg-[#000000] hover:border-[#000000] dark:hover:bg-[#a7a7a7] dark:hover:text-[#242424] dark:hover:border-[#a7a7a7] hover:text-[white] font-semibold pt-3 pb-3 pr-5 pl-5 rounded-full ease-in-out duration-300">Download</a></div>
            </div>

        </Fragment>

    )
}

export default Bookpage