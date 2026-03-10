import { motion } from "framer-motion";
import { Globe, Factory, ArrowRight } from "lucide-react";

const PriceComparison = () => (
  <section className="border-y border-border bg-card py-20 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The Real Difference
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          Same product, different price.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 sm:mt-16"
      >
        {/* Comparison cards */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
          {/* English Alibaba */}
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-col items-center rounded-sm border-2 border-dashed border-border bg-background px-4 py-8 sm:px-8 sm:py-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 sm:h-16 sm:w-16">
                <Globe className="h-7 w-7 text-destructive/60 sm:h-8 sm:w-8" />
              </div>
              <p className="mt-4 text-center font-serif text-base sm:text-lg">English Alibaba</p>
            </div>
            <div className="mt-4 rounded-full bg-destructive/10 px-5 py-2 sm:px-6 sm:py-2.5">
              <span className="font-serif text-lg font-medium text-destructive sm:text-xl">$12.50<span className="text-sm font-light">/unit</span></span>
            </div>
            <p className="mt-2 text-center text-xs font-light text-muted-foreground">
              Trading Company Markup
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center pb-16">
            <ArrowRight className="h-5 w-5 text-muted-foreground/50 sm:h-6 sm:w-6" />
          </div>

          {/* Chinese Alibaba */}
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-col items-center rounded-sm border-2 border-dashed border-accent/30 bg-background px-4 py-8 sm:px-8 sm:py-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 sm:h-16 sm:w-16">
                <Factory className="h-7 w-7 text-accent sm:h-8 sm:w-8" />
              </div>
              <p className="mt-4 text-center font-serif text-base sm:text-lg">Chinese Alibaba</p>
            </div>
            <div className="mt-4 rounded-full bg-accent/10 px-5 py-2 sm:px-6 sm:py-2.5">
              <span className="font-serif text-lg font-medium text-accent sm:text-xl">$8.75<span className="text-sm font-light">/unit</span></span>
            </div>
            <p className="mt-2 text-center text-xs font-light text-muted-foreground">
              Direct Factory Price
            </p>
          </div>
        </div>

        {/* Savings banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-sm bg-foreground px-6 py-4 text-center sm:mt-10 sm:py-5"
        >
          <p className="font-serif text-sm text-background sm:text-base md:text-lg">
            Save <span className="text-accent">$3.75/unit</span> = <span className="text-accent">$37,500</span> on a 10,000 unit order
          </p>
        </motion.div>

        <p className="mt-4 text-center text-xs font-light text-muted-foreground">
          Real example. Same product. The only difference is who's placing the order.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PriceComparison;
