interface SelectMenuProps {
    name: string;
    options: any[];
    selected: any;
    keyIdentifier: string;
    valueIdentifier: string;
    description?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    separator?: string;
    onChange?: (value: any) => void;
}
export declare const SelectMenu: ({ name, options, selected, valueIdentifier, keyIdentifier, disabled, onChange, description, separator, error, }: SelectMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
