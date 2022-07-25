import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div className=" w-full bg-slate-900">
      
      <Head>
        <title>User Profile</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      </Head>

      <header className="justify-center shadow-md mb-3 py-3 sm:px-5 md:px-16 flex px-0 sm:justify-between">
        <a href="#">
          <h1 className="text-2xl font-semibold text-blue-500 hidden sm:block">
            User Profile
          </h1>
        </a>
        <div className="flex items-center md:gap-8 text-slate-500">
          <div className="flex gap-1">
            <a
              className="font-semibold hover:bg-slate-800 hover:text-white px-3 py-2 rounded-full"
              href="#"
            >
              <i className="fa fa-home"></i> Home
            </a>
            <a
              className="font-semibold hover:bg-slate-800 hover:text-white px-3 py-2 rounded-full"
              href="#"
            >
              <i className="fa fa-envelope"></i> Message
            </a>
            <a
              className="font-semibold hover:bg-slate-800 hover:text-white px-3 py-2 rounded-full"
              href="#"
            >
              <i className="fa fa-gamepad"></i> Games
            </a>
          </div>
          <div>
            <a href="#" className="flex items-center gap-2">
              <Image src="/profile.png" height={30} width={30} />
              <h2 className="hidden text-md font-semibold text-slate-400 md:block">
                Noel Mallari
              </h2>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="text-center w-full md:w-80 px-5 py-2 border-gray-500 border-r border-slate-800 ">
          <Image src="/profile.png" height={200} width={200} />
          <div className="user-details">
            <div className="my-5">
              <h3 className="font-semibold text-slate-300 text-left">Bio</h3>
              <p className="text-center text-slate-400">
                I'm a passionate full stack web and mobile app developer
              </p>
            </div>
            <table className="w-full text-left my-4 border-b border-slate-800">
              <tbody>
                <tr className="text-slate-300">
                  <td>
                    Joined <span className="float-right"> July 24, 2022</span>
                  </td>
                </tr>
                <tr className="text-slate-300">
                  <td>
                    Gender <span className="float-right"> Male</span>
                  </td>
                </tr>
                <tr className="text-slate-300">
                  <td>
                    Location <span className="float-right"> Sa puso mo</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-left my-4">
              <tbody>
                <tr className="text-slate-300">
                  <td>
                    Posts <span className="float-right"> 837</span>
                  </td>
                </tr>
                <tr className="text-slate-300">
                  <td>
                    Friends <span className="float-right"> 12,947</span>
                  </td>
                </tr>
                <tr className="text-slate-300">
                  <td>
                    Followers <span className="float-right"> 93287</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-slate-800 rounded-md">
              <header className="bg-slate-800 rounded-t-md text-white pl-2 border-b border-slate-700">
                <h1 className="text-lg font-semibold py-2">Share this page</h1>
              </header>
              <div className="mt-2 flex items-center gap-2 py-2 px-2">
                <a
                  href="https://facebook.com/sharer.php?u=#"
                  className="rounded-full bg-blue-600 p-2 text-center w-10 text-white"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/share?url=#"
                  className="rounded-full bg-blue-500 p-2 text-center w-10 text-white"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://twitter.com/share?url=#"
                  className="rounded-full bg-orange-600 p-2 text-center w-10 text-white"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/share?url=#"
                  className="rounded-full bg-blue-900 p-2 text-center w-10 text-white"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 w-full">
          <div
            className="relative h-60 sm:h-80 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url("/cover.png")`,
            }}
          >
            <div className="absolute pl-5 pr-2 pt-2 pb-5 bottom-0 user-details w-full bg-black bg-opacity-20">
              <h1 className="text-white text-2xl font-normal">
                Noel Mallari
              </h1>
              <div className="banner w-full flex flex-wrap sm:flex-row  gap-1 sm:items-center">
                <img
                  className="h-6"
                  src="/banner/anime.gif"
                  width={160}
                  alt="anime"
                />
                <img
                  className="h-6"
                  src="/banner/contributor.png"
                  width={160}
                  alt="contributor"
                />
                <img
                  className="h-6"
                  src="/banner/tech.png"
                  width={160}
                  alt="contributor"
                />
              </div>
            </div>
          </div>
          <div>
            <ul
              className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
              id="tabs-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  href="#tabs-home"
                  className="font-semibold nav-link active inline-block pt-4 pb-1 px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300"
                  id="tabs-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-home"
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#tabs-recent"
                  className="font-semibold nav-link inline-block pt-4 pb-1 px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300"
                  id="tabs-recent-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-recent"
                  role="tab"
                  aria-controls="tabs-recent"
                  aria-selected="false"
                >
                  Recent Activity
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#tabs-settings"
                  className="font-semibold nav-link inline-block pt-4 pb-1 px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300"
                  id="tabs-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-settings"
                  role="tab"
                  aria-controls="tabs-settings"
                  aria-selected="false"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
              <div
                className="tab-pane fade show active"
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab"
              >
                <div className="w-full border-b border-slate-700 p-2  flex gap-2">
                  <img className="h-12" src="/profile.png" alt="user-profile" width={50}/>
                  <div className="w-full border border-slate-600">
                    <header className="text-lg w-full bg-slate-700 pl-2">
                      <h1 className="text-white w-full bg-slate-700">Noel Mallari</h1>
                    </header>
                    <p className="text-md p-2 text-slate-400">This is my first posts Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eum optio reprehenderit, velit sit aliquid!</p>
                  </div>
                </div>
                <div className="w-full border-b border-slate-700 p-2  flex gap-2">
                  <img className="h-12" src="/profile.png" alt="user-profile" width={50}/>
                  <div className="w-full border border-slate-600">
                    <header className="text-lg w-full bg-slate-700 pl-2">
                      <h1 className="text-white w-full bg-slate-700">Noel Mallari</h1>
                    </header>
                    <p className="text-md p-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quos amet natus excepturi nam officiis explicabo! Tenetur, ratione eum.</p>
                  </div>
                </div>
                <div className="w-full border-b border-slate-700 p-2  flex gap-2">
                  <img className="h-12" src="/profile.png" alt="user-profile" width={50}/>
                  <div className="w-full border border-slate-600">
                    <header className="text-lg w-full bg-slate-700 pl-2">
                      <h1 className="text-white w-full bg-slate-700">Noel Mallari</h1>
                    </header>
                    <p className="text-md p-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quos amet natus excepturi nam officiis explicabo! Tenetur, ratione eum.</p>
                  </div>
                </div>
                <div className="w-full border-b border-slate-700 p-2  flex gap-2">
                  <img className="h-12" src="/profile.png" alt="user-profile" width={50}/>
                  <div className="w-full border border-slate-600">
                    <header className="text-lg w-full bg-slate-700 pl-2">
                      <h1 className="text-white w-full bg-slate-700">Noel Mallari</h1>
                    </header>
                    <p className="text-md p-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quos amet natus excepturi nam officiis explicabo! Tenetur, ratione eum.</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tabs-recent"
                role="tabpanel"
                aria-labelledby="tabs-recent-tab"
              >
                <h1 className="font-semibold text-lg text-white">Recent Activity</h1>
              </div>
              <div
                className="tab-pane fade"
                id="tabs-settings"
                role="tabpanel"
                aria-labelledby="tabs-settings"
              >
                <h1 className="font-semibold text-lg text-white">Settings</h1>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 flex h-15 py-3 w-full items-center justify-center border-t border-slate-800">
        <a
          className="flex items-center justify-center hover:text-blue-600 font-semibold text-slate-400"
          href="https://www.github.com/namcodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by : Noel Mallari
        </a>
      </footer>
    </div>
  );
};

export default Home;
