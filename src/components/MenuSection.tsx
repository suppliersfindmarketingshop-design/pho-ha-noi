import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type MenuItem = {
  name: string;
  nameVi?: string;
  description?: string;
  price: number;
  popular?: boolean;
  category: string;
};

const categories = [
  "Supă", "Tăiței", "Pad Thai", "Udon", "Orez", "Pui", "Rață",
  "Vită", "Crispy", "Vegan", "Pachețele", "Salată", "Desert", "Băuturi"
];

const menuItems: MenuItem[] = [
  // Supă
  { name: "Phở Bò", nameVi: "Phở Bò", description: "Supă tradițională vietnameză cu tăiței de orez și vită", price: 42, popular: true, category: "Supă" },
  { name: "Phở Gà", nameVi: "Phở Gà", description: "Supă cu tăiței de orez și pui", price: 40, popular: true, category: "Supă" },
  { name: "Bún Bò Huế", description: "Supă picantă din centrul Vietnamului cu vită", price: 44, category: "Supă" },
  { name: "Tom Yum", description: "Supă thai acră și picantă cu creveți", price: 46, popular: true, category: "Supă" },
  { name: "Supă Wonton", description: "Supă cu colțunași umpluți", price: 38, category: "Supă" },
  { name: "Supă de Cocos", description: "Supă cremă cu lapte de cocos și pui", price: 42, category: "Supă" },

  // Tăiței
  { name: "Tăiței cu Vită", description: "Tăiței prăjiți wok cu vită și legume", price: 48, category: "Tăiței" },
  { name: "Tăiței cu Pui", description: "Tăiței prăjiți wok cu pui și legume", price: 45, popular: true, category: "Tăiței" },
  { name: "Tăiței cu Creveți", description: "Tăiței prăjiți wok cu creveți", price: 52, category: "Tăiței" },
  { name: "Tăiței Singapore", description: "Tăiței subțiri cu curry și legume", price: 46, category: "Tăiței" },
  { name: "Tăiței cu Rață", description: "Tăiței prăjiți cu rață și sos hoisin", price: 55, category: "Tăiței" },

  // Pad Thai
  { name: "Pad Thai Clasic", description: "Tăiței de orez cu ou, tofu, arahide", price: 44, popular: true, category: "Pad Thai" },
  { name: "Pad Thai cu Pui", description: "Pad Thai cu pui și legume", price: 46, category: "Pad Thai" },
  { name: "Pad Thai cu Creveți", description: "Pad Thai cu creveți jumbo", price: 52, popular: true, category: "Pad Thai" },
  { name: "Pad Thai Vegan", description: "Pad Thai cu tofu și legume proaspete", price: 42, category: "Pad Thai" },

  // Udon
  { name: "Udon cu Vită", description: "Tăiței udon groși cu vită teriyaki", price: 50, category: "Udon" },
  { name: "Udon cu Pui", description: "Udon cu pui și legume în sos de soia", price: 46, category: "Udon" },
  { name: "Udon cu Creveți", description: "Udon cu creveți și legume", price: 54, category: "Udon" },
  { name: "Udon Vegan", description: "Udon cu tofu și ciuperci shiitake", price: 44, category: "Udon" },

  // Orez
  { name: "Orez Prăjit cu Pui", description: "Orez prăjit cu pui, ou și legume", price: 42, popular: true, category: "Orez" },
  { name: "Orez Prăjit cu Creveți", description: "Orez prăjit cu creveți", price: 48, category: "Orez" },
  { name: "Orez cu Vită Teriyaki", description: "Orez cu vită în sos teriyaki", price: 50, category: "Orez" },
  { name: "Orez cu Curry", description: "Orez cu curry japonez și legume", price: 44, category: "Orez" },
  { name: "Nasi Goreng", description: "Orez prăjit indonezian", price: 46, category: "Orez" },

  // Pui
  { name: "Pui Kung Pao", description: "Pui cu alune, ardei și sos picant", price: 48, popular: true, category: "Pui" },
  { name: "Pui Sichuan", description: "Pui în sos Sichuan picant", price: 50, category: "Pui" },
  { name: "Pui Teriyaki", description: "Pui glazurat în sos teriyaki", price: 46, category: "Pui" },
  { name: "Pui cu Caju", description: "Pui cu caju și legume wok", price: 48, category: "Pui" },
  { name: "Pui Sweet & Sour", description: "Pui în sos dulce-acrișor", price: 44, category: "Pui" },

  // Rață
  { name: "Rață Peking", description: "Rață lăcuită în stil Beijing", price: 65, popular: true, category: "Rață" },
  { name: "Rață cu Portocale", description: "Rață în sos de portocale", price: 60, category: "Rață" },
  { name: "Rață cu Tăiței", description: "Rață cu tăiței și legume wok", price: 58, category: "Rață" },

  // Vită
  { name: "Vită cu Broccoli", description: "Vită cu broccoli în sos de stridii", price: 52, category: "Vită" },
  { name: "Vită Lok Lak", description: "Vită cambodgiană cu sos de lime și piper", price: 55, popular: true, category: "Vită" },
  { name: "Vită Teriyaki", description: "Vită glazurată teriyaki cu susan", price: 54, category: "Vită" },
  { name: "Bò Lúc Lắc", description: "Cuburi de vită sauté cu usturoi", price: 56, category: "Vită" },

  // Crispy
  { name: "Crispy Chicken", description: "Pui crocant cu sos special", price: 44, popular: true, category: "Crispy" },
  { name: "Crispy Duck", description: "Rață crocantă cu sos hoisin", price: 58, category: "Crispy" },
  { name: "Crispy Tofu", description: "Tofu crocant cu sos sweet chili", price: 38, category: "Crispy" },
  { name: "Tempura Creveți", description: "Creveți în tempura crocantă", price: 52, category: "Crispy" },

  // Vegan
  { name: "Curry Verde Vegan", description: "Curry cu lapte de cocos, tofu și legume", price: 42, popular: true, category: "Vegan" },
  { name: "Tofu Teriyaki", description: "Tofu glazurat cu orez și legume", price: 40, category: "Vegan" },
  { name: "Legume Wok", description: "Mix de legume proaspete la wok", price: 38, category: "Vegan" },
  { name: "Buddha Bowl", description: "Bowl cu orez, edamame, avocado, legume", price: 44, category: "Vegan" },

  // Pachețele
  { name: "Spring Rolls (4 buc)", description: "Pachețele proaspete cu legume", price: 28, popular: true, category: "Pachețele" },
  { name: "Nem Ran (4 buc)", description: "Pachețele prăjite vietnameze", price: 30, popular: true, category: "Pachețele" },
  { name: "Gyoza (6 buc)", description: "Colțunași japonezi la grătar", price: 34, category: "Pachețele" },
  { name: "Dim Sum (6 buc)", description: "Colțunași chinezești la abur", price: 36, category: "Pachețele" },
  { name: "Edamame", description: "Boabe de soia cu sare de mare", price: 22, category: "Pachețele" },

  // Salată
  { name: "Salată Vietnameză", description: "Mix de legume cu sos fish și lime", price: 32, category: "Salată" },
  { name: "Salată cu Mango", description: "Mango verde cu ardei, ceapă și nuoc mam", price: 34, popular: true, category: "Salată" },
  { name: "Salată Thai", description: "Salată picantă cu vită și lime", price: 38, category: "Salată" },

  // Desert
  { name: "Chè Bà Màu", description: "Desert vietnamez tricolor cu cocos", price: 24, popular: true, category: "Desert" },
  { name: "Mochi (3 buc)", description: "Prăjituri japoneze din orez glutinos", price: 22, category: "Desert" },
  { name: "Înghețată de Matcha", description: "Înghețată cu ceai verde matcha", price: 20, category: "Desert" },
  { name: "Banana Tempura", description: "Banane în tempura cu miere", price: 24, category: "Desert" },

  // Băuturi
  { name: "Cà Phê Sữa Đá", description: "Cafea vietnameză cu lapte condensat", price: 18, popular: true, category: "Băuturi" },
  { name: "Bubble Tea", description: "Ceai cu bile de tapioca", price: 22, category: "Băuturi" },
  { name: "Limonadă cu Lemongrass", description: "Limonadă proaspătă cu iarbă de lămâie", price: 16, category: "Băuturi" },
  { name: "Smoothie Mango", description: "Smoothie de mango proaspăt", price: 20, category: "Băuturi" },
  { name: "Ceai Jasmine", description: "Ceai verde cu iasomie", price: 14, category: "Băuturi" },
  { name: "Bere Saigon", description: "Bere vietnameză importată", price: 18, category: "Băuturi" },
];

const MenuSection = () => {
  const [active, setActive] = useState("Supă");

  const filtered = menuItems.filter(i => i.category === active);

  return (
    <section id="menu" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10 text-lg">
            Authentic Vietnamese dishes · Freshly prepared daily
          </p>
        </ScrollReveal>

        {/* Category pills */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12" delay={80}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 border-2 border-foreground font-body text-sm font-semibold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-hover ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-brutal"
                  : "bg-background text-foreground shadow-brutal"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <ScrollReveal
              key={`${active}-${idx}`}
              delay={Math.min(idx, 5) * 80}
              className="border-2 border-foreground bg-background shadow-brutal p-5 flex flex-col justify-between gap-2 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="shrink-0 border-2 border-foreground bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground font-body">
                      Popular
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-muted-foreground font-body text-sm mt-1">{item.description}</p>
                )}
              </div>
              <p className="font-display text-2xl font-black text-primary mt-2">{item.price} lei</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
