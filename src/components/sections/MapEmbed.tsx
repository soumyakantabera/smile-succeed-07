import { MapPin, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

interface MapEmbedProps {
  showFullMap?: boolean;
}

const MapEmbed = ({ showFullMap = false }: MapEmbedProps) => {
  return (
    <section className={`${showFullMap ? "" : "section-padding"} bg-card`}>
      <div className={showFullMap ? "" : "container-custom"}>
        {!showFullMap && (
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Visit Our Kolkata Center
            </h2>
            <p className="text-muted-foreground">
              Join us for offline classes at our convenient location
            </p>
          </div>
        )}

        <div className={`${showFullMap ? "" : "rounded-2xl overflow-hidden border border-border"}`}>
          {/* Map Embed */}
          <div className={`relative ${showFullMap ? "h-[400px]" : "h-[300px]"}`}>
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LEARN WITH SMILE Location"
              className="absolute inset-0"
            />
          </div>

          {/* Action Buttons */}
          <div className="bg-background p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-foreground">
                  <strong>{BUSINESS_INFO.name}</strong><br />
                  {BUSINESS_INFO.address.full}
                </address>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </Button>
                </a>
                <a
                  href={BUSINESS_INFO.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View on Google
                  </Button>
                </a>
                <a
                  href={BUSINESS_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <Star className="w-4 h-4" />
                    Leave a Review
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapEmbed;
