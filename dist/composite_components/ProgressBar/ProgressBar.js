"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressItemType = exports.EnumUploadStatus = void 0;
/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2024. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const ProgressHeader_1 = __importDefault(require("./ProgressHeader"));
var EnumUploadStatus;
(function (EnumUploadStatus) {
    EnumUploadStatus["SUCCESS"] = "SUCCESS";
    EnumUploadStatus["PROGRESS"] = "PROGRESS";
    EnumUploadStatus["PENDING"] = "PENDING";
    EnumUploadStatus["FAILURE"] = "FAILURE";
})(EnumUploadStatus = exports.EnumUploadStatus || (exports.EnumUploadStatus = {}));
var ProgressItemType;
(function (ProgressItemType) {
    ProgressItemType["File"] = "file";
    ProgressItemType["Folder"] = "folder";
})(ProgressItemType = exports.ProgressItemType || (exports.ProgressItemType = {}));
/**
 * @component Renders a progress bar component.
 * @param {progressBarProps} props - The props for the ProgressBar component.
 * @returns {JSX.Element} The rendered ProgressBar component.
 */
const ProgressBar = (props) => {
    const { uploadStatus, totalPercentage, totalSize, totalTime, stringLiterals, uploadedFile, retryUploadItem, cancelItem, navigateFolder, cancelAll, learnMoreOnFailure, closeModal, pauseButton, translation, } = props;
    return (react_1.default.createElement(material_1.Box, { position: "fixed", bottom: "12px", right: "12px", zIndex: 2, "data-testid": "upload-progress-container" },
        react_1.default.createElement(ProgressHeader_1.default, { totalPercentage: totalPercentage, uploadStatus: uploadStatus, closeModal: closeModal, totalSize: totalSize, totalTime: totalTime, stringLiterals: stringLiterals, cancelAll: cancelAll, file: uploadedFile, retryUploadItem: retryUploadItem, cancelItem: cancelItem, navigateFolder: navigateFolder, learnMoreOnFailure: learnMoreOnFailure, pauseButton: pauseButton, translation: translation })));
};
exports.default = ProgressBar;
