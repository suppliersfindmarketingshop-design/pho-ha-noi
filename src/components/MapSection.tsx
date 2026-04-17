import ScrollReveal from "@/components/ScrollReveal";

const MapSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12 text-lg">
            📍 Drumul Binelui 41, 042147 București
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120} className="border-2 border-foreground shadow-brutal-lg overflow-hidden">
          <iframe
            title="PHO HA NOI location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.5!2d26.12693807!3d44.37093401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff9b2a1e6b5f%3A0x1234567890abcdef!2sDrumul%20Binelui%2041%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MapSection;
