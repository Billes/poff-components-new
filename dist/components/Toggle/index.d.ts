interface ToggleProps {
    enabled: boolean;
    label?: string;
    description?: string;
    disabled?: boolean;
    onChange: (value: boolean) => void;
    onClick?: () => void;
}
export declare const Toggle: ({ enabled, label, description, disabled, onChange, onClick, }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export {};
