import React from 'react';
import { Flex, FlexColumn, Span } from "../BaseComponents";
import { cn } from '../helper';
import { IconAlertCircle } from '@tabler/icons-react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>
}

const TextArea: React.FC<InputTextProps> = ({ error = "", text = "", setText }) => {

    return (
        <FlexColumn className="gap-2.5 w-full">
            <Flex className={cn("border border-border-dark focus-within:border-primary-2 gap-2 p-2 rounded-md items-start", { "border-alerts-error_base": error })}>
                <textarea
                    placeholder="Enter task content"
                    className="w-full outline-none text-neutral-800 text-14 placeholder:text-neutral-500 placeholder:font-medium placeholder:text-12"
                    rows={text.split('\n').length > 2 ? (text.split('\n').length + 2) : 4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
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

export default TextArea;
