"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/** Replace with the official trailer URL when available. */
const TRAILER_URL = "";

// Icons as SVG components
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const BikeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h3" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const FilmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Cast", href: "#cast" },
    { label: "Crew", href: "#crew" },
    { label: "Gallery", href: "#gallery" },
    { label: "Press", href: "#press" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary">Blessed</span>
            <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">The Movie</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors animated-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section — Overview
function HeroSection() {
  const trailerHref = TRAILER_URL || "#trailer";

  return (
    <section className="relative min-h-screen flex items-end sm:items-center overflow-hidden">
      <Image
        src="/images/hero-bridge.png"
        alt="New Orleans bridge illuminated at night, reflected in still water"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Readable overlay — warm site chrome over night photography */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
      <div className="absolute inset-0 film-grain" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-28 sm:py-32">
        <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-primary-foreground/90">
            <BikeIcon />
          </span>
          <span className="text-sm font-medium text-white/90">A Comedy Film</span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-3 text-white">
          Blessed
        </h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-white/75 mb-6">
          The Movie
        </p>

        <p className="max-w-xl text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
          A heartfelt comedy about J-Bird, her bike rental shop, the colorful customers who roll through,
          and the unbreakable bond with her assistant Linda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button
            asChild
            size="lg"
            className="group gap-2 text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-black/30"
          >
            <a
              href={trailerHref}
              {...(TRAILER_URL
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              id={!TRAILER_URL ? "trailer" : undefined}
            >
              <PlayIcon />
              Watch Trailer
            </a>
          </Button>
          {!TRAILER_URL && (
            <p className="text-sm text-white/55 self-center">Trailer link coming soon</p>
          )}
        </div>
      </div>
    </section>
  );
}

// About the Film
function SynopsisSection() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              About the Film
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              One Summer. <br />
              <span className="text-primary">Endless Stories.</span>
            </h2>
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                At Jaybird&apos;s Bike Rental, bicycles are only the beginning. Every day, locals, tourists,
                musicians, and neighbors roll through the backyard gate, bringing with them laughter,
                unexpected adventures, and stories that could only happen in New Orleans.
              </p>
              <p>
                Through the enduring friendship of J-Bird and her assistant Linda, Blessed celebrates the
                people who create community one small act of kindness at a time. As lives intersect through
                music, neighborhood traditions, and shared experiences, strangers become friends and ordinary
                moments become unforgettable.
              </p>
              <p>
                Blessed is a heartfelt comedy that celebrates the spirit of New Orleans—its resilience,
                generosity, and joy—and reminds us that the richest journeys aren&apos;t measured in miles,
                but in the connections we make along the way.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[2/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary overflow-hidden shadow-2xl border border-border">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <FilmIcon />
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">Movie Poster</h3>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

const castMembers = [
  {
    name: "J-Bird",
    role: "Shop Owner",
    description:
      "For nearly two decades, J-Bird has welcomed neighbors and visitors through the gates of her backyard bike rental. Practical, well-read, and quietly funny, she's built far more than a business—she's created a place where stories are shared, friendships take root, and everyone is made to feel at home.",
  },
  {
    name: "Linda",
    role: "Assistant",
    description:
      "Linda is J-Bird's trusted assistant, closest friend, and greatest source of laughter. Quirky, quick-witted, and full of heart, she has an instinctive understanding of people and a gift for finding joy in every situation. Together, she and J-Bird prove that the deepest friendships aren't built on having the same background—they're built on curiosity, loyalty, and love.",
  },
  {
    name: "The Neighborhood",
    role: "Locals, Visitors & Friends",
    description:
      "Musicians, tourists, regulars, and neighbors who roll through the backyard gate—bringing laughter, unexpected adventures, and stories that could only happen in New Orleans.",
  },
];

function CastSection() {
  return (
    <section id="cast" className="py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            The People
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Cast</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            J-Bird and Linda are the heart of Blessed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {castMembers.map((member) => (
            <Card
              key={member.name}
              className="group p-6 bg-card hover:bg-secondary/50 transition-all duration-300 border-border hover:border-primary/30 hover:shadow-xl"
            >
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-secondary via-muted to-secondary mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const crewMembers = [
  {
    id: "jane",
    name: "Jane Howard",
    role: "Writer & Director",
    bio: [
      "Jane Howard is a New Orleans visual artist whose exuberant, large-scale work has delighted audiences for more than four decades. Best known for her vibrant tapestries, paintings, paper works, and immersive installations, her art has been exhibited in galleries, schools, community spaces, and cultural venues throughout New Orleans and beyond, including years as a featured artist at the Nantucket Wine Festival, exhibitions at Detroit's Cliff Bell's, and a long association with Café Brasil in New Orleans.",
      "Howard's creativity extends far beyond the gallery. She has designed theatrical sets and backdrops, created public and community art, and spent a lifetime finding beauty, humor, and connection in everyday life. While raising five children, she balanced her artistic career with a series of entrepreneurial ventures—including operating a beloved neighborhood bike rental business that ultimately inspired her first feature film, Blessed.",
    ],
  },
  {
    id: "jared",
    name: "Jared Clifford LaReau",
    role: "Director of Photography",
    bio: [
      "Jared Clifford LaReau is a New Orleans–based writer, director, cinematographer, editor, and producer. His debut feature, West of Greatness: The Story of the Westwego Muscle Boys, premiered at the Bentonville Film Festival and later won the Audience Award for Best Louisiana Feature at the New Orleans Film Festival.",
      "On Blessed, Jared served as Director of Photography and one of the film's editors. He considers Blessed a true independent arthouse film and one of the most meaningful projects of his career. Helping shape the film both visually and in the edit has made it a work he loves deeply, and he is honored to be part of bringing it to audiences.",
    ],
  },
];

function CrewSection() {
  const [active, setActive] = useState(crewMembers[0].id);
  const member = crewMembers.find((m) => m.id === active) ?? crewMembers[0];

  return (
    <section id="crew" className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Behind the Camera
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            About the <span className="text-gradient">Crew</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Crew bios">
          {crewMembers.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                active === c.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {c.name.split(" ")[0]} — {c.role.split("&")[0].trim()}
            </button>
          ))}
        </div>

        <Card className="p-8 md:p-10 max-w-4xl mx-auto border-border">
          <p className="text-primary font-medium mb-1">{member.role}</p>
          <h3 className="font-display text-3xl font-bold mb-6">{member.name}</h3>
          <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
            {member.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      label: "Bridge at night",
      aspect: "landscape" as const,
      src: "/images/hero-bridge.png",
      alt: "Purple-lit New Orleans bridge reflected in water",
    },
    { id: 2, label: "Still — coming soon", aspect: "portrait" as const, src: null, alt: "" },
    { id: 3, label: "Still — coming soon", aspect: "landscape" as const, src: null, alt: "" },
    { id: 4, label: "Still — coming soon", aspect: "square" as const, src: null, alt: "" },
    { id: 5, label: "Still — coming soon", aspect: "landscape" as const, src: null, alt: "" },
    { id: 6, label: "Still — coming soon", aspect: "portrait" as const, src: null, alt: "" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Stills
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            From the <span className="text-gradient">Film</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the world of Jaybird&apos;s Bike Rental.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-muted
                ${item.aspect === "portrait" ? "row-span-2" : ""}
                ${item.aspect === "landscape" && index === 0 ? "md:col-span-2" : ""}
              `}
            >
              <div
                className={`relative w-full
                ${item.aspect === "portrait" ? "aspect-[3/4]" : ""}
                ${item.aspect === "landscape" ? "aspect-video" : ""}
                ${item.aspect === "square" ? "aspect-square" : ""}
              `}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon />
                      <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PressSection() {
  const pressAssets = [
    { name: "Press Release", status: "Coming soon", note: "PDF" },
    { name: "Movie Poster", status: "Coming soon", note: "High-res" },
    { name: "One-pager", status: "Coming soon", note: "In progress" },
  ];

  const reviews = [
    {
      quote:
        "The escape into Jane Howard's joyful, unconventional world in New Orleans was so full of laughs and heart. What surprised me most was that it's 99% true! I'll leave it to future audiences to figure out the hilarious tongue-in-cheek 1% fiction.",
      source: "Rose Morand, Detroit Premiere",
    },
    {
      quote:
        "Blessed is a completely delightful journey into the world of J-Bird, a beloved neighborhood fixture who, along with her best friend Linda, reveals the authentic warmth and spirit of the New Orleans community and its flamboyant characters. Unfolding in a tapestry of vignettes, capers and stories, it is a truly original work that is at moments lyrical, endearing, and laugh-out-loud funny.",
      source: "Doug Green, New Orleans Premiere",
    },
    {
      quote:
        "I came to the movie having had no idea what it was about. I vaguely thought it was about a bike race. There is no way to prepare yourself for the surprise and delight of Blessed. All I can say is \"Come along for the ride.\"",
      source: "Matt Danaher, New Orleans Premiere",
    },
    {
      quote:
        "A love letter to New Orleans that left me laughing, smiling, and wanting to ride a bad-ass lighted bike through the streets of a city.",
      source: "Friend of Grace, Detroit Premiere",
    },
  ];

  return (
    <section id="press" className="py-24 bg-card relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            For Media
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Press <span className="text-gradient">Kit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to cover Blessed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Downloadable Assets</h3>
            <div className="space-y-3">
              {pressAssets.map((asset) => (
                <Card
                  key={asset.name}
                  className="p-4 flex items-center justify-between opacity-80"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <DownloadIcon />
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {asset.note} • {asset.status}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-muted-foreground border-border">
                    Soon
                  </Badge>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-display text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-4">
                For press inquiries, distribution opportunities, or general questions about the film.
              </p>
              <a
                href="mailto:press@blessedthemovie.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MailIcon />
                </div>
                <span>press@blessedthemovie.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Audience Praise</h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card
                  key={review.source}
                  className="p-6 bg-gradient-to-br from-secondary/50 to-transparent border-l-4 border-l-primary"
                >
                  <div className="flex gap-1 mb-3 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="font-display text-lg italic mb-2 leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground">— {review.source}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Blessed</h3>
            <p className="text-background/60">
              A heartfelt comedy celebrating the spirit of New Orleans.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Instagram
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Twitter
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Facebook
            </a>
          </div>
        </div>
        <Separator className="my-8 bg-background/20" />
        <div className="text-center text-sm text-background/40">
          <p>© 2026 Blessed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SynopsisSection />
      <CastSection />
      <CrewSection />
      <GallerySection />
      <PressSection />
      <Footer />
    </main>
  );
}
