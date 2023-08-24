import React from "react";
import {BsCheckAll} from "react-icons/bs";

const Author = () => {
  return (
    <div className="relative top-80 flex gap-40">
      <div className="card3">
        <h3 className="card3__title">About the Author</h3>
        <p className="card3__content">
        <img className="h-32 w-32" src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1920&q=75" alt="/"/>
        CyberYami brings you a plethora of custom-designed bootcamps and courses. The learning material focuses on hands-on practice that is much needed in cyber security. We have included labs and challenges to make you understand how things work and are done in the industry. You can showcase your skills on your resume with our certification proving that you can apply the knowledge gained in a real-world scenario.{" "}
        </p>
        {/* <div className="card3__date">April 15, 2022</div> */}
        <div className="card3__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="35"
            width="35"
          >
            <path
              fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <h1 className="relative text-3xl mb-5">Top Skill you will learn</h1>
        <ul className="flex flex-col gap-5 text-xl">
            <li className="flex gap-5 items-center hover:text-2xl"><BsCheckAll className="flex text-yellow-700 w-7 h-7"/>Understading of Burpsuite</li>
            <li className="flex gap-5 items-center hover:text-2xl"><BsCheckAll className="flex text-yellow-700 w-7 h-7"/>Know the tools offered by the burp suite</li>
            <li className="flex gap-5 items-center hover:text-2xl"><BsCheckAll className="flex text-yellow-700 w-7 h-7"/>The difference between the pro & free edition</li>
            <li className="flex gap-5 items-center hover:text-2xl"><BsCheckAll className="flex text-yellow-700 w-7 h-7"/>Perform full-fledged WAPT using only Burpsuite</li>
            <li className="flex gap-5 items-center hover:text-2xl"><BsCheckAll className="flex text-yellow-700 w-7 h-7"/>learn Real-world techniques</li>
        </ul>
      </div>
    </div>
  );
};

export default Author;
