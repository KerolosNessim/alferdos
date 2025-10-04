import AchevmentsSection from "@/components/home/achevments-section";
import BlogsSection from "@/components/home/blogs-section";
import EventsSection from "@/components/home/events-section";
import HeroSection from "@/components/home/hero-section";
import StudentsSection from "@/components/home/students-section";
import Footer from "@/components/shared/footer";
import Navavbar from "@/components/shared/navbar";

export default function HomePage() {
  return (
    <>
      <Navavbar />
      <main>
        <HeroSection />
        <StudentsSection />
        <AchevmentsSection />
        <EventsSection/>
        <BlogsSection />
      </main>
      <Footer />
    </>
  );
}
