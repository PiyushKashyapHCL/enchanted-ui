import React from 'react';
import { IProgressState, Literals, ProgressBarLocalization } from './ProgressBar';
interface ProgressSubHeaderProps {
    totalPercentage: number;
    totalSize: string;
    totalTime?: string;
    literals: Literals;
    file: IProgressState[];
    retryUploadItem?(queueItem: IProgressState): void;
    cancelItem?(queueItem: IProgressState): void;
    navigateFolder?(queueItem: IProgressState): void;
    cancelAll?: Function;
    learnMoreOnFailure(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>): void;
    translation?: ProgressBarLocalization | undefined;
}
/**
 * @component Renders the progress subheader component.
 * @param {ProgressSubHeaderProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
declare const ProgressSubHeader: (props: ProgressSubHeaderProps) => JSX.Element;
export default ProgressSubHeader;
