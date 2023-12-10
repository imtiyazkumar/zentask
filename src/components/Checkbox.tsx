import React from "react";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Flex } from "./BaseComponents";

interface CheckboxProps {
    checked: boolean;
    onChange: (c: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    return (
        <Flex className="gap-2.5">
            <CheckboxPrimitive.Root
                checked={checked}
                onCheckedChange={onChange}
            >
                {!checked && <IconSquare size={24} className="text-neutral-300" />}
                <CheckboxPrimitive.Indicator>
                    <IconSquareCheckFilled size={24} className="text-primary" />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

        </Flex >
    );
};

export default Checkbox;
