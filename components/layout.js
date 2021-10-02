import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-1  px-4 py-6  md:px-6 md:py-12 bg-black">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
