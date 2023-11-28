import { ReactNode } from 'react';
interface ParagraphProps {
    /**
     * Paragraph contents
     */
    children: ReactNode;
    /**
     * Optional extra classes
     */
    extraClass?: string;
}
export declare const Paragraph: ({ children, extraClass, ...props }: ParagraphProps) => import("react/jsx-runtime").JSX.Element;
export {};
