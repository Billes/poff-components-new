import { ChangeEventHandler, ReactNode, Ref } from 'react';
import { InputType } from './input.types';
interface InputProps {
    id: string;
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    error?: string;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    icon?: ReactNode;
    value: string | number;
    required?: boolean;
    ref?: Ref<HTMLInputElement>;
    step?: string;
    maxLength?: number;
    description?: string;
    autoComplete?: string;
    readonly?: boolean;
}
export declare const Input: ({ id, type, disabled, required, readonly, autoComplete, placeholder, error, onChange, icon, name, value, ref, step, maxLength, description, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
