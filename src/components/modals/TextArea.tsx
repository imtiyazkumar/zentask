import React, { useEffect, useRef } from 'react';
import { Flex, FlexColumn, Span } from "../BaseComponents";
import { cn } from '../helper';
import { IconAlertCircle } from '@tabler/icons-react';
import { ITask } from '../types';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    task: ITask;
    setText: React.Dispatch<React.SetStateAction<ITask>>
}

const TextArea: React.FC<InputTextProps> = ({ error = "", task, setText }) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textareaRef.current) {
            const { value } = textareaRef.current;
            textareaRef.current.setSelectionRange(value.length, value.length);
        }
    }, []);

    return (
        <FlexColumn className="gap-2.5 w-full">
            <Flex className={cn("border border-border-dark focus-within:border-primary-2 gap-2 p-2 rounded-md items-start", { "border-alerts-error_base": error })}>
                <textarea
                    ref={textareaRef}
                    placeholder="Enter task content"
                    className="w-full outline-none text-neutral-800 text-14 placeholder:text-neutral-500 placeholder:font-medium placeholder:text-12"
                    rows={task.content.split('\n').length > 2 ? (task.content.split('\n').length + 2) : 4}
                    value={task.content}
                    onChange={(e) => setText((prevTask) => ({ ...prevTask, content: e.target.value }))}
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
