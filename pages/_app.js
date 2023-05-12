import "../styles/tailwind.css";
import "../styles/slick.css";
import { GlobalContextProvider } from "../contexts/GLobalState";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-black-600">
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </div>
  );
}

export default MyApp;
