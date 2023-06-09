import { Manrope } from "@next/font/google";
import Head from "next/head";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import Login from "../../sections/Login";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Layout({ children, pageTitle }: any) {
  const status = useSelector((state: any) => state.logged);
  if (!status) {
    return <Login />;
  }
  return (
    <>
      <Head>
        <meta name="Medi" content="Medi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="side-main-container">
        <Sidebar className={manrope.className} />
        <main className={manrope.className}>{children}</main>
      </div>
    </>
  );
}
