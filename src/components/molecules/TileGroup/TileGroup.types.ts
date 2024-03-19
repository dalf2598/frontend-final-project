type TileGroupProps = {
    options: { type: string; label: string; color: string }[];
    onClick: (option: number) => void;
};

export type { TileGroupProps };