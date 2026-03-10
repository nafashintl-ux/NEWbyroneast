import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
}

const CTASection = ({
  headline = "Let's talk about your supply chain.",
  subtext = "Book a free consultation. We'll listen first, advise second, and never push a sale.",
}: CTASectionProps) => (
  <section className="bg-foreground py-20 text-background sm:py-28">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-2xl px-5 text-center sm:px-6"
    >
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">{headline}</h2>
      <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed opacity-50">
        {subtext}
      </p>
      <div className="mt-8 sm:mt-10">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-none bg-accent px-8 text-sm font-medium uppercase tracking-widest text-accent-foreground hover:bg-accent/85 sm:h-14 sm:px-10 sm:text-[12px]"
        >
          <a href="https://cal.com/elliottjohnson01/15-min" target="_blank" rel="noopener noreferrer">
            Book a Free Consultation
          </a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
