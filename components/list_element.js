import React, { useEffect, useRef } from 'react'


function List_element({ obj }) {

var date = Date.parse(obj._createdAt);

function format(date) {
  date = new Date(date);

  var day = ('0' + date.getDate()).slice(-2);
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();

  return day + '-' + month + '-' + year;
}

//changing color
const sub = obj.subject
const box = useRef();

var tag_color = new Map([["Mine Survey","#AB7894"], ["Mine Economics","#6F77BC"], ["Mine Closure...","#759575"], ["Urban Hydrology","#6AA6B9"], ["Survey Practical","#9C8671"]]);


useEffect(()=>{

    for(var i=0; i<tag_color.size; i++)
    {
        if(tag_color.has(sub))
        {
            box.current.style.backgroundColor = tag_color.get(sub);
            break;
        }
        
    }
});


    return (
        <div>

            <div id="lists" className="flex flex-1 justify-between lists w-full rounded-full items-center p-3 dark:bg-[#202020] dark:border-[#202020] ease-in-out duration-200">
                <div className="flex items-center space-x-2">
                    <div id="sub" ref={box} className="flex h-2 p-4 text-xs lg:text-sm lg:h-4 lg:p-4 subject items-center rounded-full dark:bg-[#505050]">
                        <p>{obj.subject}</p>
                    </div>
                    <div className="flex h-2 p-4 text-xs lg:text-sm lg:h-4 lg:p-4 date items-center rounded-full">
                        <p>{obj.date}</p>
                    </div>
                </div>
                <div>
                    <a href={obj.download} id="download" target="_blank" rel="noopener noreferrer" className="pointer download p-3 rounded-full ri-download-cloud-line ease-in-out duration-200"></a>
                </div>
            </div>

            <div className="flex justify-end items-center p-1 mr-4 text-[12px] text-[#9e9e9e]">
                <p className=" font-bold">Last Updated : {format(obj._createdAt)}</p>
            </div>

        </div>
    )
}

export default List_element