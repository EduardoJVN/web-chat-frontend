'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useStatusStore } from "@/store/statusStore";

export default function AvatarStatus({className} :Readonly<{
  className?: string
}>) {
  const { status } = useStatusStore();
  const borderColorStatus = `border-${status}`;
  return (
    <div
      className={cn(
        "w-[150px] h-[150px] bg-gray-default flex flex-col items-center justify-center rounded-full border-8 border-gray-default",
        borderColorStatus,
        className
      )}
    >
        <Image
            src="/profile-default.svg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
    </div>
  )
}