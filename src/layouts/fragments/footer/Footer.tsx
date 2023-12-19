/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/helper";
import { Flex, Span } from "../../../components/General Components/BaseComponents";

interface FooterProps extends React.HTMLProps<HTMLSpanElement>, VariantProps<typeof footerVariants> {}

const footerVariants = cva(
    "print:hidden justify-between w-full border-t border-border-dark font-medium text-text text-12 md:text-14 gap-2 items-center md:flex-row md:gap-0",
    {
        variants: {
            variant: {
                master: "p-6",
                auth: "py-6 px-6 md:px-24",
            },
        },
        defaultVariants: {
            variant: "master",
        }
    }
);

const Footer: React.FC<FooterProps> = ({ className, variant }) => {
    return (
        <Flex className={cn(footerVariants({ variant, className }))}>
            <Span>&copy; {new Date().getFullYear()} Zentask.</Span>
            <Flex className="items-center gap-2 md:gap-8">
                <a className="text-center cursor-pointer" href="https://www.linkedin.com/in/imtiyazkumar/" target="_blank" rel="noopener">Developed By</a>
                <a className="text-center cursor-pointer">Terms of Service</a>
                <a className="text-center cursor-pointer">Privacy Policy</a>
            </Flex>
        </Flex>
    );
};

export default Footer;
