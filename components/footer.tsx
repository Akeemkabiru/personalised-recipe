import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[100vw] md:h-[25vh] h-[20vh] primary md:px-24 px-4 flex items-center justify-between text-[#2C2B2B]">
      <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="47"
          viewBox="0 0 50 47"
          fill="none"
          className="w-[25px] h-[25px] md:w-fit md:h-fit"
        >
          <path
            d="M12.4194 9.41937V2.32259C12.4194 1.85205 12.6063 1.40078 12.939 1.06805C13.2717 0.735324 13.723 0.548401 14.1935 0.548401C14.6641 0.548401 15.1154 0.735324 15.4481 1.06805C15.7808 1.40078 15.9677 1.85205 15.9677 2.32259V9.41937C15.9677 9.88991 15.7808 10.3412 15.4481 10.6739C15.1154 11.0066 14.6641 11.1936 14.1935 11.1936C13.723 11.1936 13.2717 11.0066 12.939 10.6739C12.6063 10.3412 12.4194 9.88991 12.4194 9.41937ZM21.2903 11.1936C21.7609 11.1936 22.2121 11.0066 22.5449 10.6739C22.8776 10.3412 23.0645 9.88991 23.0645 9.41937V2.32259C23.0645 1.85205 22.8776 1.40078 22.5449 1.06805C22.2121 0.735324 21.7609 0.548401 21.2903 0.548401C20.8198 0.548401 20.3685 0.735324 20.0358 1.06805C19.7031 1.40078 19.5161 1.85205 19.5161 2.32259V9.41937C19.5161 9.88991 19.7031 10.3412 20.0358 10.6739C20.3685 11.0066 20.8198 11.1936 21.2903 11.1936ZM28.3871 11.1936C28.8576 11.1936 29.3089 11.0066 29.6416 10.6739C29.9744 10.3412 30.1613 9.88991 30.1613 9.41937V2.32259C30.1613 1.85205 29.9744 1.40078 29.6416 1.06805C29.3089 0.735324 28.8576 0.548401 28.3871 0.548401C27.9166 0.548401 27.4653 0.735324 27.1326 1.06805C26.7998 1.40078 26.6129 1.85205 26.6129 2.32259V9.41937C26.6129 9.88991 26.7998 10.3412 27.1326 10.6739C27.4653 11.0066 27.9166 11.1936 28.3871 11.1936ZM49.6774 23.6129V25.3871C49.6767 27.6438 48.816 29.8153 47.2705 31.4597C45.725 33.1041 43.611 34.0976 41.3587 34.2381C40.1485 37.6613 38.088 40.7208 35.3708 43.129H40.8064C41.277 43.129 41.7283 43.316 42.061 43.6487C42.3937 43.9814 42.5806 44.4327 42.5806 44.9032C42.5806 45.3738 42.3937 45.8251 42.061 46.1578C41.7283 46.4905 41.277 46.6774 40.8064 46.6774H1.77419C1.30365 46.6774 0.852375 46.4905 0.519649 46.1578C0.186923 45.8251 0 45.3738 0 44.9032C0 44.4327 0.186923 43.9814 0.519649 43.6487C0.852375 43.316 1.30365 43.129 1.77419 43.129H7.21653C4.95289 41.1292 3.1392 38.6719 1.89523 35.9194C0.651263 33.1669 0.0053023 30.1818 0 27.1613V16.5161C0 16.0456 0.186923 15.5943 0.519649 15.2616C0.852375 14.9289 1.30365 14.7419 1.77419 14.7419H40.8064C43.1592 14.7419 45.4155 15.6766 47.0792 17.3402C48.7428 19.0038 49.6774 21.2602 49.6774 23.6129ZM39.0323 18.2903H3.54839V27.1613C3.55523 30.4925 4.49663 33.755 6.26557 36.5778C8.0345 39.4005 10.56 41.6703 13.5548 43.129H29.0258C32.0207 41.6703 34.5462 39.4005 36.3151 36.5778C38.084 33.755 39.0254 30.4925 39.0323 27.1613V18.2903ZM46.129 23.6129C46.1287 22.5125 45.7873 21.4393 45.1518 20.5409C44.5164 19.6425 43.6181 18.9632 42.5806 18.5964V27.1613C42.5793 28.2754 42.4903 29.3877 42.3145 30.4879C43.4153 30.1627 44.3815 29.4903 45.069 28.5711C45.7564 27.6518 46.1282 26.535 46.129 25.3871V23.6129Z"
            fill="#2C2B2B"
          />
        </svg>
        <p className="font-semibold items-center md:text-3xl text-base">
          Delícias à Mesa
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[14px] font-light">Connect with me</p>
        <div className="flex gap-2">
          <Link href="" className="bg-gray-100 p-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M30.9237 8.61752C30.8481 8.43478 30.72 8.27857 30.5555 8.16866C30.3911 8.05875 30.1978 8.00006 30 8.00002H26.1963C25.6644 7.09524 24.9076 6.34346 23.9992 5.81777C23.0909 5.29208 22.0619 5.01037 21.0125 5.00002C20.2306 4.98976 19.4546 5.13598 18.7301 5.43008C18.0056 5.72418 17.3472 6.16021 16.7937 6.71252C16.2241 7.27154 15.7719 7.93883 15.4639 8.67512C15.1559 9.41142 14.9981 10.2019 15 11V11.7613C9.9675 10.4338 5.85125 6.34002 5.8075 6.29627C5.67334 6.16092 5.5033 6.06672 5.3174 6.02477C5.1315 5.98283 4.93748 5.99487 4.7582 6.05949C4.57891 6.12411 4.42183 6.23862 4.30544 6.38952C4.18905 6.54043 4.11821 6.72145 4.10125 6.91127C3.5625 12.885 5.2975 16.8825 6.85125 19.1838C7.60885 20.3214 8.53048 21.3407 9.58625 22.2088C7.6825 24.4 4.685 25.5513 4.6525 25.5638C4.51139 25.6166 4.38405 25.7007 4.27999 25.8097C4.17594 25.9186 4.09785 26.0497 4.05158 26.1931C4.0053 26.3365 3.99203 26.4885 4.01275 26.6378C4.03347 26.787 4.08765 26.9296 4.17125 27.055C4.265 27.195 4.64 27.6863 5.55625 28.145C6.68875 28.7125 8.185 29 10 29C18.8337 29 26.215 22.1975 26.9688 13.445L30.7075 9.70752C30.8473 9.56759 30.9425 9.38934 30.981 9.19532C31.0195 9.0013 30.9995 8.80022 30.9237 8.61752ZM25.2987 12.2938C25.1273 12.4656 25.0242 12.694 25.0088 12.9363C24.5 20.8225 17.91 27 10 27C8.68 27 7.75 26.825 7.0975 26.615C8.53625 25.8338 10.5425 24.49 11.8325 22.555C11.9082 22.4412 11.9598 22.3131 11.9841 22.1786C12.0083 22.0442 12.0048 21.9061 11.9736 21.773C11.9425 21.64 11.8844 21.5147 11.8029 21.405C11.7214 21.2952 11.6184 21.2034 11.5 21.135C11.4412 21.1013 6.01125 17.8425 6 9.13502C8 10.76 11.6562 13.2813 15.8337 13.9838C15.9769 14.0079 16.1236 14.0006 16.2637 13.9623C16.4037 13.924 16.5338 13.8557 16.6448 13.7621C16.7558 13.6684 16.845 13.5518 16.9064 13.4202C16.9677 13.2886 16.9997 13.1452 17 13V11C16.9989 10.4666 17.1045 9.9383 17.3105 9.44628C17.5166 8.95426 17.819 8.50842 18.2 8.13502C18.5652 7.76914 19 7.48018 19.4788 7.28524C19.9576 7.09029 20.4706 6.99331 20.9875 7.00002C22.57 7.02002 24.0487 7.98502 24.6675 9.40127C24.7455 9.57932 24.8737 9.73079 25.0364 9.83713C25.1992 9.94347 25.3894 10.0001 25.5837 10H27.5837L25.2987 12.2938Z"
                fill="black"
              />
            </svg>
          </Link>
          <Link href="" className="bg-gray-100 p-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.05-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.74c-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.06 1.82 2.78 1.3 3.45.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95a4.65 4.65 0 011.24-3.23 4.32 4.32 0 01.12-3.19s1-.32 3.28 1.23a11.38 11.38 0 015.98 0c2.27-1.56 3.28-1.23 3.28-1.23a4.32 4.32 0 01.12 3.19 4.65 4.65 0 011.24 3.23c0 4.63-2.8 5.65-5.47 5.95.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.82.58A12 12 0 0012 0z"
                fill="#181717"
              />
            </svg>
          </Link>
          <Link href="" className="bg-gray-100 p-1 rounded-full bg-opacity-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.98 3C3.89 3 3 3.89 3 4.98C3 6.07 3.89 6.96 4.98 6.96C6.07 6.96 6.96 6.07 6.96 4.98C6.96 3.89 6.07 3 4.98 3ZM4.98 5.84C4.21 5.84 3.6 6.45 3.6 7.22C3.6 7.99 4.21 8.6 4.98 8.6C5.75 8.6 6.36 7.99 6.36 7.22C6.36 6.45 5.75 5.84 4.98 5.84ZM2.36 9.14H7.6V21.03H2.36V9.14ZM8.84 9.14H14.84C15.57 9.14 16.21 9.68 16.57 10.33L16.63 10.33V10.33H16.68L16.7 10.37L16.84 10.7V21.03H11.6V13.66C11.6 12.47 11.52 11.31 10.88 10.57C10.24 9.84 9.27 9.8 8.84 9.8C8.84 9.8 8.84 9.14 8.84 9.14ZM8.84 11.78C9.17 11.78 9.53 11.82 9.84 12.11C10.15 12.4 10.36 12.75 10.36 13.03V21.03H7.6V13.66C7.6 12.31 8.33 11.78 8.84 11.78ZM17.72 9.14H17.78H17.84H18H18.06H18.12H18.18H18.18H18.3L18.38 9.14H17.72Z"
                fill="black"
              />
            </svg>
          </Link>

          <Link href="" className="bg-gray-100 p-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M27 5H9C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7V9H5C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H23C23.5304 27 24.0391 26.7893 24.4142 26.4142C24.7893 26.0391 25 25.5304 25 25V23H27C27.5304 23 28.0391 22.7893 28.4142 22.4142C28.7893 22.0391 29 21.5304 29 21V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM23 11V13H5V11H23ZM23 25H5V15H23V25ZM27 21H25V11C25 10.4696 24.7893 9.96086 24.4142 9.58579C24.0391 9.21071 23.5304 9 23 9H9V7H27V21Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
