import { type AppType } from "next/dist/shared/lib/utils";
import DevViewport from "../common/components/elements/DevViewport";
import TopNav from "../modules/navigation/TopNav";

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
