import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Book a free consultation with Byron East. Discuss your sourcing needs, get honest advice, and find out if we can beat your current China factory pricing."
        path="/contact"
      />
      <section className="flex min-h-[45vh] items-end bg-foreground pb-16 pt-32 text-background sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Let's start a conversation.
            </h1>
            <p className="mt-4 max-w-md text-sm font-light opacity-50">
              Book a call or send us a message. No pressure, no pitch. Just an honest conversation about your supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            {/* Calendly — Primary action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5"
            >
              <h2 className="font-serif text-2xl">Book a free call</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                30 minutes. We'll discuss your current sourcing setup, identify where you might be overpaying, and see if we can help. If not, we'll tell you.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 h-12 w-full rounded-none bg-accent px-8 text-sm font-medium uppercase tracking-widest text-accent-foreground hover:bg-accent/85 sm:text-[12px]"
              >
                <a href="https://cal.com/elliottjohnson01/15-min" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>

              <div className="mt-10 flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm font-light">info@byroneast.com</span>
              </div>
            </motion.div>

            {/* Form — Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-6 md:col-start-7"
            >
              <h2 className="font-serif text-2xl">Or send a message</h2>
              {submitted ? (
                <div className="mt-6 border-l-2 border-accent py-4 pl-6">
                  <p className="font-serif text-xl">Thank you.</p>
                  <p className="mt-2 text-sm font-light text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="mt-2 rounded-none border-0 border-b border-border bg-transparent px-0 text-sm font-light focus-visible:ring-0 focus-visible:border-accent"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="mt-2 rounded-none border-0 border-b border-border bg-transparent px-0 text-sm font-light focus-visible:ring-0 focus-visible:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="business" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Business Type
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 rounded-none border-0 border-b border-border bg-transparent px-0 text-sm font-light focus-visible:ring-0">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="amazon-fba">Amazon FBA</SelectItem>
                        <SelectItem value="dtc">DTC Brand</SelectItem>
                        <SelectItem value="dropshipper">Dropshipper</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your sourcing needs..."
                      rows={4}
                      required
                      className="mt-2 rounded-none border-0 border-b border-border bg-transparent px-0 text-sm font-light focus-visible:ring-0 focus-visible:border-accent"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-12 rounded-none bg-accent px-8 text-[12px] font-medium uppercase tracking-widest text-accent-foreground hover:bg-accent/85 sm:text-sm"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
