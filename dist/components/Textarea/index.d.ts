import { ChangeEventHandler } from 'react';
interface TextareaProps {
    id: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    placeholder?: string;
    rows?: number;
    name: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    value: string;
}
export declare const Textarea: ({ id, disabled, required, placeholder, rows, error, name, onChange, ...props }: TextareaProps) => import("react/jsx-runtime").JSX.Element;
export {};
