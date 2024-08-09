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
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const chevron__down_1 = __importDefault(require("@enchanted-prod/material-ui-icons/dist/carbon/es/chevron--down"));
const chevron__up_1 = __importDefault(require("@enchanted-prod/material-ui-icons/dist/carbon/es/chevron--up"));
const close_1 = __importDefault(require("@enchanted-prod/material-ui-icons/dist/carbon/es/close"));
const checkmark__outline_1 = __importDefault(require("@enchanted-prod/material-ui-icons/dist/carbon/es/checkmark--outline"));
const warning_1 = __importDefault(require("@enchanted-prod/material-ui-icons/dist/carbon/es/warning"));
const Typography_1 = __importDefault(require("../../Typography"));
const IconButton_1 = __importDefault(require("../../IconButton"));
const CircularProgress_1 = __importDefault(require("../../ProgressIndicator/CircularProgress"));
const ProgressSubHeader_1 = __importDefault(require("./ProgressSubHeader"));
const Button_1 = __importDefault(require("../../Button"));
const Tooltip_1 = __importDefault(require("../../Tooltip"));
/**
 * StyledHeader component for the UploadProgressBar.
 * @param {BoxProps} props - The props for the component.
 * @returns {Object} - The styled component.
 */
const StyledHeader = (0, material_1.styled)(material_1.Box)((props) => {
    const { theme } = props;
    return (Object.assign(Object.assign({}, theme.typography.body2), { position: 'static', boxSizing: 'border-box', width: '360px', maxWidth: 'inherit', justifyContent: 'space-between', background: theme.palette.background.dark, boxShadow: theme.shadows[6], color: theme.palette.text.primary, display: 'flex', alignItems: 'center', height: '36px', padding: '8px 12px 8px 12px', '.MuiBox-root': {
            display: 'flex',
            alignItems: 'center',
            '&[data-testid=wrapper]': {
                marginRight: '8px',
                '[data-testid=progressRoot]': {
                    display: 'block',
                    marginRight: '8px',
                    '[data-testid=progressCircle]': {
                        color: theme.palette.primary.inverse,
                    },
                    '[data-testid=progressTrail]': {
                        color: theme.palette.background.inverse,
                    },
                },
                // styles the leading icon
                '.MuiSvgIcon-root': {
                    '&[data-mui-test=checkmark--outlineIcon]': {
                        color: theme.palette.success.inverse,
                    },
                    '&[data-mui-test=warningIcon]': {
                        color: theme.palette.error.inverse,
                    },
                    // this will not affect other svg icons under an IconButton parent with actions inside this upload progress bar
                    '&[data-mui-test=warningIcon],&[data-mui-test=checkmark--outlineIcon]': {
                        height: '16px',
                        width: '16px',
                        margin: '2px 8px 2px 0px',
                    },
                },
                // styles the upload status message
                '.MuiTypography-root': {
                    padding: '2px 0px 2px 0px',
                    wordBreak: 'break-word',
                    color: theme.palette.action.inverse,
                },
            },
            '&[data-testid=end-actions]': {
                // styles the optional action button
                '.MuiButton-root': Object.assign(Object.assign({}, theme.typography.subtitle2), { color: theme.palette.primary.inverse, '&[data-testid=pauseButton], &[data-testid=cancelAllButton]': {
                        backgroundColor: 'inherit',
                        border: 'none',
                        marginRight: '8px',
                        outline: 'none',
                        padding: '2px 4px',
                        textTransform: 'none',
                        minWidth: 'auto',
                        wordBreak: 'normal',
                        overflowWrap: 'anywhere',
                        position: 'relative',
                        '&:hover': {
                            backgroundColor: theme.palette.action.hoverInverse,
                            borderRadius: '2px',
                        },
                        '&:focus': {
                            outline: `1px solid ${theme.palette.primary.inverse}`,
                            borderRadius: '2px',
                        },
                    } }),
                // styles the chevron icon and close icon
                '.MuiIconButton-root': {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hoverInverse,
                    },
                    '&:focus': {
                        '.MuiSvgIcon-root': {
                            border: `1px solid ${theme.palette.primary.inverse}`,
                        },
                    },
                    '.MuiSvgIcon-root': {
                        color: theme.palette.action.inverse,
                    },
                },
            },
        } }));
});
/**
 * Represents the ProgressHeader component.
 * @param props - The props for the ProgressHeader component.
 * @returns The rendered ProgressHeader component.
 */
