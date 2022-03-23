import React from 'react';

function Detail() {
  return (
    <div>
      <div className="flex flex-col lg:w-3/4 mx-auto rounded-t-3xl">
        <p className="mx-2 lg:mx-10 mb-10 mt-32 font-bold text-sm lg:text-2xl lg:leading-10">
          We understand your needs to{' '}
          <span className="bg-amber-400">build integrated applications</span> in
          today’s hyper-connected world.{' '}
          <span className="bg-amber-400">Skip the hassle</span> to repeat a
          cumbersome process{' '}
          <span className="bg-amber-400">for each unique integration.</span>{' '}
          Join us to build reliable connections with multiple providers and{' '}
          <span className="bg-amber-400">cruise through backend</span> with
          ease.
        </p>

        <img className="w-full" src="images/top.png" alt="line" />
      </div>

      <h1 className="text-3xl lg:text-5xl font-bold my-20">
        <span className="text-blue-700">Skip</span> the hassle.
      </h1>

      <img className="w-full" src="images/Group 85.png" alt="line" />

      <h1 className="font-bold my-10 text-3xl lg:text-5xl">
        <span className="text-blue-700">Cruise</span> through backend.
      </h1>
    </div>
  );
}

export default Detail;
