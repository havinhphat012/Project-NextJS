import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">


            <div className="mt-8">
                <h1 className="flex text-2xl font-bold text-gray-900 sm:text-6xl justify-around mt-8 px-22">
                    Welcome to
                    <img
                        src="https://www.svgrepo.com/show/508677/flag-vn.svg"
                        alt="Lá Cờ"
                        className="w-20 h-16 relative"
                    />Vietnamese IT community
                </h1>

                <p className="mt-1.5 sm:text-xl text-gray-500 px-40 content-center mt-4">
                    Thanks to the contributions of the IT community, many new technologies and improvements have
                    been developed, and the IT community has played a part in bringing information technology to
                    people all over the world.
                    it up! 🚀
                </p>
            </div>


            <div className="flex justify-center">
                <a
                    className="px-8 flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                    href="/download"
                >
                <span
                    className="font-medium text-white transition-colors hover:text-indigo-600 group-active:text-indigo-500"
                >Start free</span>
                    <span
                        className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
                    >
    <svg
        className="h-5 w-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
                </span>
                </a>
                <div className="px-8"></div>
                <a
                    className="px-8 group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
                    href="/download"
                >
                <span className="font-medium transition-colors group-hover:text-white">
                    Find more
                </span>

                    <span
                        className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
                    >
    <svg
        className="h-5 w-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
                </a>
            </div>
        </main>
    )
}
