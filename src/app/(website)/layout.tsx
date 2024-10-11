import Footer from "@/components/shared/Footer";
import { ReactNode } from "react";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
