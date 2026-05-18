"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/tonylombardi?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=f0ede8&primary_color=C8A96E"
      style={{
        minWidth: "320px",
        height: "700px",
        border: "0.5px solid rgba(240,237,232,0.08)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    />
  );
}