import { cn } from "@/lib/utils"
import Spinner from "../Spinner";

export default function Button({children, className , loading=false, disabled, ...props}: Readonly<{
  children: React.ReactNode;
  className?: string,
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button type="button" {...props} className={cn(
      "p-1 px-2 rounded-lg bg-primary hover:cursor-pointer hover:ring-2 hover:ring-primary flex items-center",
      disabled && "bg-absent",
      className
    )}>
      {
        loading ? <Spinner/> : children
      }
      
    </button>
  )
}