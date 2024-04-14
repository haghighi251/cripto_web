export type iFileInputProps = {
  id: string;
  className?: string;
  helperText?: string;
  multiple?: boolean;
  sizing?: 'string';
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};