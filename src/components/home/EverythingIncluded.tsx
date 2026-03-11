import { motion } from "framer-motion";

const items = [
  { num: "01", title: "Mandarin Supplier Calls", desc: "Communication over native Chinese platforms. Factories speak openly and directly when they're speaking their native language." },
  { num: "02", title: "Factory-Direct Sourcing", desc: "Access to Chinese-only platforms (1688.com) with factory-direct pricing." },
  { num: "03", title: "Pre-Shipment Inspection", desc: "We physically check your inventory before it leaves the factory." },
  { num: "04", title: "Price Negotiation", desc: "Ongoing price and MOQ negotiations directly with factory owners." },
  { num: "05", title: "New SKU Sourcing", desc: "We source new products factory-direct with samples in hand." },
  { num: "06", title: "Time Zone Coverage", desc: "Your China ops handled during Chinese business hours." },
  { num: "07", title: "Weekly English Reports", desc: "Clear weekly updates: what happened, what was agreed, what's next." },
  { num: "08", title: "Trade Show Attendance", desc: "We routinely attend China's largest trade shows including Canton Fair to maintain relationships and identify new opportunities." },
  { num: "09", title: "Domestic Travel in China", desc: "Need someone at a specific factory? We get on a train and go." },
  { num: "10", title: "Supplier Relationships", desc: "Long-term trust means better pricing, faster lead times, fewer problems." },
  { num: "11", title: "Weekend Availability", desc: "Chinese factories work weekends. So do we." },
];

const EverythingIncluded = () => (
  <section className="border-y border-border bg-card py-20 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Our Capabilities
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">Built into every engagement.</h2>
        <p className="mt-3 max-w-lg text-sm font-light text-muted-foreground">
          These capabilities power all three of our service tiers. The more comprehensive your plan, the more you unlock.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="rounded-sm border border-border bg-background p-4 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="font-serif text-2xl text-foreground/10 sm:text-3xl">{item.num}</span>
              <div>
                <h4 className="font-serif text-base sm:text-lg">{item.title}</h4>
                <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground sm:text-sm">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EverythingIncluded;
