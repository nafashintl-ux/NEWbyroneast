import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/8615914240205"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-[4.5rem] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:bottom-24 sm:right-8 sm:h-14 sm:w-14"
  >
    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
  </a>
);

export default WhatsAppButton;
