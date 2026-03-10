import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 5, suffix: "+", label: "Years in China" },
  { target: 15, suffix: "%", label: "Average Price Saving" },
  { target: 100, suffix: "+", label: "Chinese Supplier Contacts" },
  { target: 30, suffix: "min", label: "Average Response Time" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const step = target / 60;
          const tick = () => {
            start += step;
            if (start >= target) {
              setCount(target);
              return;
            }
            setCount(Math.floor(start));
            requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <span ref={ref} className="font-serif text-4xl text-background sm:text-5xl">
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="bg-foreground py-20 sm:py-24">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 px-5 text-center sm:px-6 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <AnimatedNumber target={s.target} suffix={s.suffix} />
          <p className="mt-2 text-xs uppercase tracking-widest text-background/50">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsBar;
