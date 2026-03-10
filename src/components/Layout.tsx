import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PageHeader from "./PageHeader";
import StickyBar from "./StickyBar";

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">
      <PageHeader />
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
    <StickyBar />
  </div>
);

export default Layout;
