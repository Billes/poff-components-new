import { ReactNode } from 'react';
import { SmallIconButtonType } from './SmalliconButton.types';
interface SmallIconButtonProps {
    /**
     * What type of icon button is this? Default is DEFAULT
     */
    type?: SmallIconButtonType;
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
export declare const SmallIconButton: ({ onClick, icon, title, type, disabled, ...props }: SmallIconButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
