import { ReactNode } from "react";

type ButtonProps = {
    icon?: ReactNode;
    onClick: () => void;
    text: string;
};

export type { ButtonProps };