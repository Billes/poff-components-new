interface SimpleSelectProps {
    name: string;
    options: any[];
    selected: any;
    keyIdentifier: string;
    valueIdentifier: string;
    separator?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
}
export declare const SimpleSelect: ({ name, options, selected, keyIdentifier, valueIdentifier, separator, disabled, onChange, }: SimpleSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
