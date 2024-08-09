import React, { ReactNode } from 'react';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';
import { Components, Theme } from '@mui/material';
export declare enum ListSizes {
    SMALL = "small",
    MEDIUM = "medium"
}
interface ListItemButtonProps extends MuiListItemButtonProps {
    secondaryActionButton?: ReactNode;
    cascading?: boolean;
    size?: ListSizes;
}
export declare const getMuiListItemButtonThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const ListItemButton: {
    ({ ...props }: ListItemButtonProps): React.JSX.Element;
    defaultProps: {
        cascading: boolean;
        size: ListSizes;
    };
};
export * from '@mui/material/ListItemButton';
export default ListItemButton;
