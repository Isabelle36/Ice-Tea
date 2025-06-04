import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col cursor-pointer rounded-lg border-white/10 border-t-2",
        "bg-gradient-to-b from-black/50 to-black/30",
        "p-4 text-start sm:p-6",
        "hover:from-black/40 hover:to-black/60",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md mx-auto text-white font-semibold leading-none">
            {author.name}
          </h3>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-white/80 text-sm ">
        {text}
      </p>
    </Card>
  )
}