import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {

    return (
        <>
            <div className="flex flex-col">
                <header className="w-full flex-col rounded-t-3xl border-b lg:flex">
                    <section className="z-10 flex flex-row items-center justify-between px-6 py-6 lg:px-8">
                        <div className="flex items-center">
                            <div>
                                <nav className="flex" aria-label="Breadcrumb">
                                    <div role="list" className="flex flex-row items-center space-x-2 sm:space-x-0">
                                        <div className="flex items-center">
                                            <Link href="/">
                                                <div className="flex flex-row items-center gap-1">
                                                    <Image
                                                        alt="Chatbase"
                                                        loading="lazy"
                                                        width={32}
                                                        height={32}
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="aspect-square rounded-lg"
                                                        style={{ color: 'transparent' }}
                                                        src="https://www.chatbase.co/images/chatbase-logo.svg"
                                                    />
                                                    <span className="hidden text-lg font-normal md:block text-slate-800">Chatbase</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <button
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:Rcol6:"
                                data-state="closed"
                                className="flex flex-row items-start justify-start gap-3 lg:hidden"
                            >
                                <div className="flex flex-row items-center font-medium transition-all ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 text-slate-900"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                    </svg>
                                </div>
                            </button>
                            <Link
                                className="hidden rounded-lg p-2 text-sm font-semibold leading-6 text-slate-600 outline-0 transition-all duration-75 ease-in-out hover:text-slate-900 lg:block"
                                href="/help"
                            >
                                Help
                            </Link>
                            <Link
                                className="hidden rounded-lg p-2 text-sm font-semibold leading-6 text-slate-600 outline-0 transition-all duration-75 ease-in-out hover:text-slate-900 lg:block"
                                href="/account"
                            >
                                Account<span aria-hidden="true"> →</span>
                            </Link>
                        </div>
                    </section>
                </header>
            </div>
            <div className="my-8">
                <h1 className="mb-2 text-center text-3xl font-bold">Data Sources</h1>
                <p className="text-center text-zinc-500">Add your data sources to train your chatbot</p>
            </div>
        </>
    )
}