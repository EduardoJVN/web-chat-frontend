import { cn } from "@/lib/utils"
export default function Input({error, ...props}: { error?: string} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={cn(
        "rounded-lg bg-background p-2 placeholder:text-gray-500 outline-primary",
        error && "border-1 border-error outline-error"
    )}/>
  )
}