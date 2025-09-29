import { OfferBar } from "../components/OfferBar";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";

export default function SiteLayout({ children }) {
  return (
    <>
      {/* Common Header */}
      <OfferBar />
      <div className="max-w-7xl mx-auto text-center px-3 md:px-20">
        <Navbar />
      </div>

      {/* Page Content */}
      <main>{children}</main>

      {/* Common Footer */}
      <Footer />
      <FooterBottom />
    </>
  );
}
