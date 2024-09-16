"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <nav className="md:h-[15vh] h-[10vh] w-[100vw] border-b">
      <div className="w-full h-1/6 primary md:block hidden"></div>
      <div className="flex items-center justify-center w-full md:h-5/6 h-full">
        <div className="flex justify-between w-full md:px-12 px-4 gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                d="M7 5V1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1V5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5ZM12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6ZM16 6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5V1C17 0.734784 16.8946 0.48043 16.7071 0.292893C16.5196 0.105357 16.2652 0 16 0C15.7348 0 15.4804 0.105357 15.2929 0.292893C15.1054 0.48043 15 0.734784 15 1V5C15 5.26522 15.1054 5.51957 15.2929 5.70711C15.4804 5.89464 15.7348 6 16 6ZM28 13V14C27.9996 15.2719 27.5145 16.4959 26.6434 17.4227C25.7723 18.3496 24.5807 18.9096 23.3113 18.9888C22.6291 20.9182 21.4678 22.6426 19.9363 24H23C23.2652 24 23.5196 24.1054 23.7071 24.2929C23.8946 24.4804 24 24.7348 24 25C24 25.2652 23.8946 25.5196 23.7071 25.7071C23.5196 25.8946 23.2652 26 23 26H1C0.734784 26 0.48043 25.8946 0.292893 25.7071C0.105357 25.5196 0 25.2652 0 25C0 24.7348 0.105357 24.4804 0.292893 24.2929C0.48043 24.1054 0.734784 24 1 24H4.0675C2.79163 22.8728 1.76937 21.4878 1.06822 19.9364C0.367076 18.385 0.00298857 16.7025 0 15V9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H23C24.3261 8 25.5979 8.52678 26.5355 9.46447C27.4732 10.4021 28 11.6739 28 13ZM22 10H2V15C2.00386 16.8776 2.53447 18.7164 3.5315 20.3075C4.52853 21.8985 5.95199 23.1778 7.64 24H16.36C18.048 23.1778 19.4715 21.8985 20.4685 20.3075C21.4655 18.7164 21.9961 16.8776 22 15V10ZM26 13C25.9998 12.3798 25.8074 11.7749 25.4492 11.2685C25.0911 10.7621 24.5848 10.3792 24 10.1725V15C23.9993 15.628 23.9491 16.2549 23.85 16.875C24.4705 16.6917 25.015 16.3127 25.4025 15.7946C25.79 15.2765 25.9996 14.647 26 14V13Z"
                fill="#2C2B2B"
              />
            </svg>
            <p className="md:block hidden">Receitas</p>
          </div>
          <div
            className={`flex md:flex-row flex-col md:items-center gap-12 md:font-semibold text-[#2C2B2B] md:relative absolute primary md:bg-white top-0 h-[100vh] w-[80vw] md:w-fit md:h-fit px-8 py-16 md:p-0 text-[16px] transition-all duration-500 ${
              openSideBar
                ? "translate-x-[-5vw] md:translate-x-0"
                : "translate-x-[-100vw] md:translate-x-0"
            }`}
          >
            <Link href="/" className="flex items-center gap-2">
              <svg
                width="28px"
                height="26px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden block"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              Home
            </Link>

            <Link href="/recipes" className="flex gap-2 items-center">
              <svg
                className="md:hidden block"
                fill="#000000"
                width="28px"
                height="26px"
                viewBox="0 0 122.88 122.88"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="2.9491199999999997"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M97.34,0.74c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.3,0.13,3.23L81.98,24.1l-0.03,0.04 c-2.29,2.77-3.86,5.33-4.56,7.67c-0.62,2.07-0.53,3.95,0.39,5.59c0.49,0.88,0.33,1.96-0.32,2.67l0,0l-8.89,9.62 c-0.87-0.95-1.56-1.72-2.02-2.22c-0.21-0.28-0.45-0.55-0.7-0.81l-0.02,0.02c-0.12-0.13-0.25-0.25-0.38-0.37l7.6-8.23 c-0.89-2.38-0.88-4.91-0.06-7.6c0.88-2.92,2.75-6.03,5.44-9.27c0.06-0.08,0.11-0.16,0.18-0.23L97.32,0.72L97.34,0.74L97.34,0.74z M57.13,55.01c-0.84-0.94-0.76-2.39,0.18-3.23c0.94-0.84,2.39-0.76,3.23,0.18c9.41,10.54,38.5,41.73,46.56,53.39 c10.63,15.05-5.83,19.79-11.29,14.31c-13.64-13.19-42.6-46.82-55.33-61.08c-4.58,1.94-9.03,2.24-13.5,0.96 c-4.81-1.37-9.52-4.58-14.3-9.51l-0.06-0.06c-3.64-3.84-6.49-7.63-8.55-11.38c-2.11-3.86-3.4-7.68-3.86-11.47 c-0.49-4.08-0.11-7.88,0.99-11.25c1.29-3.96,3.58-7.31,6.58-9.8c3.02-2.5,6.73-4.12,10.87-4.62c3.44-0.41,7.19-0.06,11.07,1.21 c5.37,1.75,11.63,6.1,16.82,11.68c3.83,4.11,7.11,8.92,9.06,13.87c2.03,5.16,2.65,10.5,1.02,15.5c-0.96,2.96-2.7,5.74-5.4,8.25 c-0.93,0.86-2.37,0.8-3.23-0.12c-0.86-0.93-0.8-2.37,0.12-3.23c2.09-1.95,3.43-4.08,4.16-6.33c1.26-3.87,0.73-8.16-0.93-12.38 c-1.74-4.42-4.69-8.74-8.15-12.45c-4.68-5.02-10.23-8.91-14.91-10.44c-3.21-1.04-6.28-1.34-9.09-1c-3.26,0.4-6.18,1.65-8.51,3.6 c-2.34,1.95-4.13,4.58-5.16,7.71c-0.89,2.73-1.2,5.87-0.79,9.26c0.39,3.2,1.5,6.47,3.32,9.81c1.91,3.43,4.53,6.9,7.9,10.45 l0.02,0.03c4.22,4.35,8.27,7.15,12.28,8.29c3.79,1.08,7.65,0.66,11.68-1.35c0.92-0.53,2.11-0.35,2.84,0.47 c12.42,13.91,42.63,48.92,56.01,61.89c5.81,2.37,9.03-0.55,6.25-5.7C100.7,102.43,63.5,62.17,57.13,55.01L57.13,55.01L57.13,55.01z M45.07,75.12l-29.16,31.55c-0.06,0.06-0.11,0.12-0.18,0.18c-4.26,4.6,3.28,11.3,7.96,6.82l28.32-30.65l3.04,3.45l-28.1,30.41l0,0 c-0.06,0.07-0.12,0.13-0.2,0.2c-1.68,1.41-3.37,2.33-5.08,2.71c-1.76,0.4-3.49,0.22-5.15-0.56c-0.28-0.11-0.54-0.25-0.77-0.46 l-4.03-3.73l0,0c-0.06-0.06-0.12-0.11-0.18-0.18c-1.56-1.8-2.3-3.72-2.1-5.75c0.19-1.92,1.21-3.79,3.14-5.59l29.44-31.86 L45.07,75.12L45.07,75.12z M75.63,57.46l1.73-1.87c0.86-0.93,2.31-0.99,3.23-0.13s0.99,2.3,0.13,3.23l-2,2.16L75.63,57.46 L75.63,57.46z M104.45,7.43c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.3,0.13,3.23L91.4,28.3c-0.86,0.93-2.3,0.99-3.23,0.13 c-0.93-0.86-0.99-2.3-0.13-3.23L104.45,7.43L104.45,7.43L104.45,7.43z M111.55,14c0.86-0.93,2.3-0.99,3.23-0.13 c0.93,0.86,0.99,2.3,0.13,3.23L98.51,34.86c-0.86,0.93-2.3,0.99-3.23,0.13c-0.93-0.86-0.99-2.3-0.13-3.23L111.55,14L111.55,14 L111.55,14z M118.91,20.83c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.31,0.13,3.23L103.55,44.2c-0.07,0.07-0.14,0.13-0.21,0.2 c-4.26,4.1-8.33,6.47-12.22,7.14c-4.22,0.73-8.09-0.47-11.64-3.57c-0.95-0.83-1.04-2.28-0.22-3.22c0.83-0.95,2.28-1.04,3.22-0.22 c2.45,2.14,5.07,2.98,7.84,2.49c2.98-0.51,6.26-2.48,9.84-5.93l0.02-0.02l18.71-20.25L118.91,20.83L118.91,20.83z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Recipes
            </Link>
            <Link href="/personalised-recipes" className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="28"
                height="26"
              >
                <rect
                  x="12"
                  y="18"
                  width="40"
                  height="30"
                  rx="5"
                  ry="5"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
                <circle
                  cx="22"
                  cy="30"
                  r="4"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
                <circle
                  cx="42"
                  cy="30"
                  r="4"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
                <rect
                  x="24"
                  y="38"
                  width="16"
                  height="4"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
                <line
                  x1="32"
                  y1="8"
                  x2="32"
                  y2="18"
                  stroke="#000"
                  stroke-width="2"
                />
                <circle
                  cx="32"
                  cy="8"
                  r="4"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
                <line
                  x1="12"
                  y1="25"
                  x2="4"
                  y2="20"
                  stroke="#000"
                  stroke-width="2"
                />
                <line
                  x1="52"
                  y1="25"
                  x2="60"
                  y2="20"
                  stroke="#000"
                  stroke-width="2"
                />
                <circle
                  cx="4"
                  cy="20"
                  r="3"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
                <circle
                  cx="60"
                  cy="20"
                  r="3"
                  fill="#FFF"
                  stroke="#000"
                  stroke-width="2"
                />
              </svg>
              <p>Personalised</p>
            </Link>
            <Link href="/about" className="flex gap-2 items-center">
              <svg
                width="28px"
                height="26px"
                viewBox="0 0 512.00 512.00"
                version="1.1"
                fill="#000000"
                className="md:hidden block"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>about</title>{" "}
                  <g
                    id="Page-1"
                    stroke-width="0.00512"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="about-white"
                      fill="#000000"
                      transform="translate(42.666667, 42.666667)"
                    >
                      {" "}
                      <path
                        d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                        id="Shape"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              About
            </Link>
          </div>
          <div className="flex items-center gap-2  rounded-full bg-[#F5F2F2] pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M18.4486 17.4508L13.8139 12.8161C15.1128 11.3871 15.8014 9.50685 15.7325 7.57698C15.6635 5.64711 14.8425 3.82073 13.4449 2.48812C12.0473 1.15551 10.1839 0.422366 8.25298 0.445349C6.32201 0.468332 4.47661 1.24562 3.11112 2.61112C1.74562 3.97661 0.968332 5.82201 0.945349 7.75298C0.922366 9.68394 1.65551 11.5473 2.98812 12.9449C4.32073 14.3425 6.14711 15.1635 8.07698 15.2325C10.0068 15.3014 11.8871 14.6128 13.3161 13.3139L17.9508 17.9486C18.0168 18.0146 18.1063 18.0516 18.1997 18.0516C18.293 18.0516 18.3825 18.0146 18.4486 17.9486C18.5146 17.8825 18.5516 17.793 18.5516 17.6997C18.5516 17.6063 18.5146 17.5168 18.4486 17.4508ZM1.666 7.84982C1.666 6.52789 2.058 5.23564 2.79243 4.13649C3.52686 3.03734 4.57073 2.18066 5.79204 1.67478C7.01334 1.16889 8.35724 1.03653 9.65377 1.29443C10.9503 1.55233 12.1413 2.1889 13.076 3.12365C14.0108 4.0584 14.6473 5.24934 14.9052 6.54587C15.1631 7.84241 15.0308 9.1863 14.5249 10.4076C14.019 11.6289 13.1623 12.6728 12.0632 13.4072C10.964 14.1416 9.67176 14.5336 8.34982 14.5336C6.57774 14.5318 4.87876 13.827 3.6257 12.5739C2.37265 11.3209 1.66786 9.62191 1.666 7.84982Z"
                fill="#858585"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Recipes"
              className="focus:outline-none bg-[#F5F2F2] rounded-full p-2 placeholder:text-[#858585] placeholder:font-light placeholder:text-[15px]"
            />
          </div>
          <div className="md:hidden block">
            {openSideBar ? (
              <svg
                onClick={() => setOpenSideBar(false)}
                width="28px"
                height="26px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g stroke="#000000" stroke-linecap="round" stroke-width="2">
                    {" "}
                    <path d="M6 18L18 6"></path> <path d="M18 18L6 6"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              <svg
                onClick={() => setOpenSideBar(true)}
                width="28px"
                height="26px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 12.32H22"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M2 18.32H22"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M2 6.32001H22"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
