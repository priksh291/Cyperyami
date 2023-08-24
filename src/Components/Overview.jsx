import React from "react";

const Overview = () => {
  return (
    <div className="relative sm:mt-10 mt-80 sm:top-40 top-80 flex justify-around">
      <div className="card">
        <div className="content">
          <p className="heading">Overview</p>
          <p className="para">
            Burpsuite bootcamp brings you a detailed, structured way of learning
            and practicing this tool. This tool is highly used in the industry
            and mainly is used for conducting WAPT i.e Web Application
            Penetration Testing. You will learn about every aspect and sub-tools
            included in the burp suite included in this bootcamp are practice
            labs to get your hands on the burp suite and theory lectures with
            interactive video demonstrations.
          </p>
          <button className="btn">Read more</button>
        </div>
      </div>
      <div>
      <span className="flex relative font-sans font-semibold text-3xl mb-7">Things you will learn in this Course</span>
      <div className="cards">
    <div className="card red">
        <img className="tip" src="https://www.cyberyami.com/images/courses/theory.svg" alt="/"/>
        <p className="second-text">Self Paced Pragmatic Topics</p>
    </div>
    <div className="card blue">
        <img className="tip" src="https://www.cyberyami.com/images/courses/practice-lab.svg" alt ="/"/>
        <p className="second-text">Hands on Pratice Labs</p>
    </div>
    <div className="card green">
        <img className="tip" src="https://www.cyberyami.com/images/courses/cert-completion.svg" alt ="/"/>
        <p className="second-text">Certificate of Completion</p>
    </div>
</div>
      </div>
    </div>
  );
};

export default Overview;
