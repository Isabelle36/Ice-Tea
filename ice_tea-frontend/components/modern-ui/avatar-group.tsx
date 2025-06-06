"use client";

import { cn } from '@/lib/utils';
import { Plus } from "lucide-react";
import * as React from "react";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number;
}

export function AvatarGroup({
  children,
  className,
  limit = 3,
  ...props
}: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = limit ? childrenArray.slice(0, limit) : childrenArray;
  const excess = limit ? childrenArray.length - limit : 0;

  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {visibleAvatars.map((child, index) => (
        <div
          key={index}
          className="relative inline-block rounded-full"
        >
          {child}
        </div>
      ))}
      {excess > 0 && (
        <div className="relative flex sm:h-3 sm:w-3 md:h-11 md:w-11 flex-row gap-0.5 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium ">
          <Plus className="h-3 w-3" />
          <span>{excess}</span>
        </div>
      )}
    </div>
  );
}
