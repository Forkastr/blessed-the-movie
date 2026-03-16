"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    { label: "Synopsis", href: "#synopsis" },
    { label: "Cast & Crew", href: "#cast" },
    { label: "Gallery", href: "#gallery" },
    { label: "Press", href: "#press" },
    { label: "Watch", href: "#watch" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary">Blessed</span>
            <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">The Movie</span>
          </a>

          {/* Desktop Nav */}
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

          {/* Mobile menu button */}
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

        {/* Mobile Nav */}
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

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Movie badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <BikeIcon />
          <span className="text-sm font-medium text-primary">A Comedy Film</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Blessed</span>
        </h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-muted-foreground mb-4">
          The Movie
        </p>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 mb-10 leading-relaxed">
          A heartfelt comedy about Jaybird, her bike rental shop, the colorful customers who roll through,
          and the unbreakable bond with her assistant Linda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group gap-2 text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
            <PlayIcon />
            Watch Trailer
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary">
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Synopsis Section
function SynopsisSection() {
  return (
    <section id="synopsis" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
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
                At Jaybird's Bike Rental, every day brings a new adventure. From the early morning regulars
                to the chaotic weekend crowds, owner Jaybird has seen it all in her decades behind the counter.
              </p>
              <p>
                But this summer is different. With her loyal assistant Linda by her side, Jaybird must navigate
                increasingly eccentric customers, a surprise health inspection, and the looming threat of a
                corporate bike-share moving in next door.
              </p>
              <p>
                <strong className="text-foreground">Blessed - The Movie</strong> is a warm, laugh-out-loud
                celebration of small business, unlikely friendships, and the simple joy of a bike ride on a summer day.
              </p>
            </div>

            {/* Film details */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Runtime</p>
                <p className="text-lg font-semibold">98 minutes</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div>
                <p className="text-sm text-muted-foreground">Genre</p>
                <p className="text-lg font-semibold">Comedy</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="text-lg font-semibold">PG-13</p>
              </div>
            </div>
          </div>

          {/* Poster placeholder */}
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
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Cast data
const castMembers = [
  {
    name: "Jaybird",
    role: "Shop Owner",
    description: "The heart and soul of the bike rental. Tough exterior, heart of gold.",
    image: null,
  },
  {
    name: "Linda",
    role: "Assistant",
    description: "Jaybird's right hand and the only one who truly gets her.",
    image: null,
  },
  {
    name: "Various Customers",
    role: "The Regulars",
    description: "A rotating cast of hilarious, heartwarming, and occasionally exasperating visitors.",
    image: null,
  },
];

// Cast Section
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
            The unforgettable characters who bring Jaybird's Bike Rental to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {castMembers.map((member, index) => (
            <Card key={member.name} className="group p-6 bg-card hover:bg-secondary/50 transition-all duration-300 border-border hover:border-primary/30 hover:shadow-xl">
              {/* Photo placeholder */}
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-secondary via-muted to-secondary mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </Card>
          ))}
        </div>

        {/* Crew section */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-2xl font-bold mb-8">Behind the Camera</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Directed by</p>
              <p className="font-semibold text-lg">Director Name</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Written by</p>
              <p className="font-semibold text-lg">Writer Name</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Produced by</p>
              <p className="font-semibold text-lg">Producer Name</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Music by</p>
              <p className="font-semibold text-lg">Composer Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const galleryItems = [
    { id: 1, label: "Scene 1", aspect: "landscape" },
    { id: 2, label: "Scene 2", aspect: "portrait" },
    { id: 3, label: "Scene 3", aspect: "landscape" },
    { id: 4, label: "Scene 4", aspect: "square" },
    { id: 5, label: "Scene 5", aspect: "landscape" },
    { id: 6, label: "Scene 6", aspect: "portrait" },
  ];

  return (
    <section id="gallery" className="py-24 bg-card relative overflow-hidden">
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
            A glimpse into the world of Jaybird's Bike Rental.
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-muted cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all
                ${item.aspect === "portrait" ? "row-span-2" : ""}
                ${item.aspect === "landscape" && index === 0 ? "md:col-span-2" : ""}
              `}
            >
              <div className={`
                ${item.aspect === "portrait" ? "aspect-[3/4]" : ""}
                ${item.aspect === "landscape" ? "aspect-video" : ""}
                ${item.aspect === "square" ? "aspect-square" : ""}
                ${!item.aspect ? "aspect-video" : ""}
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon />
                    <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Press Kit Section
function PressSection() {
  const pressAssets = [
    { name: "Press Release", type: "PDF", size: "245 KB" },
    { name: "Movie Poster (High-Res)", type: "JPG", size: "4.2 MB" },
    { name: "Production Stills Package", type: "ZIP", size: "28 MB" },
    { name: "Cast Headshots", type: "ZIP", size: "12 MB" },
    { name: "Logo Package", type: "ZIP", size: "1.8 MB" },
    { name: "One-Sheet", type: "PDF", size: "890 KB" },
  ];

  const reviews = [
    { quote: "A delightful summer gem that reminds us what indie comedy can be.", source: "Film Review Weekly" },
    { quote: "Blessed is pure joy on wheels.", source: "Cinema Today" },
    { quote: "The chemistry between the leads is absolutely magnetic.", source: "Indie Film Digest" },
  ];

  return (
    <section id="press" className="py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            For Media
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Press <span className="text-gradient">Kit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to cover Blessed - The Movie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Downloads */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Downloadable Assets</h3>
            <div className="space-y-3">
              {pressAssets.map((asset) => (
                <Card key={asset.name} className="p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <DownloadIcon />
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-muted-foreground">{asset.type} • {asset.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Download
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Reviews & Technical Info */}
          <div className="space-y-8">
            {/* Reviews */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Critical Acclaim</h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-secondary/50 to-transparent border-l-4 border-l-primary">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="font-display text-lg italic mb-2">"{review.quote}"</p>
                    <p className="text-sm text-muted-foreground">— {review.source}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Specs */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Technical Specifications</h3>
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Format</p>
                    <p className="font-medium">Digital / DCP</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Aspect Ratio</p>
                    <p className="font-medium">2.39:1</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Sound</p>
                    <p className="font-medium">5.1 Surround</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Language</p>
                    <p className="font-medium">English</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Country</p>
                    <p className="font-medium">United States</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Year</p>
                    <p className="font-medium">2026</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Watch/Contact Section
function WatchSection() {
  return (
    <section id="watch" className="py-24 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Experience It
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Watch <span className="text-gradient">Blessed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find where to stream, rent, or purchase the film.
          </p>
        </div>

        {/* Streaming platforms placeholder */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {["Platform 1", "Platform 2", "Platform 3", "Platform 4"].map((platform) => (
            <Card key={platform} className="p-6 text-center hover:bg-secondary/50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <FilmIcon />
              </div>
              <p className="font-medium">{platform}</p>
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </Card>
          ))}
        </div>

        <Separator className="mb-16" />

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              For press inquiries, distribution opportunities, or general questions about the film.
            </p>
            <div className="space-y-4">
              <a href="mailto:press@blessedthemovie.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MailIcon />
                </div>
                <span>press@blessedthemovie.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Sign up for news about screenings, releases, and more.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              <Button className="px-6 rounded-lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Blessed - The Movie</h3>
            <p className="text-background/60">A comedy about bikes, friendship, and the customers in between.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors">Instagram</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Twitter</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Facebook</a>
          </div>
        </div>
        <Separator className="my-8 bg-background/20" />
        <div className="text-center text-sm text-background/40">
          <p>© 2026 Blessed - The Movie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SynopsisSection />
      <CastSection />
      <GallerySection />
      <PressSection />
      <WatchSection />
      <Footer />
    </main>
  );
}
