import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Close from '@mui/icons-material/Close';

interface SelectFieldProps<T> {
  label?: string;
  value: T | undefined;
  onChange: (value: T | undefined) => void;
  options: { value: T; label: string }[];
  width?: string | number;
  disabled?: boolean;
}

function SelectField<T extends string>({
  label = '',
  value,
  onChange,
  options,
  width = '100%',
  disabled,
}: SelectFieldProps<T>) {
  const handleChange = (event: SelectChangeEvent<unknown> | undefined) => {
    if (event === undefined) return onChange(undefined);
    onChange(event.target.value as T | undefined);
  };

  return (
    <FormControl sx={{ width }}>
      <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label.toLowerCase()}-label`}
        input={<OutlinedInput label={label} />}
        value={value || ''}
        onChange={handleChange}
        disabled={disabled}
        endAdornment={
          value && (
            <InputAdornment sx={{ marginRight: '20px', cursor: 'pointer' }} position="end">
              <IconButton onClick={() => handleChange(undefined)}>
                <Close sx={{ width: '20px', height: '20px' }} />
              </IconButton>
            </InputAdornment>
          )
        }
        MenuProps={{
          PaperProps: {
            style: { maxHeight: '50%' },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
