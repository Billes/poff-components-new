import { ReactNode } from 'react';
interface ModalProps {
    /**
     * Modal content
     */
    children?: ReactNode;
    /**
     * Is modal open
     */
    open: boolean;
    /**
     * Optional if modal should have overflow hidden. Default is true
     */
    overflowHidden?: boolean;
    /**
     * onClose function
     */
    onClose: () => void;
    /**
     * Optional width of modal. Default is lg
     */
    width?: string;
}
export declare const Modal: ({ children, width, overflowHidden, ...props }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
