import React from 'react';

function Features() {
  return (
    <div>
      {/* ONE  */}
      <div className="flex mx-2 lg:mx-20 items-center my-20">
        <div className="text-left w-1/2">
          <h1 className="lg:text-2xl font-bold">
            {' '}
            Choose from <br />
            100+ integrations.
          </h1>
          <br />
          <p className="text-sm lg:text-xl">
            Vade Studio is designed to work seamlessly with your favourite
            databases or web services. <br />{' '}
            <b>Tweak a template or start from scratch.</b>
            <br />
            <br /> We've baked-in over 100 integrations directly into the
            platform, so you can integrate quickly and easily with other
            services, databases and applications out there.
          </p>
        </div>
        <img className="w-1/2" src="images/one.png" alt="images" />
      </div>

      {/* TWO  */}
      <div className="flex mx-2 lg:mx-20 items-center my-20">
        <img className="w-1/2" src="images/two.png" alt="screen" />
        <div className="text-left w-1/2">
          <h1 className="lg:text-2xl font-bold">Configure & Connect.</h1>
          <br />
          <p className="text-sm lg:text-xl">
            Get all of your{' '}
            <b>
              data sources connected into a content mesh, in the same place, in
              real time.
            </b>{' '}
            <br /> <br />
            This provides you a unified API for data navigation across all your
            integrated services.
          </p>
        </div>
      </div>

      {/* THREE  */}
      <div className="flex mx-2 lg:mx-20 items-center my-20">
        <div className="text-left w-1/2">
          <h1 className="lg:text-2xl font-bold">Test. Build. Deploy.</h1>
          <br />
          <p className="text-sm lg:text-xl">
            <b>Play around with the generated APIs.</b>
            Once configured – test, build and deploy the unified API into our
            secure and reliable infrastructure. <br />
            <br />
            Run your queries in the editor and use our intuitive interface to
            <b>
              navigate through your data - clean, organised & at your
              fingertips.
            </b>
          </p>
        </div>
        <img className="w-1/2" src="images/three.png" alt="screen" />
      </div>
    </div>
  );
}

export default Features;
