import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/helper";
import { Flex, Span } from "../../../components/BaseComponents";

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
                <a className="text-center cursor-pointer" href="https://www.oumahealth.com/terms-of-service" target="_blank" rel="noopener">Terms of Service</a>
                <a className="text-center cursor-pointer">Privacy Policy</a>
            </Flex>
        </Flex>
    );
};

export default Footer;
