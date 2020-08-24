import Head from 'next/head';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const favoritePhrases = ['player', 'team', 'league', 'statistic'];

export default function Home() {
  const [favoritePhrase, setFavoritePhrase] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPhraseIndex =
        favoritePhrase === favoritePhrases.length - 1 ? 0 : favoritePhrase + 1;
      setFavoritePhrase(nextPhraseIndex);
    }, 1000 * 5);
    return () => {
      clearInterval(interval);
    };
  });

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Lax stats</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" aria-label="Home">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/lax-stats-logo.svg"
                        alt="Logo"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        id="main-menu"
                        aria-label="Main menu"
                        aria-haspopup="true"
                        onClick={() => {
                          setMobileNavOpen(true);
                        }}
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4">
                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Players
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Teams
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Leagues
                  </a>
                </div>
              </nav>
            </div>

            <div
              className={clsx(
                'absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden',
                { hidden: !mobileNavOpen }
              )}
            >
              <div className="rounded-lg shadow-md">
                <div
                  className="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/lax-stats-logo.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                        onClick={() => {
                          setMobileNavOpen(false);
                        }}
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Players
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Teams
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Leagues
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Track your favorite
                  <br className="xl:hidden" />
                  <span className="text-indigo-600">
                    {' '}
                    {favoritePhrases[favoritePhrase]}
                  </span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We bring all of the stats from the various leagues and
                  showcase a player's journey from College to the Pros.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://1qtxvn3sl48q43rb3u2jqlvw-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/16x9_Web_photo2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-900 overflow-hidden">
        <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Every league all in 1 place
              </h3>
            </div>
            <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
              <div>
                <div className="flex items-center justify-center h-24 w-24 rounded-md">
                  <img src="/pll_logo.png" />
                </div>
                <div className="mt-5">
                  <h4 className="text-lg leading-6 font-medium text-white">
                    Premier Lacrosse League
                  </h4>
                  <p className="mt-2 text-base leading-6 text-indigo-400">
                    Founded in 2019
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="flex items-center justify-center h-24 w-24 rounded-md ">
                  <img src="/mll_logo.svg" />
                </div>
                <div className="mt-5">
                  <h4 className="text-lg leading-6 font-medium text-white">
                    Major League Lacrosse
                  </h4>
                  <p className="mt-2 text-base leading-6 text-indigo-400">
                    Founded in 2000
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="flex items-center justify-center h-24 w-24 rounded-md ">
                  <img src="/nll_logo.png" />
                </div>
                <div className="mt-5">
                  <h4 className="text-lg leading-6 font-medium text-white">
                    National Lacrosse League
                  </h4>
                  <p className="mt-2 text-base leading-6 text-indigo-400">
                    Founded in 1987
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="flex items-center justify-center h-24 w-24 rounded-md ">
                  <img src="/ncaa_logo.png" />
                </div>
                <div className="mt-5">
                  <h4 className="text-lg leading-6 font-medium text-white">
                    National Collegiate Athletic Association
                  </h4>
                  <p className="mt-2 text-base leading-6 text-indigo-400">
                    Division I, II, III
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              All time leaders
            </h2>

            <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:col-gap-8 lg:row-gap-12 lg:space-y-0">
              <li>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="relative pb-2/3 sm:pt-2/3">
                    <img
                      className="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                      src="https://premierlacrosseleague.com/wp-content/uploads/2020/07/Archers_Adam_Ghitelman.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h4>Adam Ghitelman</h4>
                        <p className="text-indigo-600">Points</p>
                      </div>
                      <div className="text-lg leading-7">
                        <p className="text-gray-500">9001 points</p>
                        <p className="text-gray-500">
                          1000 Assists, 1 Goal, Archers 2020
                        </p>
                        <p className="text-gray-500">
                          1000 Assists, 1 Goal, Archers 2019
                        </p>
                        <p className="text-gray-500">
                          1000 Assists, 1 Goal, Archers 2018
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="relative pb-2/3 sm:pt-2/3">
                    <img
                      className="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                      src="https://premierlacrosseleague.com/wp-content/uploads/2020/07/Archers_Christian_Mazzone.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h4>Christian Mazzone</h4>
                        <p className="text-indigo-600">Goals</p>
                      </div>
                      <div className="text-lg leading-7">
                        <p className="text-gray-500">1 goal, Arches 2020</p>
                        <p className="text-gray-500">1 goal, Arches 2019</p>
                        <p className="text-gray-500">1 goal, Arches 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="relative pb-2/3 sm:pt-2/3">
                    <img
                      className="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                      src="https://premierlacrosseleague.com/wp-content/uploads/2020/07/Archers_Drew_Adams.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h4>Drew Adams</h4>
                        <p className="text-indigo-600">Assists</p>
                      </div>
                      <div className="text-lg leading-7">
                        <p className="text-gray-500">1 assist, Archers 2020</p>
                        <p className="text-gray-500">1 assist, Archers 2019</p>
                        <p className="text-gray-500">1 assist, Archers 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="relative pb-2/3 sm:pt-2/3">
                    <img
                      className="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                      src="https://premierlacrosseleague.com/wp-content/uploads/2020/07/Archers_Matt_McMahonn.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h4>Matt McMahon</h4>
                        <p className="text-indigo-600">Ground balls</p>
                      </div>
                      <div className="text-lg leading-7">
                        <p className="text-gray-500">
                          5 ground balls, Archers 2020
                        </p>
                        <p className="text-gray-500">
                          5 ground balls, Archers 2019
                        </p>
                        <p className="text-gray-500">
                          5 ground balls, Archers 2018
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400">
        <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 hover:text-white">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 hover:text-white">
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 hover:text-white">
                Players
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 hover:text-white">
                Teams
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 hover:text-white">
                Leagues
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center">
            <a
              href="https://twitter.com/theorycraftinc"
              target="_blank"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com/laxstats"
              target="_blank"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2020 TheoryCraft, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
