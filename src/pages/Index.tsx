import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

import PainPoints from "@/components/home/PainPoints";
import BeforeAfter from "@/components/home/BeforeAfter";
import UniqueAdvantage from "@/components/home/UniqueAdvantage";
import FeatureRows from "@/components/home/FeatureRows";
import StatsBar from "@/components/home/StatsBar";
import EverythingIncluded from "@/components/home/EverythingIncluded";

// import FAQ from "@/components/home/FAQ";
import PriceComparison from "@/components/home/PriceComparison";




const Index = () => {
  return (
    <>
      <SEO
        title="Byron East — Your On-the-Ground Sourcing Team in China"
        description="We beat your China factory price or tell you honestly we can't. On-the-ground sourcing, quality control, and supply chain management from inside China's factories."
        path="/"
      />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center bg-foreground text-background">
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-32">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-accent sm:text-sm"
            >
              YOUR IN-COUNTRY ECOM OPS PARTNER
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 font-serif text-3xl leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your team inside
              <br className="hidden sm:block" /> China's factories.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-accent/70 sm:text-base"
            >
              Working with emerging & established ecom founders
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed opacity-60 sm:mt-8 sm:text-lg"
            >
              Owning relationships with China's top manufacturers, fulfillment partners, and artwork design agencies to build and scale your DTC brand in under 60 days.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-10"
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-none bg-accent px-8 text-sm font-medium uppercase tracking-widest text-accent-foreground hover:bg-accent/85 sm:h-14 sm:px-10 sm:text-[12px]"
              >
                <a href="https://cal.com/elliottjohnson/chinastrategycall" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context / "Why" */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl leading-snug sm:text-3xl md:text-4xl">
              Here's the truth most sourcing agents won't tell you.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
              <p>
                You're overpaying your Chinese suppliers by 15-30%. Not because you're bad at negotiating, but because you're not in the room.
              </p>
              <p>
                We are. We live in China. We walk factory floors, share meals with suppliers, and negotiate in Mandarin. In Chinese business culture, face-to-face relationships are the foundation of trust, priority treatment, and better deals.
              </p>
              <p>
                We're not another middleman adding a margin. We work for you, transparently, directly, and with skin in the game. If we can't improve your deal, you don't pay a cent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Comparison */}
      <PriceComparison />

      {/* Pain Points */}
      <PainPoints />

      {/* Before / After */}
      <BeforeAfter />

      {/* Unique Advantage */}
      <UniqueAdvantage />

      {/* Feature Rows */}
      <FeatureRows />

      {/* Stats Bar */}
      <StatsBar />

      {/* Everything Included */}
      <EverythingIncluded />

      {/* Guarantee */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Shield className="mx-auto h-10 w-10 text-accent" />
            <h2 className="mt-6 font-serif text-2xl leading-snug sm:text-3xl md:text-4xl">
              Our promise: if we can't improve your deal, you don't pay a cent.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
              No invoice. No obligation. We'll give you an honest assessment and walk away if we can't add value. That's how confident we are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {/* <FAQ /> */}

      <CTASection />
    </>
  );
};

export default Index;
