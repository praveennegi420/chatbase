import React from 'react';

const Middle = () => {
    return (
        <div className="max-w-2xl lg:w-4/6">
            <div className="mb-10 rounded border border-gray-200">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">Files</h3>
                </div>
                <div className="p-5">
                    <div>
                        <div role="presentation" tabIndex="0" className="border border-neutral-200 p-16">
                            <input accept="text/html,.pdf,.doc,.docx,.txt" multiple type="file" tabIndex="-1" name="file" style={{ display: 'none' }} />
                            <div className="flex flex-col items-center justify-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 fill-current">
                                    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>
                                <div className="items-center justify-center text-center">
                                    <p className="text-sm text-gray-600">Drag &amp; drop files here, or click to select files</p>
                                    <span className="text-xs text-gray-500 dark:text-gray-300" id="file_type_help">Supported File Types: .pdf, .doc, .docx, .txt</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-300" id="file_input_help">If you are uploading a PDF, make sure you can select/highlight the text.</p>
                        <div className="pt-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
