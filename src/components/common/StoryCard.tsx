import React from "react";
import Image from "next/image";
import type { Story } from "@/lib/types";

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="minimal-card rounded-card overflow-hidden flex flex-col justify-between group">
      <div>
        <div className="relative w-full aspect-[16/10] bg-stone-200">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-semibold px-3 py-1 rounded-pill">
            {story.location}
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <span className="text-[10px] font-semibold uppercase tracking-widePill text-stone-400 block mb-3">
            {story.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 tracking-tight leading-snug">
            {story.title}
          </h3>

          <blockquote className="my-4 text-sm text-stone-700 italic border-l-2 border-stone-300 pl-4 leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
        <div>
          <strong className="text-stone-900 block font-semibold">{story.author}</strong>
          <span className="text-stone-500">{story.role}</span>
        </div>
        <span className="font-semibold text-botanical-600">
          {story.metrics.split("•")[0]?.trim()}
        </span>
      </div>
    </div>
  );
};
