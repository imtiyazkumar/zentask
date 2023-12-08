import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { IconChevronDown } from "@tabler/icons-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "./helper";
import { Flex } from "./BaseComponents";

interface DropdownProps extends VariantProps<typeof dropdownVariants> {
    items: Array<{ item: ReactNode, action: () => void }>;
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

                    <Flex className={cn("flex flex-col gap-2.5 items-center select-none p-2", itemClassName)}>
                        {items?.map((d, index) =>
                            <DropdownMenu.Item key={index} className="cursor-pointer" onClick={d.action}>

                                {d.item}
                            </DropdownMenu.Item>
                        )}
                    </Flex>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;
