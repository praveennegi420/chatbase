import React from 'react';
const Qna = () => {
    return (
        <div className="max-w-2xl lg:w-4/6">
            <div className="mb-10 rounded border border-gray-200">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">Q&amp;A</h3>
                </div>
                <div className="p-5">
                    <div className="">
                        <div className="my-2 flex justify-end">
                            <button
                                type="button"
                                className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qna;
