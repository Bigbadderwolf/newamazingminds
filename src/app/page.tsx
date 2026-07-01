import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsBar from "@/components/home/StatsBar";
import PillarsSection from "@/components/home/PillarsSection";
import AIBanner from "@/components/home/AIBanner";
import SocialSection from "@/components/home/SocialSection";
import FacebookEmbed from "@/components/home/FacebookEmbed";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsBar />
      <PillarsSection />
      <AIBanner />
      <SocialSection />
      <FacebookEmbed />
    </>
  );
}
