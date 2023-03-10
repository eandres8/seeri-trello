import type { AppProps } from "next/app";

import "@/styles/global.scss";
import { ItemsContextProvider } from "@/application/context/ItemsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ItemsContextProvider>
      <Component {...pageProps} />
    </ItemsContextProvider>
  );
}
