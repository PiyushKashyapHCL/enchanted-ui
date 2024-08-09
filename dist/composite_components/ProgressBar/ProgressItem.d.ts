import React from 'react';
import { IProgressState, Literals, ProgressBarLocalization } from './ProgressBar';
interface ProgressItemProps {
    file: IProgressState[];
    retryUploadItem?(queueItem: IProgressState): void;
    cancelItem?(queueItem: IProgressState): void;
    navigateFolder?(queueItem: IProgressState): void;
    literals: Literals;
    learnMoreOnFailure(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>): void;
    translation?: ProgressBarLocalization | undefined;
}
/**
 * @component Renders the progress item component.
 * @param {ProgressItemProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
declare const ProgressItem: (props: ProgressItemProps) => JSX.Element;
export default ProgressItem;
