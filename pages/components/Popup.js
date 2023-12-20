import React from 'react';
import { useEffect } from 'react';

const Popup = (props) => {

    
    return (
        <div className={props.view? "relative z-10" : "hidden"} id="headlessui-dialog-:r3:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r5:">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-100">
            </div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
                    <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 opacity-100 translate-y-0 sm:scale-100" id="headlessui-dialog-panel-:r1:" data-headlessui-state="open">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-50 sm:mx-0 sm:h-10 sm:w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-medium leading-6 text-gray-900" id="headlessui-dialog-title-:r2:" data-headlessui-state="open">Connect Notion</h3>
                                <div className="mt-2 flex flex-col gap-4">
                                    <p className="mt-2 mb-0 font-semibold">A Notion popup will now appear.</p>
                                    <p className="mb-2 font-semibold">Please dont unselect already selected pages.</p>
                                    <p className="text-sm text-zinc-500">Please note that the pages you select will affect the Notion pages Chatbase has access to across all your chatbots, as well as any other Chatbase accounts connected to the same Notion account.</p>
                                    <p className="mb-2 text-sm text-zinc-500">If you have any previously selected pages for other active chatbots. Please leave them selected.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button type="button" onClick={()=>window.open('https://api.notion.com/v1/oauth/authorize?client_id=fefbf096-4a5b-48d1-9f69-5d1e52a64363&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fchatbase-test.vercel.app%2Fnotioncallback','_blank','menubar=yes,resizable=no, scrollbars=yes, status=no, height=750, width=500, left=580 top=120')} className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">I understand</button>
                            <button type="button" onClick={() => props.setView(false)} className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
