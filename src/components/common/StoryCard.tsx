import React from "react";
import Image from "next/image";
import type { Story } from "@/lib/types";
import { Quote, MapPin } from "lucide-react";

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="bg-white rounded-card border border-line overflow-hidden shadow-subtle hover:shadow-card card-lift flex flex-col justify-between">
      <div>
        {/* Story Illustration / Image */}
        <div className="relative w-full h-48 bg-ink-900">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-ink-900/90 backdrop-blur-sm text-accent-500 text-xs font-bold px-2.5 py-1 rounded">
            {story.tag}
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-ink-900/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded">
            <MapPin className="w-3.5 h-3.5 text-accent-500" />
            <span>{story.location}</span>
          </div>
        </div>

        {/* Story Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-ink-900 mb-3 font-heading leading-snug">
            {story.title}
          </h3>

          <blockquote className="relative pl-4 border-l-2 border-accent-500 my-4 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </blockquote>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {story.summary}
          </p>
        </div>
      </div>

      {/* Author & Metrics Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-line/60 flex items-center justify-between text-xs">
        <div>
          <strong className="text-ink-900 block font-heading">{story.author}</strong>
          <span className="text-slate-500">{story.role}</span>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded block">
            {story.metrics.split("•")[0]?.trim()}
          </span>
        </div>
      </div>
    </div>
  );
};
