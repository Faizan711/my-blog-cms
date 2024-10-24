import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative flex-col min-h-[90vh] w-full items-start justify-center overflow-hidden rounded-lg border bg-background px-20 py-10 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Articles by Faizan
        </p>

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="flex items-center justify-center"></div>
      </div>
    </>
  );
}
