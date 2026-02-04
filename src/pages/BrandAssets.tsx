import Layout from "@/components/layout/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BrandAssets = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const brandColors = [
    { name: "Primary (Teal)", hex: "#0D9488", hsl: "175 84% 32%", variable: "--primary" },
    { name: "Accent (Orange)", hex: "#F97316", hsl: "25 95% 53%", variable: "--accent" },
    { name: "Background", hex: "#FFFFFF", hsl: "0 0% 100%", variable: "--background" },
    { name: "Foreground", hex: "#1A1A2E", hsl: "240 27% 14%", variable: "--foreground" },
    { name: "Muted", hex: "#F1F5F9", hsl: "210 40% 96%", variable: "--muted" },
  ];

  const typography = [
    { name: "Headings", font: "Sora", weights: "600, 700", usage: "H1–H6, Display text" },
    { name: "Body", font: "Manrope", weights: "400, 500, 600", usage: "Paragraphs, UI text" },
  ];

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Brand Assets
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Official brand guidelines and assets for Learn With Smile. Use these resources to maintain consistency across all communications.
            </p>
          </AnimatedSection>

          {/* Logo Section */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Logo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Logo */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="bg-background rounded-xl p-8 flex items-center justify-center mb-4 min-h-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative">
                      <span className="text-primary-foreground font-heading font-bold text-lg">LWS</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-accent rounded-full" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-xl text-foreground">LEARN WITH</span>
                      <span className="font-heading font-bold text-xl text-accent ml-1">SMILE</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Primary Logo</h3>
                <p className="text-muted-foreground text-sm">Use on light backgrounds. Maintain clear space around the logo equal to the height of the monogram.</p>
              </div>

              {/* Dark Background Logo */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="bg-foreground rounded-xl p-8 flex items-center justify-center mb-4 min-h-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative">
                      <span className="text-primary-foreground font-heading font-bold text-lg">LWS</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-accent rounded-full" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-xl text-background">LEARN WITH</span>
                      <span className="font-heading font-bold text-xl text-accent ml-1">SMILE</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Logo on Dark</h3>
                <p className="text-muted-foreground text-sm">Use on dark backgrounds. The wordmark uses white text while accent color remains orange.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Colors Section */}
          <AnimatedSection animation="fade-up" delay={200} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Brand Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div 
                    className="h-24 w-full" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{color.name}</h3>
                    <button
                      onClick={() => copyToClipboard(color.hex, color.name)}
                      className="flex items-center gap-2 text-muted-foreground text-xs hover:text-foreground transition-colors w-full"
                    >
                      {copiedColor === color.name ? (
                        <Check className="w-3 h-3 text-success" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      {color.hex}
                    </button>
                    <p className="text-muted-foreground text-xs mt-1">HSL: {color.hsl}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Typography Section */}
          <AnimatedSection animation="fade-up" delay={300} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Typography</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {typography.map((type) => (
                <div key={type.name} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="mb-6">
                    <span 
                      className={`text-4xl ${type.name === "Headings" ? "font-heading font-bold" : "font-sans"} text-foreground`}
                    >
                      Aa Bb Cc
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{type.font}</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    <strong>Usage:</strong> {type.usage}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Weights:</strong> {type.weights}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Usage Guidelines */}
          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Usage Guidelines</h2>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-success mb-3">✓ Do</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Use official brand colors consistently</li>
                    <li>• Maintain clear space around the logo</li>
                    <li>• Use Sora for headings and Manrope for body text</li>
                    <li>• Keep the orange smile element visible</li>
                    <li>• Use high contrast for accessibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-destructive mb-3">✗ Don't</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Stretch or distort the logo</li>
                    <li>• Change brand colors without approval</li>
                    <li>• Place logo on busy backgrounds</li>
                    <li>• Use low-resolution logo files</li>
                    <li>• Remove or alter the smile element</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default BrandAssets;
