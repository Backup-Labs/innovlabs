import React from "react";
import Image from "next/image";
import type { Story } from "@/lib/types";

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="minimal-card rounded-card overflow-hidden flex flex-col justify-between group bg-white border border-gray-300">
      <div>
        <div className="relative w-full aspect-[16/10] bg-gray-200">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm font-mono">
            {story.location}
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-3 font-mono">
            // {story.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 tracking-tight leading-snug">
            {story.title}
          </h3>

          <blockquote className="my-4 text-sm text-gray-700 italic border-l-2 border-black pl-4 leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
        <div>
          <strong className="text-black block font-semibold">{story.author}</strong>
          <span className="text-gray-500">{story.role}</span>
        </div>
        <span className="font-bold text-black font-mono">
          {story.metrics.split("•")[0]?.trim()}
        </span>
      </div>
    </div>
  );
};
