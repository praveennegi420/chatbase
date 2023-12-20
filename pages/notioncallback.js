import { useEffect} from 'react';
import { useRouter } from 'next/router';
import cors from 'cors';
import Link from 'next/link';

export default function NotionCallback () {
    const router = useRouter();

    useEffect(() => {
        const getToken = async () => {
          try {
            const response = await fetch('/api/notiondata', {
              method: 'POST', 
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                code: router.query.code,
              }),
            });
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Token response:', data);
            // window.close();
          } catch (error) {
            console.error('Error fetching token:', error);
          }
        };
        
        if(router.query.code!=undefined) getToken();
      }, [router.query.code]);

    return (
        <div>
            <nav className="relative isolate z-10 flex justify-center">
                <div className="flex w-full items-center justify-between px-6 pt-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:hidden lg:flex-1">
                        <Link href="/">
                            <span className="sr-only">Chatbase</span>
                            <div className="flex flex-row items-center gap-1">
                                <img alt="Chatbase" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="aspect-square rounded-lg" style={{ color: 'transparent' }} src="https://www.chatbase.co/images/chatbase-logo.svg" />
                                <span className="hidden text-lg font-normal md:block text-slate-800 ">Chatbase</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-between rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full items-center lg:flex lg:gap-x-12">
                        <div className="hidden lg:flex lg:flex-1 ">
                            <Link className="-m-1.5 p-1.5" href="/">
                                <span className="sr-only">Chatbase</span>
                                <div className="flex flex-row items-center gap-1">
                                    <img alt="Chatbase" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="aspect-square rounded-lg" style={{ color: 'transparent' }} src="https://www.chatbase.co/images/chatbase-logo.svg" />
                                    <span className="hidden text-lg font-normal md:block text-slate-800 ">Chatbase</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-row gap-14">
                            <Link target="_blank" className="text-sm font-semibold leading-6 text-gray-900" href="https://affiliates.chatbase.co/signup">Affiliate</Link>
                            <Link target="_self" className="text-sm font-semibold leading-6 text-gray-900" href="/pricing">Pricing</Link>
                            <Link target="_blank" className="text-sm font-semibold leading-6 text-gray-900" href="https://docs.chatbase.co/docs">API</Link>
                            <Link target="_self" className="text-sm font-semibold leading-6 text-gray-900" href="/guide/main">Guide</Link>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link className="text-sm font-semibold leading-6 text-gray-900" href="/my-chatbots">Chatbots <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'fixed', top: '1px', left: '1px', width: '1px', height: '0', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0', display: 'none' }}></div>
            </nav>

            <main id="skip">
                <section className="bg-white">
                    <div className="py-16 sm:py-24">
                        <div className="flex h-40 flex-row items-center justify-center gap-2">
                            <p className="font-bold">Fetching Notion credentials</p>
                            <span className="LoadingDots_root__IA4pe [&amp;>span]:bg-zinc-400">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="relative z-30 w-full px-6 bg-zinc-100 text-black">
                <div className="flex flex-row justify-between border-b border-zinc-400 bg-zinc-100 py-12 text-black transition-colors duration-150">
                    <div className="col-span-1 lg:col-span-2 text-slate-800">
                        <Link className="flex flex-initial items-center font-bold md:mr-24" href="/">
                            <span className="mb-6">
                                <div className="flex flex-row items-center gap-1">
                                    <img alt="Chatbase" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="aspect-square rounded-lg" style={{ color: 'transparent' }} src="https://www.chatbase.co/images/chatbase-logo.svg" />
                                    <span className="hidden text-lg font-normal md:block text-slate-800 ">Chatbase</span>
                                </div>
                            </span>
                        </Link>
                        <Link className="block text-sm " href="/privacy">Privacy Policy</Link>
                        <Link className="block text-sm " href="/terms">Terms of Service</Link>
                    </div>
                    <div className="col-span-1 flex items-start text-black lg:col-span-6 lg:justify-end">
                        <div className="flex h-10 items-center space-x-6">
                            <Link aria-label="LinkedIn Account" target="_blank" href="https://www.linkedin.com/company/chatbase-co">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-800">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-6  text-black">
                    <Link href="/help">
                        <button className="w-auto whitespace-nowrap rounded border bg-inherit py-1 px-2 font-semibold border-zinc-400 text-black hover:bg-zinc-200 hover:text-black">Contact support</button>
                    </Link>
                </div>
            </footer>
        </div>
    );
};
