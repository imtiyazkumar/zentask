/**
 * Project Ouma Health
 *
 * @author      Imtiyaz Ahmad
 * @copyright   Teleperinatal, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/helper";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof labelVariants> { }

const labelVariants = cva(
    "rounded h-10 py-6 px-12 gap-2 flex justify-center items-center font-semibold",
    {
        variants: {
            variant: {
                completed: "bg-labels-completed text-primary-600",
                missed: "bg-labels-missed text-error-600",
                rescheduled: "bg-labels-rescheduled text-warning-600",
                progress: "bg-labels-progress text-information-600 ",
                default: "bg-secondary-100 text-secondary-500"
            }
        },
        defaultVariants: {
            variant: "primary",
        }
    }
);

const Label: React.FC<ButtonProps> = ({ className, variant, children }) => {
    return (
        <div className={cn(labelVariants({ variant, className }))}>
            {children}
        </div>
    );
};

export default Label;
