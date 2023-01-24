import { type AppType } from "next/dist/shared/lib/utils";

import { QueryClient, QueryClientProvider } from "react-query";
import DevViewport from "../modules/dev/components/DevViewport";
import TopNav from "../modules/navigation/components/TopNav";
import "../styles/globals.css";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TopNav />
      <Component {...pageProps} />
      {process.env.NODE_ENV === "development" && <DevViewport />}
    </QueryClientProvider>
  );
};

export default MyApp;
