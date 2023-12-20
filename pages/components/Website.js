import React from 'react';

const Website = () => {
    return (
        <div className="max-w-2xl lg:w-4/6">
            <div className="mb-10 rounded border border-gray-200">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">Website</h3>
                </div>
                <div className="p-5">
                    <div>
                        <label className="my-2 block text-sm font-medium leading-6 text-gray-900">Crawl</label>
                        <div className="relative mt-2 rounded-md">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    name="website"
                                    className="flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                                    placeholder="https://www.example.com"
                                    value=""
                                />
                                <button data-variant="flat" className="Button_root__mFuNM" >
                                    Fetch links
                                </button>
                            </div>
                            <div className="py-4 text-sm text-zinc-600">
                                This will crawl all the links starting with the URL (not including files on the website).
                            </div>
                        </div>
                        <div className="my-4 flex items-center">
                            <hr className="w-full border-t border-gray-300" />
                            <span className="whitespace-nowrap px-2 text-gray-600">OR</span>
                            <hr className="w-full border-t border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="sitemap" className="my-2 block text-sm font-medium leading-6 text-gray-900">
                                Submit Sitemap
                            </label>
                            <div className="relative mt-2 rounded-md">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        name="sitemap"
                                        className="flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                                        placeholder="https://www.example.com/sitemap.xml"
                                        value=""
                                    />
                                    <button data-variant="flat" className="Button_root__mFuNM" >
                                        Load sitemap
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <div className="my-4 flex items-center">
                                <hr className="w-full border-t border-gray-300" />
                                <span className="whitespace-nowrap px-2 text-gray-600">Included Links</span>
                                <hr className="w-full border-t border-gray-300" />
                            </div>
                            <div className="mt-5 max-h-[36rem] overflow-auto pr-2"></div>
                            <div className="my-2 flex justify-end">
                                <button
                                    type="button"
                                    className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <div
                            aria-live="assertive"
                            className="pointer-events-none fixed inset-0 z-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
                        >
                            <div className="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Website;
