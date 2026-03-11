import { motion } from "framer-motion";
import { X } from "lucide-react";

const pains = [
  {
    stat: "20-30%",
    text: "markup through English Alibaba trading companies",
  },
  {
    stat: "12+ hrs",
    text: "waiting for supplier responses across time zones",
  },
  {
    stat: "$5K+",
    text: "per trip flying to China every quarter",
  },
  {
    stat: "0",
    text: "visibility on production progress and internal quality control processes",
  },
  {
    stat: "???",
    text: "no idea if you're actually getting the best factory price",
  },
];

const PainPoints = () => (
  <section className="border-y border-border bg-card py-20 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-destructive">
          The Hidden Costs
        </p>
        <h2 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl md:text-4xl">
          What's quietly eating your margins.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-sm border border-destructive/10 bg-background p-5 transition-all hover:border-destructive/25 hover:shadow-md sm:p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-serif text-2xl font-normal text-destructive/80 sm:text-3xl">
                {pain.stat}
              </span>
              <X className="h-4 w-4 text-destructive/40" strokeWidth={2.5} />
            </div>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              {pain.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPoints;
