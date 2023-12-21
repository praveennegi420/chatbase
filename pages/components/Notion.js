import React from 'react';
import { useEffect } from 'react';
import Popup from './Popup';
import PageContent from './PageContent';

const Notion = () => {
    const [popUp, setPopUp] = React.useState(false);
    const [popClosed, setPopClosed] = React.useState(false);
    const [notionDataChanged, setNotionDataChanged] = React.useState([]);
    let val=0;
    useEffect(() => {
        const data= JSON.parse(localStorage.getItem('notionData')); 
        setNotionDataChanged(data);
    }, [popClosed]);

    console.log(notionDataChanged);
    
    return ( 
        <div className="max-w-2xl lg:w-4/6">
            <div className="mb-10 rounded border border-gray-200">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">Notion</h3>
                </div>
                <div className="p-5">
                    <div className="flex flex-col items-center">
                        <div className="py-12">
                            <button
                                data-variant="flat"
                                onClick={() => setPopUp(true)}
                                className="inline-flex items-center justify-center h-8 transform-none normal-case cursor-pointer rounded leading-6 transition ease-in-out duration-150 shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-violet-500 border border-bg-grey-400 w-fit gap-3 bg-white p-6 font-semibold text-black hover:bg-gray-100 hover:text-black"
                            >
                                <svg
                                    viewBox="13.38 3.2 485.44 505.7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="black"
                                >
                                    <path d="m186.84 13.95c-79.06 5.85-146.27 11.23-149.43 11.86-8.86 1.58-16.92 7.59-20.71 15.5l-3.32 6.96.32 165.88.47 165.88 5.06 10.28c2.85 5.69 22.14 32.26 43.17 59.61 41.59 53.92 44.59 56.93 60.4 58.51 4.59.47 39.06-1.11 76.38-3.32 37.48-2.37 97.56-6.01 133.62-8.06 154.01-9.35 146.1-8.56 154.95-16.15 11.07-9.17 10.28 5.85 10.75-195.76.32-170.94.16-182.16-2.37-187.38-3-5.85-8.38-9.96-78.59-59.3-46.96-32.89-50.28-34.63-71.32-34.95-8.69-.31-80.48 4.43-159.38 10.44zm177.73 21.66c6.64 3 55.19 36.84 62.3 43.33 1.9 1.9 2.53 3.48 1.58 4.43-2.21 1.9-302.66 19.77-311.35 18.5-3.95-.63-9.8-3-13.12-5.22-13.76-9.33-47.91-37.32-47.91-39.37 0-5.38-1.11-5.38 132.83-15.02 25.62-1.74 67.68-4.9 93.3-6.96 55.49-4.43 72.1-4.27 82.37.31zm95.51 86.5c2.21 2.21 4.11 6.48 4.74 10.59.47 3.8.79 74.64.47 157.18-.47 141.68-.63 150.54-3.32 154.65-1.58 2.53-4.74 5.22-7.12 6.01-6.63 2.69-321.46 20.56-327.94 18.66-3-.79-7.12-3.32-9.33-5.53l-3.8-4.11-.47-152.75c-.32-107.21 0-154.65 1.27-158.92.95-3.16 3.32-6.96 5.38-8.22 2.85-1.9 21.51-3.48 85.71-7.27 45.07-2.53 114.8-6.8 154.81-9.17 95.17-5.86 94.86-5.86 99.6-1.12z"></path>
                                    <path d="m375.48 174.45c-17.08 1.11-32.26 2.69-34 3.64-5.22 2.69-8.38 7.12-9.01 12.18-.47 5.22 1.11 5.85 18.18 7.91l7.43.95v67.52c0 40.16-.63 66.73-1.42 65.94-.79-.95-23.24-35.1-49.97-75.9-26.72-40.95-48.86-74.64-49.18-74.95-.32-.32-17.71.63-38.58 2.06-25.62 1.74-39.69 3.32-42.54 4.9-4.59 2.37-9.65 10.75-9.65 16.29 0 3.32 6.01 5.06 18.66 5.06h6.64v194.18l-10.75 3.32c-8.38 2.53-11.23 4.11-12.65 7.27-2.53 5.38-2.37 10.28.16 10.28.95 0 18.82-1.11 39.37-2.37 40.64-2.37 45.22-3.48 49.49-11.86 1.27-2.53 2.37-5.22 2.37-6.01 0-.63-5.53-2.53-12.18-4.11-6.8-1.58-13.6-3.16-15.02-3.48-2.69-.79-2.85-5.69-2.85-73.69v-72.9l48.07 75.43c50.44 79.06 56.77 88.08 64.52 92.03 9.65 5.06 34.16 1.58 46.49-6.48l3.8-2.37.32-107.84.47-108 8.38-1.58c9.96-1.9 14.55-6.48 14.55-14.39 0-5.06-.32-5.38-5.06-5.22-2.83.13-19.12 1.08-36.04 2.19z"></path>
                                </svg>
                                Connect Notion
                            </button>
                        </div>
                        <div className="font-semibold"></div>
                        {   notionDataChanged ? (
                            <div className="flex w-full max-h-64 overflow-y-auto flex-col items-center ">
                            <div className="w-full">
                                <div className="my-4 flex items-center">
                                    <hr className="w-full border-t border-gray-300" />
                                    <span className="whitespace-nowrap px-2 text-gray-600">Imported Pages</span>
                                    <hr className="w-full border-t border-gray-300" />
                                </div>
                                { notionDataChanged?.map((data,val)=> <PageContent data={data} key={val+1}/> )}
                            </div>
                            
                        </div>) : <></> 
                        }
                        <div
                            aria-live="assertive"
                            className="pointer-events-none fixed inset-0 z-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
                        >
                            <div className="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Popup view={popUp} setView={setPopUp} setPopup={setPopClosed}/>
        </div>
    );
};
  
export default Notion;
