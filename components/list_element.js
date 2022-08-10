import React from 'react'


function List_element({ obj }) {

var date = Date.parse(obj._createdAt);

function format(date) {
  date = new Date(date);

  var day = ('0' + date.getDate()).slice(-2);
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();

  return day + '-' + month + '-' + year;
}

console.log(format(date));

    return (
        <div>

            <div id="lists" className="flex flex-1 justify-between lists w-full rounded-full items-center p-3 dark:bg-[#202020] dark:border-[#202020]">
                <div className="flex items-center space-x-2">
                    <div id="sub" className="flex h-2 p-4 text-xs lg:text-sm lg:h-4 lg:p-4 subject items-center rounded-full dark:bg-[#505050]">
                        <p>{obj.subject}</p>
                    </div>
                    <div className="flex h-2 p-4 text-xs lg:text-sm lg:h-4 lg:p-4 date items-center rounded-full">
                        <p>{obj.date}</p>
                    </div>
                </div>
                <div>
                    <a href={obj.download} id="download" className="pointer download p-3 rounded-full ri-download-cloud-line ease-in-out duration-200"></a>
                </div>
            </div>

            <div className="flex justify-end items-center p-1 mr-4 text-[12px] text-[#9e9e9e]">
                <p className=" font-bold">Uploaded on : {format(obj._createdAt)}</p>
            </div>

        </div>
    )
}

export default List_element