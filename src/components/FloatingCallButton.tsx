import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:0793668888"
      aria-label="Call PHO HA NOI"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-primary border-2 border-foreground shadow-brutal text-primary-foreground transition-transform duration-200 hover:scale-110 hover:shadow-brutal-hover group"
    >
      <span className="absolute inset-0 rounded-full animate-call-ping bg-primary/40" />
      <span className="absolute inset-0 rounded-full animate-call-ping bg-primary/30 [animation-delay:0.5s]" />
      <Phone className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
};

export default FloatingCallButton;
