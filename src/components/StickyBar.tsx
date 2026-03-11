import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-3 bg-foreground px-4 py-2.5 shadow-[0_-4px_24px_rgba(0,0,0,0.15)] sm:gap-8 sm:px-5 sm:py-4"
        >
          <span className="hidden font-serif text-sm text-background/80 sm:inline">
            Your in-country ops partner. Available now.
          </span>
          <a
            href="https://cal.com/elliottjohnson/chinastrategycall"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-background px-5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground sm:px-8 sm:py-2.5 sm:text-[12px]"
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
