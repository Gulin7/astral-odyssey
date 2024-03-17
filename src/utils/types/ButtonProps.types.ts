export type ButtonProps = {
    type: 'button' | 'submit' | 'reset' | undefined;
    buttonText: string;
    onClick: () => void;
    className?: string;
};
