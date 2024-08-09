import React from 'react';
import { IProgressState, Literals, ProgressBarLocalization } from './ProgressBar';
interface progressHeaderProps {
    totalPercentage: number;
    uploadStatus: string;
    closeModal(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>): void;
    totalSize: string;
    totalTime?: string;
    stringLiterals: Literals;
    cancelAll?: Function;
    file: IProgressState[];
    retryUploadItem?(queueItem: IProgressState): void;
    cancelItem?(queueItem: IProgressState): void;
    navigateFolder?(queueItem: IProgressState): void;
    learnMoreOnFailure(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>): void;
    pauseButton?: Function;
    translation?: ProgressBarLocalization | undefined;
}
/**
 * Represents the ProgressHeader component.
 * @param props - The props for the ProgressHeader component.
 * @returns The rendered ProgressHeader component.
 */
declare const ProgressHeader: (props: progressHeaderProps) => JSX.Element;
export default ProgressHeader;
