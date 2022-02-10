import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout(props) {
  const route = useRouter();
  const headCheck = route.pathname.split("/")[1];
  
  return (
    <div className="flex flex-col min-h-screen  font-sans">
      <Header />
      {/* px-4 py-6  md:px-6 md:py-6 */}
      <main className={`flex-1 ${headCheck=='t'?'':'py-14 md:pt-16'}   bg-white`}>{props.children}</main>

      <Footer />
    </div>
  );
}
