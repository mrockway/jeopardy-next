import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div className="text-3xl">Jeopardy</div>
            </li>
            <li>
              <Link className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-4" href="/games/show">
                Select a Game
              </Link>
            </li>
            <li>
              <Link className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-4" href="/games/show">
                New Game
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
