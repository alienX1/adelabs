import React from 'react';

function RoadMapBottom() {
  return (
    <div className="flex flex-col lg:w-3/4 mx-auto rounded-t-3xl">
      <img className="w-full" src="images/top.png" alt="top" />
      <p className="mx-2 lg:mx-10 mb-10 my-10 lg:mt-32 font-bold text-sm lg:text-2xl lg:leading-10">
        We're building an ecosystem where{' '}
        <span className="bg-amber-400">anyone can get inspired</span> with
        application templates, discover novel ideas from top builders, and
        <span className="bg-amber-400">
          publish revolutionary applications
        </span>{' '}
        that could <span className="bg-amber-400">change the world.</span>
      </p>
    </div>
  );
}

export default RoadMapBottom;
