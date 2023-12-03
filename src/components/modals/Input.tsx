import React from 'react';
import { Flex, FlexColumn, Span } from "../BaseComponents";
import { cn } from '../helper';
import { IconAlertCircle, IconEye, IconEyeOff } from '@tabler/icons-react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    required?: boolean;
}

const Input: React.FC<InputTextProps> = ({ label = "", error = "", type, required = false, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    return (
        <FlexColumn className="gap-2.5 w-full">
            <Flex className="gap-0.5 px-2.5 text-14 font-medium">
                <Span className="select-none text-neutral-900">{label}</Span>
                {required && <Span className="text-red-500">*</Span>}
            </Flex>
            <Flex className={cn("flex border border-border-dark focus-within:border-primary-2 gap-2 p-2 rounded-md", { "border-alerts-error_base": error })}>
                <input {...props} type={type === "password" ? (isPasswordVisible ? "text" : "password") : type} className="flex-1 w-full font-medium text-neutral-700 focus:outline-none text-14 placeholder-neutral-600" />
                {type === "password" &&
                    <Span className="cursor-pointer" onClick={() => setIsPasswordVisible(v => !v)}>
                        {isPasswordVisible ? <IconEye size={20} className="text-dark" /> : <IconEyeOff size={20} className="text-dark" />}
                    </Span>
                }
            </Flex>
            {error &&
                <Flex className="flex gap-2 text-alerts-error_base">
                    <IconAlertCircle size={18} />
                    <Span className="text-12">{error}</Span>
                </Flex>
            }
        </FlexColumn>
    );
};

export default Input;
