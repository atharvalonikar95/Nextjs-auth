'use client'
import SignUp from "./client/signup/page";

// import { Provider } from "react-redux";
// import store from "./client/store/store";
import type { AppProps } from "next/app";


export default function Home() {
  return (
      <div >
        {/* <Component {...pageProps} /> */}
        <SignUp/>
      </div>
  );
}
