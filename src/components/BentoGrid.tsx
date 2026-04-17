import ScrollReveal from "@/components/ScrollReveal";

const BentoGrid = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
            Why Guests <span className="text-primary">Love Us</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {/* Rating card - spans 2 cols on mobile */}
          <ScrollReveal delay={0} className="col-span-2 border-2 border-foreground bg-primary shadow-brutal p-6 flex flex-col justify-between">
            <div className="flex gap-1 text-3xl">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary-foreground">★</span>
              ))}
            </div>
            <div>
              <p className="font-display text-5xl font-black text-primary-foreground">4.9</p>
              <p className="text-primary-foreground/80 font-body text-sm">273 Google Reviews</p>
            </div>
          </ScrollReveal>

          {/* Food Score */}
          <ScrollReveal delay={80} className="border-2 border-foreground bg-accent shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">🍜</span>
            <div>
              <p className="font-display text-4xl font-black text-accent-foreground">5/5</p>
              <p className="text-accent-foreground/80 font-body text-sm">Food Score</p>
            </div>
          </ScrollReveal>

          {/* Atmosphere */}
          <ScrollReveal delay={160} className="border-2 border-foreground bg-secondary shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">🎹</span>
            <div>
              <p className="font-display text-lg font-bold text-secondary-foreground leading-tight">Piano Music</p>
              <p className="text-muted-foreground font-body text-sm">Cozy & elegant vibes</p>
            </div>
          </ScrollReveal>

          {/* Fresh Daily */}
          <ScrollReveal delay={240} className="border-2 border-foreground bg-earth-cream shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">🌿</span>
            <div>
              <p className="font-display text-lg font-bold text-foreground leading-tight">Fresh Daily</p>
              <p className="text-muted-foreground font-body text-sm">Ingredients prepared every morning</p>
            </div>
          </ScrollReveal>

          {/* Authentic Recipes - spans 2 cols */}
          <ScrollReveal delay={0} className="col-span-2 border-2 border-foreground bg-card shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">🇻🇳</span>
            <div>
              <p className="font-display text-2xl font-black text-card-foreground">Authentic Vietnamese Recipes</p>
              <p className="text-muted-foreground font-body text-sm">Traditional flavors from Hanoi, passed down through generations</p>
            </div>
          </ScrollReveal>

          {/* Price Range */}
          <ScrollReveal delay={80} className="border-2 border-foreground bg-accent shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">💰</span>
            <div>
              <p className="font-display text-2xl font-black text-accent-foreground">40–120 lei</p>
              <p className="text-accent-foreground/80 font-body text-sm">Great value</p>
            </div>
          </ScrollReveal>

          {/* Fast Service */}
          <ScrollReveal delay={160} className="border-2 border-foreground bg-primary shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">⚡</span>
            <div>
              <p className="font-display text-lg font-bold text-primary-foreground leading-tight">Fast Service</p>
              <p className="text-primary-foreground/80 font-body text-sm">Quick & friendly staff</p>
            </div>
          </ScrollReveal>

          {/* Location */}
          <ScrollReveal delay={240} className="col-span-2 border-2 border-foreground bg-secondary shadow-brutal p-6 flex flex-col justify-between">
            <span className="text-4xl">📍</span>
            <div>
              <p className="font-display text-xl font-bold text-secondary-foreground leading-tight">Drumul Binelui 41, 042147 București</p>
              <p className="text-muted-foreground font-body text-sm">Easy to find · Parking available</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
