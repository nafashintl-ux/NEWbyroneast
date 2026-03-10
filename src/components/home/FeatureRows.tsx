import { motion } from "framer-motion";
import { Phone, Factory, Globe, Briefcase } from "lucide-react";

const features = [
  {
    tag: "Mandarin, Day One",
    icon: Phone,
    title: "Direct calls to factories in Mandarin",
    description:
      "90% of Chinese factories don't communicate directly with foreign buyers. They use trading companies as middlemen, who take their cut and add delays. Byron East calls the factory owner directly on WeChat, in Mandarin.",
    bullets: [
      "Direct access to factory pricing, no trading company markup",
      "Negotiations that happen in minutes, not weeks",
      "Trust-based relationships that get you priority treatment",
      "Access to Chinese Alibaba (1688.com), not the English version with inflated prices",
    ],
  },
  {
    tag: "On the Ground",
    icon: Factory,
    title: "Factory visits before the order ships",
    description:
      "You've placed a $30,000 order. How do you know the product is right? Most brands find out when it lands at their 3PL. Byron East physically walks through the factory, checks, photographs, and reports back before it ever leaves China.",
    bullets: [
      "Pre-shipment inspection with photos before it ships",
      "Quality control on every order, not just the first one",
      "Domestic travel across China with ease",
      "Canton Fair, trade shows, factory audits: we're already there",
    ],
  },
  {
    tag: "Time Zone Bridge",
    icon: Globe,
    title: "China is running while you sleep. We're already awake.",
    description:
      "If you're in the US or UK, China is 8 to 13 hours ahead. Your supplier sends a message at 9am their time. You wake up to half an answer, 12 hours later. Byron East handled it while you had breakfast.",
    bullets: [
      "Real-time communication during China business hours",
      "No more waiting 48 hours for a simple answer",
      "Urgent issues resolved the same day, not next week",
      "Weekly English-language summary report sent to you",
    ],
  },
  {
    tag: "Professional Background",
    icon: Briefcase,
    title: "Corporate professionals. Not Fiverr freelancers.",
    description:
      "Byron East brings experience from federal government, corporate policy, and business operations in Beijing. A level of professionalism that a $200 Upwork sourcing agent simply can't match.",
    bullets: [
      "5+ years professional experience inside Chinese organizations",
      "Registered company in China (WFOE): legal, professional, accountable",
      "Deep understanding of e-commerce supply chains",
      "Available weekends. Chinese factories work weekends. So do we.",
    ],
  },
];

const FeatureRows = () => (
  <section className="py-20 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Why Byron East
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          What makes us different.
        </h2>
      </motion.div>

      <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-border bg-card p-5 sm:p-8"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 sm:h-12 sm:w-12">
                <f.icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                  {f.tag}
                </span>
                <h3 className="mt-2 font-serif text-lg leading-snug sm:text-xl md:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground sm:mt-3">
                  {f.description}
                </p>
                <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-3">
                  {f.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-light">
                      <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureRows;
