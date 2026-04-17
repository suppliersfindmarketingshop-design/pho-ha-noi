import heroPho from "@/assets/hero-pho.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-6">
            <div className="inline-block border-2 border-foreground bg-accent px-4 py-1.5 shadow-brutal font-body text-sm font-semibold text-accent-foreground uppercase tracking-widest">
              Vietnamese Cuisine · București
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-foreground">
              PHO<br />
              <span className="text-primary">HA NOI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md font-body">
              Authentic Vietnamese flavors in the heart of Bucharest. Fresh ingredients, bold spices, unforgettable taste.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-primary">★</span>
                ))}
              </div>
              <span className="font-display text-xl font-bold text-foreground">4.9</span>
              <span className="text-muted-foreground font-body">(273 reviews)</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:0793668888"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-primary px-6 py-3 font-display font-bold text-primary-foreground shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover"
              >
                📞 Call Now
              </a>
              <a
                href="https://ialoc.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-secondary px-6 py-3 font-display font-bold text-secondary-foreground shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover"
              >
                🍽️ Find a Table
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal className="relative" delay={150}>
            <div className="border-3 border-foreground shadow-brutal-lg overflow-hidden" style={{ border: '3px solid hsl(var(--foreground))' }}>
              <img
                src={heroPho}
                alt="Steaming bowl of Vietnamese Pho"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 border-2 border-foreground bg-accent px-4 py-2 shadow-brutal font-display font-bold text-accent-foreground">
              Open · Closes 22:00
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
