import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Byron East saved us 15% on our biggest supplier order with a single phone call in Mandarin. What would've taken us weeks of back-and-forth on Alibaba, they solved in 15 minutes.",
    company: "AU E-commerce Co.",
    detail: "E-commerce Business, Australia",
  },
  {
    quote:
      "Having Byron East on the ground in China is like having our own operations manager, without the $100K salary. They've solved time-zone issues we didn't even know we had.",
    company: "7-Figure Brands LLC",
    detail: "Amazon FBA, USA",
  },
  {
    quote:
      "The Mandarin fluency makes all the difference. Byron East can get answers in minutes that take us days. Plus they actually visit factories. We trust what they tell us.",
    company: "DTC Essentials",
    detail: "Shopify Brand, UK",
  },
];

const Testimonials = () => (
  <section className="py-20 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
          What Clients Say
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col justify-between rounded-sm border border-border bg-card p-6 sm:p-8"
          >
            <div>
              <Quote className="h-6 w-6 text-accent/40" />
              <p className="mt-4 font-serif text-sm italic leading-relaxed text-foreground/80 sm:text-base">
                {t.quote}
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-sm font-medium text-foreground">{t.company}</p>
              <p className="text-xs font-light text-muted-foreground">{t.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
