import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen  font-sans">
      <Header />
      {/* px-4 py-6  md:px-6 md:py-6 */}
      <main className="flex-1 py-14 md:pt-16  bg-white">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
