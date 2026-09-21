import Hero from "@/components/Hero";
import ValuesGrid from "@/components/ValuesGrid";
import ServicesSummary from "@/components/ServicesSummary";
import Partners from "@/components/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <ValuesGrid />
      <Partners />
    </>
  );
}