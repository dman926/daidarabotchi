import { ChipTypeMap } from '@mui/material';
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete';

/* eslint-disable-next-line */
export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends MuiAutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  > {}

export function Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return <MuiAutocomplete data-testid="mui-autocomplete" {...props} />;
}

export default Autocomplete;
