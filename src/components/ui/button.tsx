import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brand: "bg-brinks-blue text-white hover:bg-brinks-blue/90 hover:scale-105 shadow-glow-blue/50",
        success: "bg-brinks-green text-white font-bold hover:bg-brinks-green/90 hover:scale-105 shadow-glow-green/50",
        "outline-glass": "border border-white/50 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105",
        "glass-blue": "relative bg-brinks-blue/20 border border-brinks-blue/30 text-brinks-blue dark:text-white backdrop-blur-md hover:bg-brinks-blue/30 hover:border-brinks-blue/50 hover:scale-105 transition-all duration-300 overflow-visible shadow-lg hover:shadow-xl [&_svg]:text-brinks-blue dark:[&_svg]:text-white",
        "glass-green": "relative bg-brinks-green/20 border border-brinks-green/40 text-brinks-green dark:text-white backdrop-blur-md hover:bg-brinks-green/30 hover:border-brinks-green/60 hover:scale-105 transition-all duration-300 overflow-visible shadow-lg hover:shadow-xl [&_svg]:text-brinks-green dark:[&_svg]:text-white",
        "glass-cyan": "relative bg-cyan-400/20 border border-cyan-400/30 text-cyan-600 dark:text-white backdrop-blur-md hover:bg-cyan-400/30 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 overflow-visible shadow-lg hover:shadow-xl [&_svg]:text-cyan-600 dark:[&_svg]:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
