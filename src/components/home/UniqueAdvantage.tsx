import { motion } from "framer-motion";
import { Shield, MessageSquare, MapPin } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Western Credibility",
    desc: "You get the trust, communication style, and transparency you're used to. Not an opaque middleman.",
  },
  {
    icon: MessageSquare,
    title: "Mandarin Fluency",
    desc: "5+ years living in China. We speak with suppliers like locals, building relationships that get you priority treatment.",
  },
  {
    icon: MapPin,
    title: "China-Based Full-Time",
    desc: "We live here. Same-day factory visits. Real-time problem solving. No time zone issues.",
  },
];

const UniqueAdvantage = () => (
  <section className="border-y border-border bg-card py-20 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
          Your native English, in-country ops partner.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm font-light text-muted-foreground">
          This combination doesn't exist anywhere else.
        </p>
      </motion.div>

      <div className="mx-auto mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
        {advantages.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-sm border border-border bg-background p-6 transition-shadow hover:shadow-md sm:p-8"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <a.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 font-serif text-lg sm:text-xl">{a.title}</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UniqueAdvantage;
