import { ReactNode } from 'react';
import { IconButtonType } from './iconButton.types';
interface IconButtonProps {
    /**
     * What type of icon button is this? Default is DEFAULT
     */
    type?: IconButtonType;
    /**
     * Icon
     */
    icon: ReactNode;
    /**
     * Optional title
     */
    title?: string;
    /**
     * Optional disabled. Default false
     */
    disabled?: boolean;
    /**
     * Click handler
     */
    onClick: () => void;
}
export declare const IconButton: ({ onClick, icon, title, type, disabled, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
