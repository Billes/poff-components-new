import { ButtonType } from './button.types';
interface ButtonProps {
    /**
     * What type of button is this? Default is DEFAULT
     */
    type?: ButtonType;
    /**
     * Optional button type. Default button
     */
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
    /**
     * Button contents
     */
    text: string;
    /**
     * Optional extra class names
     */
    extraClassNames?: string;
    /**
     * Optional disabled. Default false
     */
    disabled?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
export declare const Button: ({ onClick, text, type, buttonType, disabled, extraClassNames, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
