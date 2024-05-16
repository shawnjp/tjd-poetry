import React from 'react';
import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="container">
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <p>This is the about page where you can find information about our company.</p>
      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;