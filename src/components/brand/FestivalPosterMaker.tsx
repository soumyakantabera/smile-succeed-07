import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, RefreshCw, Sparkles, Copy, Check } from "lucide-react";
import {
  festivals,
  posterFormats,
  customOccasions,
  customTaglines,
  type Festival,
} from "@/lib/festivalData";

const FestivalPosterMaker = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(festivals[0]);
  const [selectedFormat, setSelectedFormat] = useState(posterFormats[0]);
  const [selectedTagline, setSelectedTagline] = useState(festivals[0].taglines[0]);
  const [selectedGreeting, setSelectedGreeting] = useState(festivals[0].greetings[0]);
  const [customText, setCustomText] = useState("");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [address, setAddress] = useState("Behala, Kolkata");
  const [copiedTagline, setCopiedTagline] = useState<string | null>(null);
  
  // Custom occasion state
  const [selectedOccasion, setSelectedOccasion] = useState(customOccasions[0]);
  const [occasionTagline, setOccasionTagline] = useState(customTaglines["admission"][0]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFestivalChange = (festivalId: string) => {
    const festival = festivals.find((f) => f.id === festivalId);
    if (festival) {
      setSelectedFestival(festival);
      setSelectedTagline(festival.taglines[0]);
      setSelectedGreeting(festival.greetings[0]);
    }
  };

  const handleOccasionChange = (occasionId: string) => {
    const occasion = customOccasions.find((o) => o.id === occasionId);
    if (occasion) {
      setSelectedOccasion(occasion);
      setOccasionTagline(customTaglines[occasionId]?.[0] || "");
    }
  };

  const shuffleTagline = () => {
    const currentIndex = selectedFestival.taglines.indexOf(selectedTagline);
    const nextIndex = (currentIndex + 1) % selectedFestival.taglines.length;
    setSelectedTagline(selectedFestival.taglines[nextIndex]);
  };

  const shuffleOccasionTagline = () => {
    const taglines = customTaglines[selectedOccasion.id] || [];
    const currentIndex = taglines.indexOf(occasionTagline);
    const nextIndex = (currentIndex + 1) % taglines.length;
    setOccasionTagline(taglines[nextIndex]);
  };

  const copyTagline = (tagline: string) => {
    navigator.clipboard.writeText(tagline);
    setCopiedTagline(tagline);
    setTimeout(() => setCopiedTagline(null), 2000);
  };

  const generatePoster = (type: "festival" | "occasion") => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = selectedFormat;
    canvas.width = width;
    canvas.height = height;

    const colors = type === "festival" 
      ? selectedFestival.colors 
      : { primary: "#3AAFA9", secondary: "#F97316", accent: "#2B7A78", text: "#FFFFFF" };

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors.primary);
    gradient.addColorStop(1, colors.secondary);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative elements
    ctx.fillStyle = colors.accent + "40";
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 50 + 10;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Top banner
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fillRect(0, 0, width, height * 0.15);

    // Logo area
    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold ${width * 0.05}px system-ui`;
    ctx.textAlign = "center";
    ctx.fillText("Learn With Smile", width / 2, height * 0.08);
    
    ctx.font = `${width * 0.02}px system-ui`;
    ctx.fillText("ENGLISH ACADEMY", width / 2, height * 0.12);

    // Festival/Occasion emoji and name
    const emoji = type === "festival" ? selectedFestival.emoji : selectedOccasion.emoji;
    const name = type === "festival" ? selectedFestival.name : selectedOccasion.name;
    
    ctx.font = `${width * 0.15}px system-ui`;
    ctx.fillText(emoji, width / 2, height * 0.35);

    ctx.fillStyle = colors.text;
    ctx.font = `bold ${width * 0.08}px system-ui`;
    ctx.fillText(name.toUpperCase(), width / 2, height * 0.48);

    // Main tagline
    const tagline = type === "festival" ? selectedTagline : occasionTagline;
    ctx.font = `bold ${width * 0.045}px system-ui`;
    ctx.fillStyle = "#FFFFFF";
    
    // Word wrap for tagline
    const words = tagline.split(" ");
    let line = "";
    let y = height * 0.58;
    const maxWidth = width * 0.8;
    const lineHeight = width * 0.06;

    for (const word of words) {
      const testLine = line + word + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== "") {
        ctx.fillText(line.trim(), width / 2, y);
        line = word + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), width / 2, y);

    // Greeting (festival only)
    if (type === "festival") {
      ctx.font = `italic ${width * 0.03}px system-ui`;
      ctx.fillStyle = colors.accent;
      ctx.fillText(selectedGreeting, width / 2, height * 0.75);
    }

    // Custom text
    if (customText) {
      ctx.font = `${width * 0.025}px system-ui`;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(customText, width / 2, height * 0.82);
    }

    // Bottom banner with contact
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, height * 0.85, width, height * 0.15);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold ${width * 0.025}px system-ui`;
    ctx.fillText(`📞 ${phone}`, width / 2, height * 0.92);
    ctx.font = `${width * 0.02}px system-ui`;
    ctx.fillText(`📍 ${address}`, width / 2, height * 0.97);

    // Download
    const link = document.createElement("a");
    link.download = `lws-${type === "festival" ? selectedFestival.id : selectedOccasion.id}-${selectedFormat.id}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="festival" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="festival">🎉 Festival Posters</TabsTrigger>
          <TabsTrigger value="occasion">📢 Promotional Posters</TabsTrigger>
        </TabsList>

        <TabsContent value="festival" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Festival Poster Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Festival Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Festival</Label>
                  <Select
                    value={selectedFestival.id}
                    onValueChange={handleFestivalChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {festivals.map((festival) => (
                        <SelectItem key={festival.id} value={festival.id}>
                          {festival.emoji} {festival.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Poster Format</Label>
                  <Select
                    value={selectedFormat.id}
                    onValueChange={(id) => {
                      const format = posterFormats.find((f) => f.id === id);
                      if (format) setSelectedFormat(format);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {posterFormats.map((format) => (
                        <SelectItem key={format.id} value={format.id}>
                          {format.name} ({format.width}x{format.height})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tagline Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Catchy Tagline</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shuffleTagline}
                    className="gap-1"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Shuffle
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedFestival.taglines.map((tagline) => (
                    <Badge
                      key={tagline}
                      variant={selectedTagline === tagline ? "default" : "outline"}
                      className="cursor-pointer py-2 px-3"
                      onClick={() => setSelectedTagline(tagline)}
                    >
                      {tagline}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Greeting Selection */}
              <div className="space-y-3">
                <Label>Greeting Message</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedFestival.greetings.map((greeting) => (
                    <Badge
                      key={greeting}
                      variant={selectedGreeting === greeting ? "default" : "outline"}
                      className="cursor-pointer py-2 px-3"
                      onClick={() => setSelectedGreeting(greeting)}
                    >
                      {greeting}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Custom Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Behala, Kolkata"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Custom Text (Optional)</Label>
                <Textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Add any custom message, offer, or details..."
                  rows={2}
                />
              </div>

              {/* Preview Colors */}
              <div className="space-y-2">
                <Label>Festival Theme Colors</Label>
                <div className="flex gap-2">
                  {Object.entries(selectedFestival.colors).map(([key, color]) => (
                    <div
                      key={key}
                      className="flex items-center gap-1"
                    >
                      <div
                        className="w-8 h-8 rounded border"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-muted-foreground capitalize">
                        {key}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => generatePoster("festival")}
                className="w-full gap-2"
                size="lg"
              >
                <Download className="h-4 w-4" />
                Generate & Download Poster
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occasion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Promotional Poster Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Occasion Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Occasion</Label>
                  <Select
                    value={selectedOccasion.id}
                    onValueChange={handleOccasionChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {customOccasions.map((occasion) => (
                        <SelectItem key={occasion.id} value={occasion.id}>
                          {occasion.emoji} {occasion.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Poster Format</Label>
                  <Select
                    value={selectedFormat.id}
                    onValueChange={(id) => {
                      const format = posterFormats.find((f) => f.id === id);
                      if (format) setSelectedFormat(format);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {posterFormats.map((format) => (
                        <SelectItem key={format.id} value={format.id}>
                          {format.name} ({format.width}x{format.height})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tagline Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Catchy Tagline</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shuffleOccasionTagline}
                    className="gap-1"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Shuffle
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(customTaglines[selectedOccasion.id] || []).map((tagline) => (
                    <Badge
                      key={tagline}
                      variant={occasionTagline === tagline ? "default" : "outline"}
                      className="cursor-pointer py-2 px-3"
                      onClick={() => setOccasionTagline(tagline)}
                    >
                      {tagline}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Custom Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Behala, Kolkata"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Custom Text (Optional)</Label>
                <Textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Add any custom message, offer, or details..."
                  rows={2}
                />
              </div>

              <Button
                onClick={() => generatePoster("occasion")}
                className="w-full gap-2"
                size="lg"
              >
                <Download className="h-4 w-4" />
                Generate & Download Poster
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Tagline Library */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            Catchy Tagline Library
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {festivals.slice(0, 6).map((festival) => (
              <div key={festival.id} className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  {festival.emoji} {festival.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {festival.taglines.slice(0, 3).map((tagline) => (
                    <Badge
                      key={tagline}
                      variant="outline"
                      className="cursor-pointer py-2 px-3 hover:bg-accent/10"
                      onClick={() => copyTagline(tagline)}
                    >
                      {tagline}
                      {copiedTagline === tagline ? (
                        <Check className="h-3 w-3 ml-1 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3 ml-1 opacity-50" />
                      )}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hidden canvas for generation */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default FestivalPosterMaker;
