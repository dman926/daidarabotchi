import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiButtonBase, { ButtonBaseActions, ButtonBaseClasses } from '@mui/material/ButtonBase';
import { TouchRippleProps, TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import './button-base.module.scss';

/* eslint-disable-next-line */
export interface ButtonBaseProps {
  action?: React.Ref<ButtonBaseActions>;
  centerRipple?: boolean;
  children?: React.ReactNode;
  classes?: Partial<ButtonBaseClasses>;
  disabled?: boolean;
  disableRipple?: boolean;
  disableTouchRipple?: boolean;
  focusRipple?: boolean;
  focusVisibleClassName?: string;
  LinkComponent?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocusVisible?: React.FocusEventHandler<any>;
  sx?: SxProps<Theme>;
  tabIndex?: NonNullable<React.HTMLAttributes<any>['tabIndex']>;
  TouchRippleProps?: Partial<TouchRippleProps>;
  touchRippleRef?: React.Ref<TouchRippleActions>;
}

export function ButtonBase(props: ButtonBaseProps) {
  return <MuiButtonBase {...props}></MuiButtonBase>;
}

export default ButtonBase;