const ProgressHeader = (props) => {
    const { totalPercentage, uploadStatus, closeModal, totalSize, totalTime, stringLiterals, cancelAll, file, retryUploadItem, cancelItem, navigateFolder, learnMoreOnFailure, pauseButton, translation, } = props;
    const [isVisibility, setIsVisibility] = (0, react_1.useState)(false);
    /**
     * Toggles the visibility of the progress header.
     */
    const toggleButtonClick = () => {
        setIsVisibility(!isVisibility);
    };
    /**
     * Renders an icon based on the total percentage value.
     * @returns The icon component based on the total percentage value.
     */
    const renderIcon = () => {
        if (totalPercentage != null) {
            if (totalPercentage === 0) {
                return react_1.default.createElement(warning_1.default, null);
            }
            if (totalPercentage > 0 && totalPercentage <= 99) {
                return (react_1.default.createElement(CircularProgress_1.default, { variant: "determinate", value: totalPercentage, size: 16 }));
            }
            if (totalPercentage === 100) {
                return react_1.default.createElement(checkmark__outline_1.default, null);
            }
        }
        return '';
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHeader, { style: { borderRadius: isVisibility ? '4px 4px 0px 0px' : '4px' } },
            react_1.default.createElement(material_1.Box, { "data-testid": "wrapper" },
                renderIcon(),
                react_1.default.createElement(Typography_1.default, { variant: "body2" }, uploadStatus)),
            react_1.default.createElement(material_1.Box, { "data-testid": "end-actions" },
                pauseButton
                    && (react_1.default.createElement(Button_1.default, { "data-testid": "pauseButton", onClick: (event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            if (pauseButton)
                                pauseButton();
                        } }, stringLiterals.pauseButtonLabel)),
                cancelAll
                    && (react_1.default.createElement(Button_1.default, { "data-testid": "cancelAllButton", onClick: (event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            if (cancelAll)
                                cancelAll();
                        } }, stringLiterals.cancelAllLabel)),
                react_1.default.createElement(material_1.Box, null,
                    isVisibility && (react_1.default.createElement(Tooltip_1.default, { title: translation === null || translation === void 0 ? void 0 : translation.collapseTooltip, tooltipsize: "small" },
                        react_1.default.createElement(IconButton_1.default, { "data-testid": "collapseIconButton", onClick: toggleButtonClick, onKeyDown: (e) => {
                                if (e.key === 'Enter') {
                                    toggleButtonClick();
                                }
                            } },
                            react_1.default.createElement(chevron__up_1.default, null)))),
                    !isVisibility && (react_1.default.createElement(Tooltip_1.default, { title: translation === null || translation === void 0 ? void 0 : translation.expandTooltip, tooltipsize: "small" },
                        react_1.default.createElement(IconButton_1.default, { "data-testid": "expandIconButton", onClick: toggleButtonClick, onKeyDown: (e) => {
                                if (e.key === 'Enter') {
                                    toggleButtonClick();
                                }
                            } },
                            react_1.default.createElement(chevron__down_1.default, null))))),
                react_1.default.createElement(Tooltip_1.default, { title: translation === null || translation === void 0 ? void 0 : translation.closeButtonTooltip, tooltipsize: "small" },
                    react_1.default.createElement(IconButton_1.default, { onClick: closeModal, onKeyDown: (e) => {
                            if (e.key === 'Enter') {
                                closeModal(e);
                            }
                        }, "data-testid": "close-button" },
                        react_1.default.createElement(close_1.default, null))))),
        isVisibility && (react_1.default.createElement(ProgressSubHeader_1.default, { totalPercentage: totalPercentage, totalSize: totalSize, totalTime: totalTime, literals: stringLiterals, file: file, retryUploadItem: retryUploadItem, cancelItem: cancelItem, navigateFolder: navigateFolder, cancelAll: cancelAll, learnMoreOnFailure: learnMoreOnFailure, translation: translation }))));
};
exports.default = ProgressHeader;
