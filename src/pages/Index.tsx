import { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Palette, 
  Target, 
  FileText, 
  Share2, 
  Package,
  Instagram,
  Linkedin,
  Send
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PortfolioDetailsDialog } from "@/components/PortfolioDetailsDialog";

import ahun01 from "@/assets/AHUN/AHUN-01.jpg";
import ahun02 from "@/assets/AHUN/AHUN-02.jpg";
import ahun03 from "@/assets/AHUN/AHUN-03.jpg";
import ahun04 from "@/assets/AHUN/AHUN-04.jpg";
import ahun05 from "@/assets/AHUN/AHUN-05.jpg";
import ahun06 from "@/assets/AHUN/AHUN-06.jpg";
import ahun08 from "@/assets/AHUN/AHUN-08.jpg";
import btsun01 from "@/assets/btsun/btsun-01.jpg";
import btsun02 from "@/assets/btsun/btsun-02.jpg";
import btsun03 from "@/assets/btsun/btsun-03.jpg";
import btsun04 from "@/assets/btsun/btsun-04.jpg";
import btsun05 from "@/assets/btsun/btsun-05.jpg";
import btsun06 from "@/assets/btsun/btsun-06.jpg";

import butterfly01 from "@/assets/butterfly/ER-01.jpg";
import butterfly02 from "@/assets/butterfly/ER-02.jpg";
import butterfly03 from "@/assets/butterfly/ER-03.jpg";
import butterfly04 from "@/assets/butterfly/ER-04.jpg";
import butterfly05 from "@/assets/butterfly/ER-05.jpg";
import butterfly06 from "@/assets/butterfly/ER-06.jpg";
import butterfly07 from "@/assets/butterfly/ER-07.jpg";
import butterfly08 from "@/assets/butterfly/ER-08.jpg";
import butterfly09 from "@/assets/butterfly/ER-09.jpg";
import butterfly10 from "@/assets/butterfly/ER-10.jpg";
import kech01 from "@/assets/kech brand/KECH brand -01.jpg";
import kech02 from "@/assets/kech brand/KECH brand -02.jpg";
import kech03 from "@/assets/kech brand/KECH brand -03.jpg";
import kech04 from "@/assets/kech brand/KECH brand -04.jpg";
import kech08 from "@/assets/kech brand/KECH brand -08.jpg";
import meriBan from "@/assets/meri/ban.jpg";
import meri01 from "@/assets/meri/LOGO ME-01.jpg";
import meri02 from "@/assets/meri/LOGO ME-02.jpg";
import meri03 from "@/assets/meri/LOGO ME-03.jpg";
import meri05 from "@/assets/meri/LOGO ME-05.jpg";
import meri07 from "@/assets/meri/LOGO ME-07.jpg";
import meri08 from "@/assets/meri/LOGO ME-08.jpg";
import meri09 from "@/assets/meri/LOGO ME-09.jpg";
import raee01 from "@/assets/raee/RAEE-01.jpg";
import raee02 from "@/assets/raee/RAEE-02.jpg";
import raee03 from "@/assets/raee/RAEE-03.jpg";
import raee04 from "@/assets/raee/RAEE-04.jpg";
import raee05 from "@/assets/raee/RAEE-05.jpg";
import raee06 from "@/assets/raee/RAEE-06.jpg";
import raee07 from "@/assets/raee/RAEE-07.jpg";
import raee08 from "@/assets/raee/RAEE-08.jpg";

// Egary folder
import egaryAA from "@/assets/egary/AA.jpg";
import egaryAs from "@/assets/egary/as.jpg";
import egaryAsas from "@/assets/egary/asas.jpg";
import egaryBill from "@/assets/egary/bill.jpg";
import egaryImac from "@/assets/egary/iMac-psd-mockup-template-1.jpg";
import egaryLc from "@/assets/egary/lc.jpg";
import egaryLL from "@/assets/egary/LL.jpg";
import egaryLO from "@/assets/egary/LO.jpg";
import egaryMark from "@/assets/egary/mark.jpg";
import egaryPic1 from "@/assets/egary/PIC 1.jpg";
import egaryTSH from "@/assets/egary/TSH.jpg";

