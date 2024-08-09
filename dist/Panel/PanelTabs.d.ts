import * as React from 'react';
import { PanelLocalization, TabsPanelProps } from './Panel';
export interface PanelTabsProps {
    selectedTabValue: number;
    handleTabChange(event: React.ChangeEvent<{}>, newValue: number): void;
    tabs: Array<TabsPanelProps>;
    isPanelCollapsed?: boolean;
    togglePanel?: (event: React.ChangeEvent<{}>) => void;
    translation: PanelLocalization | undefined;
}
declare const PanelTabs: React.FC<PanelTabsProps>;
export default PanelTabs;
