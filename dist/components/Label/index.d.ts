interface LabelProps {
    /**
     * Label text
     */
    text: string;
    /**
     * Reference to id of input
     */
    htmlFor: string;
    /**
     * Optionsl if is required
     */
    required?: boolean;
    /**
     * Optional extra classes
     */
    extraClass?: string;
}
export declare const Label: ({ text, htmlFor, required, extraClass, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
