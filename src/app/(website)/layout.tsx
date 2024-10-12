import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen container mt-8">{children}</div>
      <Footer />
    </div>
  );
}
