import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is Byron East different from sourcing agencies?",
    a: "Most sourcing agencies are based outside China and fly in occasionally. We live here full-time, speak fluent Mandarin, and can visit your factory same-day. We personally handle every relationship, not a rotating team of agents.",
  },
  {
    q: "Why not just keep using a trading company?",
    a: "Trading companies on English Alibaba typically mark up 20-30% because they're middlemen. We give you direct factory access via Chinese Alibaba and negotiate in Mandarin. On a $100K order, that's $20K-$30K in savings.",
  },
  {
    q: "Do you visit factories in person?",
    a: "Yes. We live in southern China and can visit factories same-day in Shenzhen, Guangzhou, Dongguan, and surrounding areas. For other regions, we travel domestically with ease. No $5K flights from overseas. We're already here.",
  },
  {
    q: "How does the engagement work?",
    a: "We start with a free call to understand your business. From there, we scope an engagement that fits your needs, whether it's a one-off sourcing project or ongoing supply chain management. No long-term commitment required upfront.",
  },
  {
    q: "What if I'm just starting out?",
    a: "Start with a single sourcing project. We'll help you find and vet a factory, negotiate pricing, and verify quality. Once you see the value, we can discuss ongoing support. Most clients start small and scale up once they see the cost savings.",
  },
  {
    q: "What industries do you work with?",
    a: "We work primarily with Amazon FBA sellers, DTC brands, and Shopify stores sourcing physical products from China. If you source products from Chinese factories, we can help, regardless of your niche.",
  },
];

const FAQ = () => (
  <section className="py-24 sm:py-32">
    <div className="mx-auto max-w-3xl px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Common questions.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-sm border border-border bg-card px-5 py-1 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-serif text-base hover:no-underline sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-light leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
