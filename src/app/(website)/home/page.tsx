import FAQ from "@/components/ui/website/home/FAQ";
import HeroSection from "@/components/ui/website/home/HeroSection";
import ProductInfo from "@/components/ui/website/home/ProductInfo";
import Products from "@/components/ui/website/home/Products";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductInfo />
      <Products />
      <FAQ />
    </div>
  );
}
