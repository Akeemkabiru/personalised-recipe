import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="h-[15vh] w-[100vw] border-b">
      <div className="w-full h-1/6 primary"></div>
      <div className="flex items-center justify-center w-full h-5/6">
        <div className="flex justify-between w-full px-12">
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
            <p className="">Receitas</p>
          </div>
          <div className="flex items-center gap-12 font-semibold text-[#2C2B2B]">
            <Link href="/">Home</Link>

            <Link href="/recipes">Recipes</Link>
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
              <p>Personalised Recipes</p>
            </Link>
            <Link href="/about">About</Link>
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
              className="focus:outline-none bg-[#F5F2F2] rounded-full p-1 placeholder:text-[#858585] placeholder:font-light placeholder:text-[15px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
