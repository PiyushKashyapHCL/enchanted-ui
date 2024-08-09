"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const Typography_1 = __importDefault(require("../../Typography"));
const Button_1 = __importStar(require("../../Button"));
const ProgressItem_1 = __importDefault(require("./ProgressItem"));
/**
 * @component Renders the progress subheader component.
 * @param {ProgressSubHeaderProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const ProgressSubHeader = (props) => {
    const { totalPercentage, totalSize, totalTime, literals, file, retryUploadItem, cancelItem, navigateFolder, cancelAll, learnMoreOnFailure, translation, } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        totalPercentage !== 100 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Box, { sx: (theme) => {
                    return ({
                        padding: '5px 12px',
                        background: theme.palette.background.secondary,
                        boxShadow: theme.shadows[6],
                    });
                }, height: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" },
                react_1.default.createElement(material_1.Box, { display: "flex", alignItems: "center" },
                    react_1.default.createElement(Typography_1.default, { variant: "caption", color: "text.secondary" }, `${literals.totalSizeLabel}:`),
                    react_1.default.createElement(Typography_1.default, { variant: "caption", color: "text.primary", style: { marginLeft: '4px' } }, totalSize),
                    totalTime && (react_1.default.createElement(Typography_1.default, { variant: "caption", color: "text.primary", style: { marginLeft: '8px' } }, totalTime))),
                cancelAll && (react_1.default.createElement(Button_1.default, { variant: Button_1.ButtonVariants.TEXT, onClick: () => { if (cancelAll)
                        cancelAll(); }, sx: (theme) => {
                        return ({
                            background: theme.palette.background.secondary,
                            height: '14px',
                            padding: '0px 3px',
                        });
                    } },
                    react_1.default.createElement(Typography_1.default, { variant: "caption", color: "primary.main" }, literals.cancelAllLabel)))))),
        react_1.default.createElement(ProgressItem_1.default, { file: file, retryUploadItem: retryUploadItem, cancelItem: cancelItem, navigateFolder: navigateFolder, literals: literals, learnMoreOnFailure: learnMoreOnFailure, translation: translation })));
};
exports.default = ProgressSubHeader;
