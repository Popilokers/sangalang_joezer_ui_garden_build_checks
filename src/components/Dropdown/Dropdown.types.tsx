export interface DropdownProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
