/**
 * Project Ouma Health
 *
 * @author      Anees Muzzafer
 * @copyright   Teleperinatal, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/helper";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const buttonVariants = cva(
    "rounded-full py-[21px] px-6 gap-2 flex justify-center items-center font-semibold",
    {
        variants: {
            variant: {
                primary_filled: "bg-primary-1 text-text",
                dark_filled: "bg-dark text-white",
                dark_outlined: "bg-none border border-dark"
            },
            width: {
                auto: "w-auto",
                full: "w-full"
            },
            height: {
                large: "h-14",
                medium: "h-12 text-sm py-6",
                small: "h-8 text-xs py-4",
            }
        },
        defaultVariants: {
            variant: "primary_filled",
            width: "auto",
            height: "medium"
        }
    }
);

const Button: React.FC<ButtonProps> = ({ className, variant, width, height, disabled, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant, width, height, className }), {
                "bg-neutral-400 text-neutral-600": (disabled && (variant === "primary_filled" || variant === "dark_filled")),
                "text-neutral-500": disabled && variant === "dark_outlined"
            })}>
            {children}
        </button>
    );
};

export default Button;
