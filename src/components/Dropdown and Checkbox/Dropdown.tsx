/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { IconChevronDown } from "@tabler/icons-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../helper";

interface DropdownProps extends VariantProps<typeof dropdownVariants> {
    items: Array<{
        label?: string;
        onClick?: () => void;
        icon?: React.ReactNode;
    }>;
    align?: "start" | "center" | "end";
    icon?: React.ReactNode;
    className?: string;
    itemClassName?: string;
}

const dropdownVariants = cva(
    "flex flex-col justify-between bg-white border border-border-dark shadow-custom",
    {
        variants: {
            variant: {
                icon: "overflow-hidden rounded-lg",
            },
        },
        defaultVariants: {
            variant: "icon",
        }
    }
);

const Dropdown: React.FC<DropdownProps> = ({ variant, items, align = "end", icon, className, itemClassName, ...props }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="outline-none">
                    {icon ?? <IconChevronDown size={14} className="text-neutral-500" />}
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    {...props}
                    sideOffset={10}
                    align={align}
                    alignOffset={-5}
                    className={cn(dropdownVariants({ variant }), className)}>
                    {items?.map(d =>
                        <DropdownMenu.Item
                            key={d.label}
                            onClick={d.onClick}
                            className={cn("flex gap-2 items-center text-14 font-medium px-3 py-1.5 first:pt-3 last:pb-3 text-dark select-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-100 cursor-pointer", itemClassName)}>
                            {d.icon}{d.label}
                        </DropdownMenu.Item>
                    )}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;
