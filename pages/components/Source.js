import React from 'react';

const Source = () => {
    return (
        <div className="m-auto w-full lg:my-0 lg:w-2/6">
            <div className="rounded border p-4">
                <div className="text-center font-semibold lg:mb-2">Sources</div>
                <div className="mb-4 flex flex-col space-y-2"></div>
                <p className="flex flex-col text-sm">
                    <span className="font-semibold">Total detected characters </span>
                    <span className="flex justify-center">
                        <span className="font-bold">0</span>{' '}
                        <span className="text-zinc-500">/ 400,000 limit</span>
                    </span>
                </p>
                <button
                    data-variant="flat"
                    className="Button_root__mFuNM mt-4 w-full"
                >
                    Create Chatbot
                </button>
            </div>
        </div>
    );
};

export default Source;
