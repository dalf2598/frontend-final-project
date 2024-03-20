type TextFieldProps = {
    value: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
    maxLength: number;
    fullWidth?: boolean;
};

export type { TextFieldProps };