import React from 'react'


function List_element({obj}) {

    return (

            <div id="lists" className="flex flex-1 justify-between lists w-full rounded-full items-center p-3">
                <div className="flex items-center space-x-2">
                    <div id="sub" className="flex h-2 p-4 text-xs lg:text-sm lg:h-4 lg:p-4 subject items-center rounded-full">
                        <p>{obj.subject}</p>
                    </div>
                    <div className="flex h-2 p-4 text-xs lg:text-sm lg:h-4 lg:p-4 date items-center rounded-full">
                        <p>{obj.date}</p>
                    </div>
                </div>
                <div>
                    <a href={obj.download} id="download" className="pointer download p-3 rounded-full ri-download-cloud-line ease-in-out duration-500"></a>
                </div>
            </div>
    )
}

export default List_element