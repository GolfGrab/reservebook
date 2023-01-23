import { type AppType } from "next/dist/shared/lib/utils";

import DevViewport from "../modules/dev/components/DevViewport";
import TopNav from "../modules/navigation/components/TopNav";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
      {process.env.NODE_ENV === "development" && <DevViewport />}
    </>
  );
};

export default MyApp;
