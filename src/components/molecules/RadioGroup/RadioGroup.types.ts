type RadioGroupProps = {
    label?: string;
    options: { value: string; label: string }[];
    selectedOption: string;
    handleChange: (newSelectedValue: string) => void;
};

export type { RadioGroupProps };