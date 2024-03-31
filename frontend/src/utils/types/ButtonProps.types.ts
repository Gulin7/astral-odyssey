export type ButtonProps = {
    type: 'button' | 'submit' | 'reset' | undefined;
    buttonText: string;
    onClick?: (e?: any) => void;
    className?: string;
};
