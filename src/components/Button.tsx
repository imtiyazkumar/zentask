/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./helper";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
}

const buttonVariants = cva(
    "print:hidden rounded-md px-2 py-4 gap-2 flex justify-center items-center font-semibold select-none min-w-max",
    {
        variants: {
            variant: {
                primary_filled: "bg-primary-600  hover:text-white hover:bg-primary active:bg-primary-1",
                dark_filled: "bg-slate-600  text-white hover:bg-primary-1 active:bg-neutral-800",
                dark_outlined: "bg-none border border-dark hover:bg-neutral-300 active:bg-neutral-400"
            },
            width: {
                auto: "w-auto",
                full: "w-full"
            },
            height: {
                large: "h-14",
                medium: "h-10 text-sm",
                small: "h-8 text-xs",
            }
        },
        defaultVariants: {
            variant: "primary_filled",
            width: "auto",
            height: "medium"
        }
    }
);

const Button: React.FC<ButtonProps> = ({ className, variant = "primary_filled", width, height, disabled, loading, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant, width, height, className }), {
                "bg-neutral-400 text-neutral-600": (disabled && (variant === "primary_filled" || variant === "dark_filled")),
                "text-neutral-500": disabled && variant === "dark_outlined"
            })}>
            {children}
            {loading &&
                <svg className="w-5 h-5 ml-1 mr-3 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="#043F97" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            }
        </button>
    );
};

export default Button;
