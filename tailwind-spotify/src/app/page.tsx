import {
  HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-6 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search /> Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library /> Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Mix Anos 2010
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily Mix 5
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              日本語
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Caminho Diário
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/album.jpg"
                width={104}
                height={104}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong>Metropolis, Pt.2: Scenes From a Memory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/album.jpg"
                width={104}
                height={104}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong>Metropolis, Pt.2: Scenes From a Memory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/album.jpg"
                width={104}
                height={104}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong>Metropolis, Pt.2: Scenes From a Memory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/album.jpg"
                width={104}
                height={104}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong>Metropolis, Pt.2: Scenes From a Memory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/album.jpg"
                width={104}
                height={104}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong>Metropolis, Pt.2: Scenes From a Memory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/album.jpg"
                width={104}
                height={104}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong>Metropolis, Pt.2: Scenes From a Memory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Rafael Santos
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/images/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Testament, Helloween, Gotye, and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/images/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Testament, Helloween, Gotye, and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/images/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Testament, Helloween, Gotye, and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/images/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Testament, Helloween, Gotye, and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/images/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt={
                  "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
                }
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Testament, Helloween, Gotye, and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/album.jpg"
            width={56}
            height={56}
            alt={
              "Metropolis, Pt.2: Scenes From a Memory by Dream Theater Album  Cover"
            }
          />
          <div className="flex flex-col">
            <strong className="font-normal">
              Scene Seven I. The Dance of Eternity
            </strong>
            <span className="text-xs text-zinc-400">Dream Teater</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}
