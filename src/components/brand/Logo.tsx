import { forwardRef } from "react";

interface LogoProps {
  size?: number;
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  className?: string;
  id?: string;
}

export const LogoIcon = forwardRef<SVGSVGElement, { size?: number; className?: string; id?: string }>(
  ({ size = 56, className = "", id = "logo" }, ref) => (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3AAFA9" />
          <stop offset="100%" stopColor="#2B7A78" />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="48" height="48" rx="14" fill={`url(#${id}-bg)`} />
      <text x="28" y="33" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="800" fill="white" letterSpacing="-0.5">
        LWS
      </text>
      <path d="M16 38 Q28 46 40 38" stroke={`url(#${id}-accent)`} strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="46" cy="10" r="3" fill="#FCD34D" opacity="0.9" />
      <circle cx="10" cy="46" r="2" fill="#FCD34D" opacity="0.7" />
    </svg>
  )
);

LogoIcon.displayName = "LogoIcon";

export const LogoFull = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = 200, theme = "light", className = "", id = "logo-full" }, ref) => {
    const textColor = theme === "light" ? "#1A1A2E" : "#FFFFFF";
    const accentColor = "#F97316";
    
    return (
      <svg
        ref={ref}
        className={className}
        width={size}
        height={size * 0.4}
        viewBox="0 0 300 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3AAFA9" />
            <stop offset="100%" stopColor="#2B7A78" />
          </linearGradient>
          <linearGradient id={`${id}-accent`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>
        {/* Icon */}
        <rect x="10" y="20" width="80" height="80" rx="22" fill={`url(#${id}-bg)`} />
        <text x="50" y="68" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="800" fill="white" letterSpacing="-0.5">
          LWS
        </text>
        <path d="M25 78 Q50 92 75 78" stroke={`url(#${id}-accent)`} strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <circle cx="82" cy="28" r="5" fill="#FCD34D" opacity="0.9" />
        <circle cx="18" cy="92" r="3.5" fill="#FCD34D" opacity="0.7" />
        {/* Text */}
        <text x="110" y="55" fontFamily="system-ui, sans-serif" fontSize="26" fontWeight="700" fill={textColor}>
          Learn With
        </text>
        <text x="110" y="85" fontFamily="system-ui, sans-serif" fontSize="26" fontWeight="700" fill={accentColor}>
          Smile
        </text>
        <text x="110" y="105" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill={theme === "light" ? "#64748B" : "#94A3B8"} letterSpacing="2">
          ENGLISH ACADEMY
        </text>
      </svg>
    );
  }
);

LogoFull.displayName = "LogoFull";

// Helper function to convert SVG element to data URL
export const svgToDataUrl = (svgElement: SVGSVGElement): string => {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  const encodedData = encodeURIComponent(svgString);
  return `data:image/svg+xml;charset=utf-8,${encodedData}`;
};

// Helper function to download SVG
export const downloadSvg = (svgElement: SVGSVGElement, filename: string): void => {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Helper function to download PNG
export const downloadPng = (svgElement: SVGSVGElement, filename: string, scale: number = 4): void => {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  
  if (!ctx) return;
  
  const img = new Image();
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  
  img.onload = () => {
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0);
    
    canvas.toBlob((blob) => {
      if (blob) {
        const pngUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
      }
    }, "image/png");
    
    URL.revokeObjectURL(url);
  };
  
  img.src = url;
};
