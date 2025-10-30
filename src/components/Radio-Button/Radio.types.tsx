export interface RadioProps {
  name: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
}
