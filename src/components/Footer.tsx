import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="mx-auto max-w-6xl px-5 pt-12 pb-28 sm:px-6 sm:pt-16 sm:pb-32">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-2xl">Byron East</p>
          <p className="mt-3 max-w-xs text-sm font-light leading-relaxed opacity-50">
            Your sourcing team on the ground in China.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-light sm:items-end">
          <Link to="/" className="opacity-50 transition-opacity hover:opacity-100">Home</Link>
          {/* <Link to="/about" className="opacity-50 transition-opacity hover:opacity-100">About</Link>
          <Link to="/contact" className="opacity-50 transition-opacity hover:opacity-100">Contact</Link> */}
          <a href="mailto:team@byroneast.com" className="opacity-50 transition-opacity hover:opacity-100">team@byroneast.com</a>
          <a
            href="https://www.linkedin.com/in/elliottjohnson/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-1.5 opacity-50 transition-opacity hover:opacity-100"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="mt-10 border-t border-background/10 pt-6">
        <p className="text-xs font-light opacity-30">
          © {new Date().getFullYear()} Byron East. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
