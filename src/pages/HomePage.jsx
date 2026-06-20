import HeroSection from '../sections/HeroSection'
import StatsSection from '../sections/StatsSection'
import ServicesSection from '../sections/ServicesSection'
import HowSection from '../sections/HowSection'
import QuoteSection from '../sections/QuoteSection'
import WhySection from '../sections/WhySection'
import TestimonialsSection from '../sections/TestimonialsSection'
import FaqSection from '../sections/FaqSection'
import CtaBandSection from '../sections/CtaBandSection'

export default function HomePage() {
  return (
    <main className="bg-[#fbfbfb]">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowSection />
      <QuoteSection />
      <WhySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBandSection />
    </main>
  )
}
