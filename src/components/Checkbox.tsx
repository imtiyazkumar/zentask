import React from "react";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Flex, Label } from "./BaseComponents";
import { cn } from "./helper";

interface CheckboxProps {
    label?: string;
    checked: boolean;
    onChange: (c: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className, disabled }) => {
    return (
        <Flex className="gap-2.5">
            <CheckboxPrimitive.Root
                checked={checked}
                onCheckedChange={onChange}
                disabled={disabled}
                id={label}>
                {!checked && <IconSquare size={24} className="text-neutral-300" />}
                <CheckboxPrimitive.Indicator>
                    <IconSquareCheckFilled size={24} className={cn({ "text-primary-2": !disabled, "text-neutral-500": disabled })} />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            {label && <Label className={cn("text-16 text-dark cursor-pointer select-none", className)} htmlFor={label}>{label}</Label>}
        </Flex >
    );
};

export default Checkbox;
