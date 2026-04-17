import ScrollReveal from "@/components/ScrollReveal";

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
          <ScrollReveal delay={0}>
            <h3 className="font-display text-2xl font-black text-primary mb-3">PHO HA NOI</h3>
            <p className="font-body text-sm text-primary-foreground/70">
              Authentic Vietnamese cuisine in București. Fresh, bold, unforgettable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <h4 className="font-display text-lg font-bold mb-3">Visit Us</h4>
            <p className="font-body text-sm text-primary-foreground/70">Drumul Binelui 41</p>
            <p className="font-body text-sm text-primary-foreground/70">042147 București</p>
            <p className="font-body text-sm text-primary-foreground/70 mt-2">Open daily · Closes 22:00</p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <h4 className="font-display text-lg font-bold mb-3">Contact</h4>
            <a href="tel:0793668888" className="font-body text-sm text-primary hover:underline block">📞 0793 668 888</a>
            <a href="https://ialoc.ro" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:underline block mt-1">🍽️ Book on ialoc.ro</a>
          </ScrollReveal>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50">© 2026 PHO HA NOI Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
