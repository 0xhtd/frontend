//TODO - disabled icon
const TypeIcon = ({ type }: { type: string }) => {
  if (type === "man") {
    return (
      <div className="relative flex h-[30px] w-[30px] items-center justify-center">
        <div className="absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
        <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute stroke-blue-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5631 16.1199C14.871 16.81 13.9885 17.2774 13.0288 17.462C12.0617 17.6492 11.0607 17.5459 10.1523 17.165C8.29113 16.3858 7.07347 14.5723 7.05656 12.5547C7.04683 11.0715 7.70821 9.66348 8.8559 8.72397C10.0036 7.78445 11.5145 7.4142 12.9666 7.71668C13.9237 7.9338 14.7953 8.42902 15.4718 9.14008C16.4206 10.0503 16.9696 11.2996 16.9985 12.6141C17.008 13.9276 16.491 15.1903 15.5631 16.1199Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path d="M14.9415 8.60977C14.6486 8.90266 14.6486 9.37754 14.9415 9.67043C15.2344 9.96332 15.7093 9.96332 16.0022 9.67043L14.9415 8.60977ZM18.9635 6.70907C19.2564 6.41617 19.2564 5.9413 18.9635 5.64841C18.6706 5.35551 18.1958 5.35551 17.9029 5.64841L18.9635 6.70907ZM16.0944 5.41461C15.6802 5.41211 15.3424 5.74586 15.3399 6.16007C15.3374 6.57428 15.6711 6.91208 16.0853 6.91458L16.0944 5.41461ZM18.4287 6.92872C18.8429 6.93122 19.1807 6.59747 19.1832 6.18326C19.1857 5.76906 18.8519 5.43125 18.4377 5.42875L18.4287 6.92872ZM19.1832 6.17421C19.1807 5.76001 18.8429 5.42625 18.4287 5.42875C18.0145 5.43125 17.6807 5.76906 17.6832 6.18326L19.1832 6.17421ZM17.6973 8.52662C17.6998 8.94082 18.0377 9.27458 18.4519 9.27208C18.8661 9.26958 19.1998 8.93177 19.1973 8.51756L17.6973 8.52662ZM16.0022 9.67043L18.9635 6.70907L17.9029 5.64841L14.9415 8.60977L16.0022 9.67043ZM16.0853 6.91458L18.4287 6.92872L18.4377 5.42875L16.0944 5.41461L16.0853 6.91458ZM17.6832 6.18326L17.6973 8.52662L19.1973 8.51756L19.1832 6.17421L17.6832 6.18326Z"></path>
        </svg>
      </div>
    );
  } else if (type === "woman") {
    return (
      <div className="relative flex h-[30px] w-[30px] items-center justify-center">
        <div className="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
        <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-pink-200 duration-500 peer-checked:scale-[500%]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute fill-pink-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z"
          ></path>
        </svg>
      </div>
    );
  } else if (type === "disabled") {
    return (
      <div className="relative flex h-[30px] w-[30px] items-center justify-center">
        <div className="absolute h-full w-full rounded-full bg-green-100 p-2 shadow-sm shadow-[#00000050] ring-neutral-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
        <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-neutral-200 duration-500 peer-checked:scale-[500%]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute stroke-neutral-400"
        >
          <g id="XMLID_28_">
            <path
              id="XMLID_31_"
              d="M225.315,96.963c26.748,0,48.479-21.706,48.479-48.481C273.794,21.699,252.063,0,225.315,0   c-26.779,0-48.492,21.699-48.492,48.482C176.823,75.257,198.536,96.963,225.315,96.963z"
            />
            <path
              id="XMLID_30_"
              d="M300.233,371.688c-12.883,44.732-54.121,77.583-102.946,77.583c-59.126,0-107.209-48.085-107.209-107.193   c0-43.754,26.396-81.413,64.066-98.054V198.58c-61.69,18.581-106.764,75.847-106.764,143.498   c0,82.649,67.247,149.897,149.906,149.897c60.238,0,112.159-35.801,135.966-87.169l-16.926-33.255   C311.575,371.59,306.071,371.64,300.233,371.688z"
            />
            <path
              id="XMLID_29_"
              d="M441.48,429.237l-64.939-127.672c-4.847-9.553-14.645-15.566-25.363-15.566h-83.173v-18.966h71.582   c7.148,0,13.156-3.736,17.037-9.118c2.522-3.506,4.316-7.579,4.316-12.236c0-11.789-9.549-21.351-21.353-21.351h-43.125h-28.457   V160c0-17.692-13.118-42.704-42.689-42.704c-23.584,0-42.703,19.122-42.703,42.704v139.372c0,24.058,19.503,43.561,43.562,43.561   h78.265h29.284l57.024,112.117c5.011,9.875,15.011,15.573,25.389,15.573c4.35,0,8.761-0.994,12.883-3.104   C443.054,460.401,448.628,443.251,441.48,429.237z"
            />
          </g>
        </svg>
      </div>
    );
  }
};

export default TypeIcon;
