import Layout from "@/components/layout/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Download, Copy, Check, Palette, Type, FileImage, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { LogoIcon, LogoFull, downloadSvg, downloadPng } from "@/components/brand/Logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FestivalPosterMaker from "@/components/brand/FestivalPosterMaker";

const BrandAssets = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [kitConfig, setKitConfig] = useState({
    tagline: "Master English. Accelerate Your Career.",
    phone: "+91 98765 43210",
    website: "learnwithsmile.app",
    address: "South Kolkata, West Bengal"
  });
  
  const logoIconLightRef = useRef<SVGSVGElement>(null);
  const logoIconDarkRef = useRef<SVGSVGElement>(null);
  const logoFullLightRef = useRef<SVGSVGElement>(null);
  const logoFullDarkRef = useRef<SVGSVGElement>(null);

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleDownloadSvg = (ref: React.RefObject<SVGSVGElement>, filename: string) => {
    if (ref.current) {
      downloadSvg(ref.current, filename);
    }
  };

  const handleDownloadPng = (ref: React.RefObject<SVGSVGElement>, filename: string) => {
    if (ref.current) {
      downloadPng(ref.current, filename);
    }
  };

  const brandColors = [
    { name: "Primary (Teal)", hex: "#3AAFA9", hsl: "177 50% 45%", variable: "--primary" },
    { name: "Accent (Orange)", hex: "#F97316", hsl: "25 95% 53%", variable: "--accent" },
    { name: "Background", hex: "#FFFFFF", hsl: "0 0% 100%", variable: "--background" },
    { name: "Foreground", hex: "#1A1A2E", hsl: "240 27% 14%", variable: "--foreground" },
    { name: "Muted", hex: "#F1F5F9", hsl: "210 40% 96%", variable: "--muted" },
  ];

  const typography = [
    { name: "Headings", font: "Sora", weights: "600, 700", usage: "H1–H6, Display text" },
    { name: "Body", font: "Manrope", weights: "400, 500, 600", usage: "Paragraphs, UI text" },
  ];

  const generateBusinessCard = () => {
    const cardSvg = `
<svg width="350" height="200" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3AAFA9"/>
      <stop offset="100%" stop-color="#2B7A78"/>
    </linearGradient>
  </defs>
  <rect width="350" height="200" fill="white"/>
  <rect x="0" y="0" width="350" height="6" fill="url(#card-bg)"/>
  <rect x="20" y="30" width="50" height="50" rx="12" fill="url(#card-bg)"/>
  <text x="45" y="62" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="white">LWS</text>
  <text x="85" y="50" font-family="system-ui" font-size="18" font-weight="700" fill="#1A1A2E">Learn With Smile</text>
  <text x="85" y="68" font-family="system-ui" font-size="10" font-weight="500" fill="#64748B" letter-spacing="1.5">ENGLISH ACADEMY</text>
  <text x="20" y="110" font-family="system-ui" font-size="11" fill="#64748B">${kitConfig.tagline}</text>
  <text x="20" y="145" font-family="system-ui" font-size="11" fill="#1A1A2E">📞 ${kitConfig.phone}</text>
  <text x="20" y="165" font-family="system-ui" font-size="11" fill="#1A1A2E">🌐 ${kitConfig.website}</text>
  <text x="20" y="185" font-family="system-ui" font-size="11" fill="#1A1A2E">📍 ${kitConfig.address}</text>
</svg>`;
    
    const blob = new Blob([cardSvg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lws-business-card.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateSocialBanner = () => {
    const bannerSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="banner-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3AAFA9"/>
      <stop offset="100%" stop-color="#2B7A78"/>
    </linearGradient>
    <linearGradient id="banner-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#FBBF24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#banner-bg)"/>
  <circle cx="1100" cy="100" r="200" fill="white" opacity="0.05"/>
  <circle cx="100" cy="530" r="150" fill="white" opacity="0.05"/>
  <rect x="80" y="200" width="140" height="140" rx="35" fill="white" opacity="0.95"/>
  <text x="150" y="285" text-anchor="middle" font-family="system-ui" font-size="48" font-weight="800" fill="#3AAFA9">LWS</text>
  <path d="M105 305 Q150 330 195 305" stroke="url(#banner-accent)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <text x="260" y="260" font-family="system-ui" font-size="56" font-weight="700" fill="white">Learn With Smile</text>
  <text x="260" y="320" font-family="system-ui" font-size="18" font-weight="500" fill="white" opacity="0.8" letter-spacing="4">ENGLISH ACADEMY</text>
  <text x="80" y="430" font-family="system-ui" font-size="32" fill="white" opacity="0.95">${kitConfig.tagline}</text>
  <text x="80" y="520" font-family="system-ui" font-size="22" fill="white" opacity="0.8">🌐 ${kitConfig.website}</text>
  <text x="80" y="560" font-family="system-ui" font-size="22" fill="white" opacity="0.8">📞 ${kitConfig.phone}</text>
</svg>`;
    
    const blob = new Blob([bannerSvg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lws-social-banner.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateEmailSignature = () => {
    const signatureHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
<table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #1A1A2E;">
  <tr>
    <td style="padding-right: 20px; border-right: 3px solid #3AAFA9;">
      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3AAFA9, #2B7A78); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
        <span style="color: white; font-weight: 800; font-size: 20px;">LWS</span>
      </div>
    </td>
    <td style="padding-left: 20px;">
      <div style="font-weight: 700; font-size: 16px; color: #1A1A2E;">Learn With Smile</div>
      <div style="font-size: 11px; color: #64748B; letter-spacing: 1.5px; margin-top: 2px;">ENGLISH ACADEMY</div>
      <div style="margin-top: 10px; font-size: 13px; color: #64748B;">${kitConfig.tagline}</div>
      <div style="margin-top: 8px;">
        <span style="color: #3AAFA9;">📞</span> ${kitConfig.phone}<br>
        <span style="color: #3AAFA9;">🌐</span> ${kitConfig.website}<br>
        <span style="color: #3AAFA9;">📍</span> ${kitConfig.address}
      </div>
    </td>
  </tr>
</table>
</body>
</html>`;
    
    const blob = new Blob([signatureHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lws-email-signature.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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

          {/* Logo Downloads Section */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FileImage className="w-6 h-6 text-primary" />
              Logo Downloads
            </h2>
            
            {/* Icon Logos */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Icon on Light */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="bg-background rounded-xl p-8 flex items-center justify-center mb-4 min-h-[200px] border border-border/50">
                  <LogoIcon ref={logoIconLightRef} size={120} id="icon-light" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Icon Logo (Light)</h3>
                <p className="text-muted-foreground text-sm mb-4">Square icon for favicons, app icons, and social profiles.</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadSvg(logoIconLightRef, "lws-icon.svg")}
                  >
                    <Download className="w-4 h-4" />
                    SVG
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadPng(logoIconLightRef, "lws-icon.png")}
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                </div>
              </div>

              {/* Icon on Dark */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="bg-foreground rounded-xl p-8 flex items-center justify-center mb-4 min-h-[200px]">
                  <LogoIcon ref={logoIconDarkRef} size={120} id="icon-dark" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Icon Logo (Dark)</h3>
                <p className="text-muted-foreground text-sm mb-4">Same icon works perfectly on dark backgrounds.</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadSvg(logoIconDarkRef, "lws-icon-dark.svg")}
                  >
                    <Download className="w-4 h-4" />
                    SVG
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadPng(logoIconDarkRef, "lws-icon-dark.png")}
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                </div>
              </div>
            </div>

            {/* Full Logos */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Logo Light */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="bg-background rounded-xl p-8 flex items-center justify-center mb-4 min-h-[180px] border border-border/50">
                  <LogoFull ref={logoFullLightRef} size={280} theme="light" id="full-light" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Full Logo (Light)</h3>
                <p className="text-muted-foreground text-sm mb-4">Primary horizontal logo for headers and marketing.</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadSvg(logoFullLightRef, "lws-logo-full.svg")}
                  >
                    <Download className="w-4 h-4" />
                    SVG
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadPng(logoFullLightRef, "lws-logo-full.png")}
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                </div>
              </div>

              {/* Full Logo Dark */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="bg-foreground rounded-xl p-8 flex items-center justify-center mb-4 min-h-[180px]">
                  <LogoFull ref={logoFullDarkRef} size={280} theme="dark" id="full-dark" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Full Logo (Dark)</h3>
                <p className="text-muted-foreground text-sm mb-4">Use on dark backgrounds with white text.</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadSvg(logoFullDarkRef, "lws-logo-full-dark.svg")}
                  >
                    <Download className="w-4 h-4" />
                    SVG
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownloadPng(logoFullDarkRef, "lws-logo-full-dark.png")}
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Marketing Kit Generator */}
          <AnimatedSection animation="fade-up" delay={150} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              Marketing Kit Generator
            </h2>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground mb-6">
                Customize your marketing materials with your contact details. Generate ready-to-use assets instantly.
              </p>
              
              {/* Configuration Form */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={kitConfig.tagline}
                      onChange={(e) => setKitConfig({ ...kitConfig, tagline: e.target.value })}
                      placeholder="Your tagline"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={kitConfig.phone}
                      onChange={(e) => setKitConfig({ ...kitConfig, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={kitConfig.website}
                      onChange={(e) => setKitConfig({ ...kitConfig, website: e.target.value })}
                      placeholder="yourwebsite.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={kitConfig.address}
                      onChange={(e) => setKitConfig({ ...kitConfig, address: e.target.value })}
                      placeholder="Your location"
                    />
                  </div>
                </div>
              </div>

              {/* Generator Buttons */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileImage className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Business Card</h4>
                      <p className="text-xs text-muted-foreground">350×200px SVG</p>
                    </div>
                  </div>
                  <Button className="w-full gap-2" onClick={generateBusinessCard}>
                    <Download className="w-4 h-4" />
                    Generate
                  </Button>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileImage className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Social Banner</h4>
                      <p className="text-xs text-muted-foreground">1200×630px SVG</p>
                    </div>
                  </div>
                  <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={generateSocialBanner}>
                    <Download className="w-4 h-4" />
                    Generate
                  </Button>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Type className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Email Signature</h4>
                      <p className="text-xs text-muted-foreground">HTML format</p>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full gap-2" onClick={generateEmailSignature}>
                    <Download className="w-4 h-4" />
                    Generate
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Festival Poster Maker */}
          <AnimatedSection animation="fade-up" delay={175} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              Advanced Poster & Marketing Kit
            </h2>
            <FestivalPosterMaker />
          </AnimatedSection>

          {/* Colors Section */}
          <AnimatedSection animation="fade-up" delay={200} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Palette className="w-6 h-6 text-primary" />
              Brand Colors
            </h2>
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
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Type className="w-6 h-6 text-primary" />
              Typography
            </h2>
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
