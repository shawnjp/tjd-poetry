import React from 'react';
import Head from "next/head";

const ContactPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1>Contact Us</h1>
      <p>Here you can find how to reach us.</p>
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

export default ContactPage;