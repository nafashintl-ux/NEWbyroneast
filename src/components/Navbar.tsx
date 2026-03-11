import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:h-20">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Byron East logo" className="h-9 w-auto object-contain lg:h-10" />
          <span className={cn("font-serif text-xl sm:text-2xl", scrolled ? "text-foreground" : "text-background")}>
            Byron East
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          {/* <Link
            to="/about"
            className={cn(
              "text-[13px] font-medium uppercase tracking-widest transition-colors hover:text-accent",
              isActive("/about") ? "text-accent" : scrolled ? "text-foreground/70" : "text-background/70"
            )}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-[13px] font-medium uppercase tracking-widest transition-colors hover:text-accent",
              isActive("/contact") ? "text-accent" : scrolled ? "text-foreground/70" : "text-background/70"
            )}
          >
            Contact
          </Link> */}
          <a
            href="https://www.linkedin.com/in/elliottjohnson/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-accent/10",
              scrolled ? "text-foreground/70 hover:text-accent" : "text-background/70 hover:text-accent"
            )}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-none bg-accent px-6 text-[12px] font-medium uppercase tracking-widest text-accent-foreground hover:bg-accent/85"
          >
            <a href="https://cal.com/elliottjohnson/chinastrategycall" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://www.linkedin.com/in/elliottjohnson/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-accent/10",
              scrolled ? "text-foreground/80 hover:text-accent" : "text-background/80 hover:text-accent"
            )}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-none bg-accent px-4 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-foreground hover:bg-accent/85"
          >
            <a href="https://cal.com/elliottjohnson/chinastrategycall" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
