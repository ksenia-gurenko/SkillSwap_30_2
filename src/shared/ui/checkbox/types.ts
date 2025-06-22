export type TCheckboxListItem = {
  id?: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  chekboxCategory?: boolean; // Если родительская категория = true (есть подкатегорий ), если нет = false
};

export type TCheckboxListProps = {
  items: TCheckboxListItem[];
  title: string;
  onChange: () => void;
};
