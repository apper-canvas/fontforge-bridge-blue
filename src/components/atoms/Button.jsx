import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary",
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary focus:ring-primary shadow-lg hover:shadow-xl transform hover:scale-[1.02]",
    secondary: "bg-gradient-to-r from-secondary to-primary text-white hover:from-primary hover:to-secondary focus:ring-secondary shadow-lg hover:shadow-xl transform hover:scale-[1.02]",
    accent: "bg-gradient-to-r from-accent to-red-500 text-white hover:from-red-500 hover:to-accent focus:ring-accent shadow-lg hover:shadow-xl transform hover:scale-[1.02]",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300"
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
    xl: "h-14 px-8 text-xl"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;