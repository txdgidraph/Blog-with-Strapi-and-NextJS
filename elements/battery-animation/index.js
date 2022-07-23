import Head from "next/head";

const BatteryAnimation = () => {
  return (
    <div className="battery-container">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="battery">
        <div className="battery-head"></div>
        <div className="battery-body">
          <i className="fa fa-bolt"></i>
          <div className="charge"></div>
        </div>
      </div>
    </div>
  );
};
export default BatteryAnimation;
