import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    without: "Weeks of back-and-forth on Alibaba",
    with: "Answers in 30 minutes, in Mandarin, direct",
  },
  {
    without: "Paying trading company markup (20-40%)",
    with: "Factory-direct pricing, no middleman",
  },
  {
    without: "Quality drops after the third order",
    with: "Quality controlled on the ground, every time",
  },
  {
    without: "You're asleep when China needs an answer",
    with: "China handled while you sleep",
  },
  {
    without: "No one inspects before it ships",
    with: "Pre-shipment inspection with photos",
  },
];

const BeforeAfter = () => (
  <section className="py-20 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The Difference
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          Side by side. No spin.
        </h2>
      </motion.div>

      {/* Desktop table */}
      <div className="mt-12 hidden sm:block sm:mt-16">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-6 border-b border-border pb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-destructive/70">Without Byron East</span>
          <span />
          <span className="text-xs font-medium uppercase tracking-widest text-accent">With Byron East</span>
        </div>
        {comparisons.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-6 border-b border-border py-5"
          >
            <p className="text-sm font-light text-muted-foreground line-through decoration-destructive/30">
              {c.without}
            </p>
            <ArrowRight className="h-4 w-4 text-accent" />
            <p className="text-sm font-medium text-foreground">
              {c.with}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile stacked */}
      <div className="mt-10 space-y-4 sm:hidden">
        {comparisons.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-sm border border-border bg-card p-4"
          >
            <p className="text-sm font-light text-muted-foreground line-through decoration-destructive/30">
              {c.without}
            </p>
            <div className="my-2 flex items-center gap-2">
              <ArrowRight className="h-3 w-3 text-accent" />
              <div className="h-px flex-1 bg-accent/20" />
            </div>
            <p className="text-sm font-medium text-foreground">
              {c.with}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;
