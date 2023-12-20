import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Source from './components/Source';
import Qnadata from './components/Qna';

export default function Qna() {
  return (
    <>
      <Navbar />
      <div>
        <div class="max-w-7xl px-4 lg:mx-auto">
          <div class="grid grid-cols-12 gap-8">
            <Sidebar />
            <div class="col-span-12 sm:col-span-8 lg:col-span-10">
              <div class="flex flex-col align-top lg:flex-row lg:space-x-8 lg:align-middle">
                <Qnadata />
                <Source />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
