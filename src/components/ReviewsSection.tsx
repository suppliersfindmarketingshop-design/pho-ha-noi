const reviews = [
  {
    name: "Naomi Cergan",
    role: "Local Guide · 5 reviews",
    rating: 5,
    text: "All the employees are very nice and patient, we always feel welcome there. Bravo!",
    tags: "Dine in | Dinner | lei 80–100",
    scores: "Food: 5 | Service: 5 | Atmosphere: 5",
    time: "2 months ago",
  },
  {
    name: "Alex Somesan",
    role: "Local Guide · 116 reviews",
    rating: 5,
    text: "PROS: Tasty food, large portions, great design and piano music. CONS: The waitress had issues in understanding our order, she brought 2 wrong drinks and there was a significant food delay for one person.",
    tags: "Dine in",
    scores: "Food: 5 | Service: 3 | Atmosphere: 5",
    time: "4 months ago",
  },
  {
    name: "Ionuț Bunescu",
    role: "Local Guide · 7 reviews",
    rating: 4,
    text: "They used to have the best rice noodles (chicken, beef, shrimp), but I don't know what happened. They changed the noodles, and now they seem like the cheapest kind, the boxed, curly ones.",
    tags: "Takeaway | Dinner",
    scores: "Food: 4 | Service: 5",
    time: "3 months ago",
  },
];

import ScrollReveal from "@/components/ScrollReveal";

const ReviewsSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
            Guest <span className="text-primary">Reviews</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal
              key={i}
              delay={i * 120}
              className="border-2 border-foreground bg-background shadow-brutal p-6 flex flex-col gap-4 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground font-body text-xs">{review.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={j < review.rating ? "text-primary" : "text-muted"}>★</span>
                  ))}
                </div>
                <span className="text-muted-foreground font-body text-xs">{review.time}</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {review.tags.split(" | ").map((tag, j) => (
                  <span key={j} className="border border-foreground bg-muted px-2 py-0.5 font-body text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-body text-sm text-foreground leading-relaxed flex-1">{review.text}</p>

              <div className="border-t border-foreground/20 pt-3">
                <p className="font-body text-xs font-semibold text-muted-foreground">{review.scores}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
