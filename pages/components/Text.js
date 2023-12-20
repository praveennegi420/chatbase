import React from 'react';

const Text = () => {
    return (
        <div className="max-w-2xl lg:w-4/6">
            <div className="mb-10 rounded border border-gray-200">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">Text</h3>
                </div>
                <div className="p-5">
                    <div className="w-full">
                        <textarea
                            placeholder="data"
                            name="data"
                            rows="20"
                            className="my-2 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                        ></textarea>
                        <p className="h-8 text-center text-sm text-gray-600"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Text;
