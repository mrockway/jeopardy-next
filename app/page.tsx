export default function Home() {
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-2 pb-2 gap-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="text-9xl">Time for Jeopardy</div>
        </div>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-2 pb-2 gap-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <a href="/games/new" className="block max-w-sm p-6 bg-white border border-green-200 rounded-lg shadow hover:bg-green-100 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">New games</h5>
          </a>
        </div>
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <a href="/games/show" className="block max-w-sm p-6 bg-white border border-green-200 rounded-lg shadow hover:bg-green-100 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">Existing games</h5>
          </a>
        </div>
      </div>
    </main>
  );
}
