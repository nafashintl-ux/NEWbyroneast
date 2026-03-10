import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Globe, Handshake, Eye, Check } from "lucide-react";

const values = [
  { icon: Globe, label: "Boots on the ground. We live and work in China full-time." },
  { icon: Handshake, label: "Relationships over transactions. Guanxi matters." },
  { icon: Eye, label: "Full transparency. If we can't help, we'll say so." },
];

const credentials = [
  "5+ years living full-time in China",
  "Fluent Mandarin (learned in Harbin, China's Ice City)",
  "Former corporate background in government and tech policy",
  "Registered business owner in China (WFOE)",
  "Deep roots in e-commerce supply chains (6+ years)",
  "Based in Southern China, close to major manufacturing hubs",
];

const About = () => (
  <>
    <SEO
      title="About Us"
      description="Byron East was built by professionals who moved to China to fix the broken sourcing model. We walk factory floors, negotiate in Mandarin, and work as your on-the-ground partner."
      path="/about"
    />
    <section className="flex min-h-[50vh] items-end bg-foreground pb-16 pt-32 text-background sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            We got tired of the broken sourcing model.
            <span className="block text-accent">So we moved to China.</span>
          </h1>
        </motion.div>
      </div>
    </section>

    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl">Our Story</h2>
          <div className="mt-5 space-y-4 text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Byron East was founded because we've been where you are. Running e-commerce brands, emailing factories from the other side of the world, and hoping the product that showed up matched the sample.
            </p>
            <p>
              It never did. Not reliably.
            </p>
            <p>
              Most sourcing agents are either based outside China (time zone issues, no factory access) or local middlemen adding margins with limited transparency. We saw a gap: what brands actually need is a Western-quality operations partner who lives in China, speaks Mandarin, and shows up at the factory.
            </p>
          </div>
        </motion.div>

        {/* Why China */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <h2 className="font-serif text-2xl sm:text-3xl">Why We Moved to China</h2>
          <div className="mt-5 space-y-4 text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
            <p>
              So we moved. We set up in China, learned the language in Harbin (China's Ice City), built the relationships, and started doing what no sourcing agent we'd ever worked with actually did: showing up. Walking the factory floor. Sitting across the table from the boss, not just the sales rep.
            </p>
            <p>
              In Chinese business culture, relationships matter more than contracts. When a factory sees the same face every month, speaking their language, respecting their culture, they give you priority. Better pricing. Faster resolution when things go wrong.
            </p>
            <p>
              We started Byron East because we saw e-commerce brands overpaying through English Alibaba and wasting time on communication delays. You don't need another task-based freelancer. You need a strategic partner who lives in China and speaks the language.
            </p>
          </div>
        </motion.div>

        {/* Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          <h2 className="font-serif text-2xl sm:text-3xl">Background</h2>
          <div className="mt-5 rounded-sm border border-border bg-card p-6">
            <ul className="space-y-3">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] font-light sm:text-base">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Our Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h2 className="font-serif text-2xl sm:text-3xl">What We Stand For</h2>
          <p className="mt-5 text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
            We're not a middleman adding a margin. We're a partner who's genuinely in your corner, with boots on the ground.
          </p>
          <ul className="mt-8 space-y-5">
            {values.map((v, i) => (
              <li key={i} className="flex items-start gap-4">
                <v.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-[15px] font-light sm:text-base">{v.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <p className="text-[15px] font-normal leading-relaxed text-foreground sm:text-base">
            If you can't tell, we actually love this work. And if we can't add value, we'll tell you. No invoice, no obligation.
          </p>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </>
);

export default About;
