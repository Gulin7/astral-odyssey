export type PotionFormEntryProps = {
    label: string;
    placeHolder: string;
    disabled: boolean;
    defaultValue: string;
    ref: React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>;
};
