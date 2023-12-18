/// <reference types="react" />
interface ConfirmDialogProps {
    /**
     * Is the dialog open?
     */
    open: boolean;
    /**
     * Close handler
     */
    onClose: () => void;
    /**
     * Confirm handler
     */
    onConfirm: () => void;
    /**
     * Title of the dialog
     */
    title: string;
    /**
     * Dialog contents
     */
    message: string | JSX.Element;
    /**
     * Optional confirm label. Default OK
     */
    confirmLabel?: string;
    /**
     * Optional cancel label. Default Avbryt
     */
    cancelLabel?: string;
}
export declare const ConfirmDialog: ({ open, onClose, onConfirm, title, message, confirmLabel, cancelLabel, }: ConfirmDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