// PACERFIELD folder
import pacerBillboard from "@/assets/PACERFIELD/BILLBOARD.jpg";
import pacerWomanHelmet from "@/assets/PACERFIELD/medium-shot-woman-wearing-helmet.jpg";
import pacerWomanHelmet1 from "@/assets/PACERFIELD/medium-shot-woman-wearing-helmet1.jpg";
import pacerPPF from "@/assets/PACERFIELD/PPF.jpg";
import pacerSAO from "@/assets/PACERFIELD/SAO.jpg";
import pacerSTA from "@/assets/PACERFIELD/STA.jpg";
import pacerZZ from "@/assets/PACERFIELD/ZZ.jpg";

// SG folder
import sgSam2 from "@/assets/SG/SAM (2).jpg";
import sgSam from "@/assets/SG/SAM.jpg";
import sgLogo2 from "@/assets/SG/SAMUEL GIRMA LOGO-02.jpg";
import sgLogo from "@/assets/SG/SAMUEL GIRMA LOGO.jpg";
import sgSamuel from "@/assets/SG/SAMUEL GIRMA.jpg";
import { Phone } from "lucide-react";
const Index = () => {
const [activeSection, setActiveSection] = useState("home");
const [selectedProject, setSelectedProject] = useState<any | null>(null);
const [isDialogOpen, setIsDialogOpen] = useState(false);
const openProject = (item: any) => {
  setSelectedProject(item);
  setIsDialogOpen(true);
};
const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const message = String(data.get("message") || "");
  const subject = `Portfolio Inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:bethebayou@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.reset();
};

const portfolioItems = [
  {
    title: "AHUN",
    description:
      "AHUN came without a voice, only a deep well of heritage waiting to be translated. I distilled its cultural roots into a modern, restrained visual language — a mark that speaks tradition in a contemporary tongue.",
    image: ahun01,
    tags: ["Brand Identity", "Logo", "Guidelines"],
    duration: "6 weeks",
    images: [ahun01, ahun02, ahun03, ahun04, ahun05, ahun06, ahun08],
    process: [
      "Discovery — listening deeply to founders and tracing cultural context",
      "Synthesis — defining a concise, enduring brand proposition",
      "Markmaking — crafting an emblem and type system of quiet authority",
      "Systemization — building a palette, patterns, and usage rules",
      "Handoff — delivering guidelines to ensure consistent application"
    ],
    result:
      "A durable identity system that honors its origin without excess. AHUN now presents a cohesive, confident face across print, signage, and digital."
  },
  {
    title: "BTSUN",
    description:
      "BTSUN sought to escape the noise of commodity design. The challenge: craft a presence that whispers sophistication yet moves with intent.",
    image: btsun03,
    tags: ["Identity", "Logo", "Digital"],
    duration: "5 weeks",
    images: [btsun01, btsun02, btsun03, btsun04, btsun05, btsun06],
    process: [
      "Market reading — locating a quiet space beyond clichés",
      "Concept exploration — merging geometry with subtle motion cues",
      "Refinement — building scalable marks and responsive lockups",
      "Delivery — assets engineered for screens, packaging, and marketing"
    ],
    result:
      "A visual system that reads premium and approachable. BTSUN gained a strong, flexible identity that works seamlessly across product and promotional contexts."
  },
   {
    title: "Egary",
    description: "Egary Transport & Brand Assets",
    image: egaryAA,
    tags: ["Transport", "Brand", "Mockups"],
    duration: "4 weeks",
    images: [
      egaryAA, egaryAs, egaryAsas, egaryBill, egaryImac,
      egaryLc, egaryLL, egaryLO, egaryMark, egaryPic1, egaryTSH
    ],
    process: [
      "Brand research & positioning",
      "Logo and visual system development",
      "Mockup and collateral design"
    ],
    result: "A versatile brand system for Egary, including transport assets and digital collateral."
  },
  {
    title: "PACERFIELD",
    description: "PACERFIELD Brand & Campaign Visuals",
    image: pacerBillboard,
    tags: ["Branding", "Campaign", "Outdoor"],
    duration: "3 weeks",
    images: [
      pacerBillboard, pacerWomanHelmet, pacerWomanHelmet1,
      pacerPPF, pacerSAO, pacerSTA, pacerZZ
    ],
    process: [
      "Visual campaign strategy",
      "Creative concept development",
      "Asset production for digital and print"
    ],
    result: "A cohesive campaign that elevated PACERFIELD's brand presence across multiple channels."
  },
   {
    title: "SG (Samuel Girma)",
    description: "Personal Branding for Samuel Girma",
    image: sgSam,
    tags: ["Personal Brand", "Logo", "Identity"],
    duration: "2 weeks",
    images: [
      sgSam2, sgSam, sgLogo2, sgLogo
    ],
    result: "A refined personal brand that captures Samuel Girma's essence and professional ethos."
  },
  {
    title: "Butterfly",
    description:
      "Butterfly needed a presence that matched its name — gentle, deliberate, transformative. The goal was to design an identity that feels like breathing room in a crowded world.",
    image: butterfly01,
    tags: ["Brand", "Art Direction", "Applications"],
    duration: "8 days",
    images: [
      butterfly01, butterfly02, butterfly03, butterfly04, butterfly05,
      butterfly06, butterfly07, butterfly08, butterfly09, butterfly10
    ],
    process: [
      "Mood & persona — defining an emotional and visual territory",
      "Mark exploration — crafting organic, balanced forms",
      "Applications — designing for packaging, web, and editorial layouts",
      "Refinement — perfecting typography and micro-details"
    ],
    result:
      "A calming, cohesive identity that supports storytelling and builds trust. Delivered a launch-ready asset suite to sustain growth."
  },
  {
    title: "KECH Brand",
    description:
      "KECH needed speed, clarity, and trust — a system that works everywhere without hesitation.",
    image: kech01,
    tags: ["Logotype", "Systems", "UX"],
    duration: "2 weeks",
    images: [kech01, kech02, kech03, kech04, kech08],
    process: [
      "Audit — mapping current visual touchpoints",
      "Core idea — designing for instant recognition",
      "System build — responsive marks, icons, and motion hints",
      "Toolkit handoff — ready-to-use templates for fast deployment"
    ],
    result:
      "A bold, practical identity optimized for interfaces, packaging, and large-scale branding — ready to be applied without friction."
  },
  {
    title: "MERI (Skill Development Project)",
    description:
      "MERI was never about a client brief — it was about sharpening my own craft. I set myself the challenge to create an identity that balances authority with warmth, applying professional methods to a self-driven concept.",
    image: meri01,
    tags: ["Typography", "Identity", "Collateral"],
    duration: "1 week",
    images: [meriBan, meri01, meri02, meri03, meri05, meri07, meri08, meri09],
    process: [
      "Self-briefing — setting goals for skill growth and experimentation",
      "Typographic exploration — aiming for confident but human forms",
      "Palette & composition — keeping it calm yet authoritative",
      "Mock applications — testing across print and digital scenarios"
    ],
    result:
      "A self-initiated project that allowed me to refine typography, composition, and brand system design without client constraints."
  },
  {
    title: "RAEE",
    description:
      "RAEE needed to evolve from prototype to professional presence — fast. The task was to create an identity that could scale without losing clarity.",
    image: raee01,
    tags: ["Identity", "Startup", "Scale"],
    duration: "9 days",
    images: [raee01, raee02, raee03, raee04, raee05, raee06, raee07, raee08],
    process: [
      "Essence — defining an unfussy brand promise",
      "Minimal markmaking — clarity at any scale",
      "Systems for iteration — tokens and components for rapid evolution",
      "Launch assets — visual materials ready for pitch decks and product"
    ],
    result:
      "A minimal, confident identity built for speed and adaptability — strong enough to carry early growth and evolve with the brand."
  }
];

const testimonials = [
  {
    quote: "Bethe captured our vision and gave it elegance without pretension.",
    author: "Yonas Mekonnen",
    role: "Egary Transport, CEO | Rehoboth International Athletics, Founder"
  },
  {
    quote: "He turned our half-formed thoughts into a brand people remember.",
    author: "Dawit Alemu",
    role: "Ahun Times"
  }
];


  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Discovery",
      description: "Deep dive into your brand's core values, target audience, and competitive landscape to create a strategic foundation."
    },
    {
      icon: Palette,
      title: "Logo & Visual Identity",
      description: "Custom logo design and comprehensive visual identity systems that capture your brand's essence and stand out."
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Detailed brand guidelines ensuring consistent application across all touchpoints and marketing materials."
    },
    {
      icon: Share2,
      title: "Social Media Branding",
      description: "Cohesive social media templates and assets that maintain brand consistency across all platforms."
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Product packaging that tells your story and creates memorable shelf appeal for maximum impact."
    }
  ];

  const skills = [
    "Brand Strategy", "Logo Design", "Typography", "Color Theory", 
    "Brand Guidelines", "Visual Storytelling"
  ];

  const tools = [
    "Illustrator", "Photoshop", "Figma", "Canva"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bethe — Brand Identity Designer | Timeless Visual Identities</title>
        <meta name="description" content="Bethe designs strategic, timeless visual identities for brands that want to stand out. Explore work, services, and get in touch." />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-8">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 px-6">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="mx-auto max-w-7xl h-full bg-gradient-to-b from-primary/10 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div aria-hidden="true" className="w-10 h-10 rounded-full bg-accent text-accent-foreground grid place-items-center font-bold shadow-[var(--shadow-medium)]">B</div>
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs tracking-wider uppercase">Brand Identity Designer</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              I design brands that stick in people's minds.
            </h1>
            <p className="text-subheading text-muted-foreground mb-10 leading-relaxed">
              4+ years creating strategic, timeless visual identities for businesses that want to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#portfolio" className="btn-primary animate-scale-in">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-secondary animate-scale-in">
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Trusted by 10+ brands across tech, fitness, education and food.
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-heading mb-6 text-foreground">About Me</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a brand identity designer turning ideas into bold, timeless visuals. 
                With 4+ years in the game, I've crafted 10+ brands across industries, 
                always blending strategy with creativity.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading mb-6 text-foreground">Featured Works</h2>
            <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing strategic brand development and visual identity design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} onClick={() => openProject(item)} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading mb-6 text-foreground">What Clients Say</h2>
            <p className="text-subheading text-muted-foreground">
              Real feedback from real clients who've experienced the transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading mb-6 text-foreground">Services</h2>
            <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
              Comprehensive brand design services to establish and strengthen your market presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-heading mb-6 text-foreground">Let's make something unforgettable.</h2>
            <p className="text-subheading text-muted-foreground mb-12">
              Ready to transform your brand? Let's discuss your project and create something amazing together.
            </p>
            
    <div className="bg-card rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-medium)] mb-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="mailto:bethebayou@gmail.com"
          className="btn-primary group flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <Mail className="w-5 h-5" />
          <span>bethebayou@gmail.com</span>
        </a>
        <a
          href="tel:+1234567890"
          className="btn-primary group flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <Phone className="w-5 h-5" />
          <span>+251920420124</span>
        </a>
      </div>
    </div>

            <form onSubmit={handleContactSubmit} className="bg-card rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-medium)] mb-12 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button type="submit" className="btn-primary">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>

            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/bethe.19" className="w-12 h-12 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground 
                                   rounded-full flex items-center justify-center transition-all duration-[var(--transition-normal)]
                                   hover-lift">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="" className="w-12 h-12 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground 
                                   rounded-full flex items-center justify-center transition-all duration-[var(--transition-normal)]
                                   hover-lift">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://t.me/betheba" className="w-12 h-12 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground 
                                   rounded-full flex items-center justify-center transition-all duration-[var(--transition-normal)]
                                   hover-lift">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Bethe. All rights reserved. Designed with passion for brands that matter.
          </p>
        </div>
      </footer>

      <PortfolioDetailsDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        item={selectedProject}
      />
    </div>
  );
};

export default Index;
