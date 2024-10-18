import Footer from "@/components/shared/Footer";
import Blogs from "@/components/ui/website/home/Blogs";
import FAQ from "@/components/ui/website/home/FAQ";
import HeroSection from "@/components/ui/website/home/HeroSection";
import Ingredient from "@/components/ui/website/home/Ingredient";
import Nurturing from "@/components/ui/website/home/Nurturing";
import ProductInfo from "@/components/ui/website/home/ProductInfo";
import Products from "@/components/ui/website/home/Products";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductInfo />
      <Products />
      <Ingredient />
      <Nurturing />
      <Blogs />
      <div className="bg-faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
