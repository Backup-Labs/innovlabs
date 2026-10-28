import React from "react";
import Image from "next/image";
import type { Story } from "@/lib/types";
import { MapPin, Sparkles } from "lucide-react";

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="glass-panel rounded-card border border-white/10 overflow-hidden shadow-cyberCard glass-card-interactive flex flex-col justify-between group">
      <div>
        {/* Story Illustration Header */}
        <div className="relative w-full h-48 bg-ink-950">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3 bg-ink-950/85 backdrop-blur-md text-emerald-400 text-[11px] font-mono font-bold px-2.5 py-1 rounded border border-emerald-500/30">
            {story.tag}
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-ink-950/85 backdrop-blur-md text-slate-300 text-xs font-mono px-2.5 py-1 rounded border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-accent-500" />
            <span>{story.location}</span>
          </div>
        </div>

        {/* Story Content */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-heading leading-snug tracking-tight group-hover:text-emerald-300 transition-colors">
            {story.title}
          </h3>

          <blockquote className="relative pl-4 border-l-2 border-accent-500 my-4 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </blockquote>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            {story.summary}
          </p>
        </div>
      </div>

      {/* Author & Metrics Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
        <div>
          <strong className="text-white block font-heading tracking-tight">{story.author}</strong>
          <span className="text-slate-400 text-[11px] font-mono">{story.role}</span>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded block">
            {story.metrics.split("•")[0]?.trim()}
          </span>
        </div>
      </div>
    </div>
  );
};
