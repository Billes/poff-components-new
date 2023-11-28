import { AlertType } from './alert.types';
interface AlertProps {
    /**
     * What type of alert is this? Default is SUCCESS
     */
    type?: AlertType;
    /**
     *
     */
    id?: string;
    /**
     * Headline of the alert
     */
    headline: string;
    /**
     *
     */
    body?: string;
    /**
     * Optional show icon
     */
    icon?: boolean;
    /**
     * Optional make alert closable. Default false
     */
    closable?: boolean;
    /**
     * Optional duration in milliseconds. Default 0
     */
    duration?: number;
    /**
     * Optional extra class names
     */
    extraClassNames?: string;
    /**
     * Optional destroy handler
     */
    destroy?: () => void;
}
export declare const Alert: ({ closable, icon, type, headline, body, destroy, duration, id, extraClassNames, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export {};
