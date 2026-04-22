import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="w-full max-w-3xl flex flex-col items-center gap-10 p-8 bg-white dark:bg-black sm:items-start">
        
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
        />

        {/* Text */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Looking for a starting point? Go to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-black dark:text-white underline"
            >
              Templates
            </a>{" "}
            or{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-black dark:text-white underline"
            >
              Learning center
            </a>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            className="flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-300"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logo"
              width={16}
              height={16}
              unoptimized
            />
            Deploy Now
          </a>

          <a
            className="flex items-center justify-center rounded-full border px-6 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}