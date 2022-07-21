import styled from "styled-components"

export const Container = styled.div`
    margin-top: 40px;

    @-webkit-keyframes loaderSpin {
    from {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }
    @keyframes loaderSpin {
    from {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }
    
    .rs-table {
        border: 1px solid ${({theme})=>theme.pallete.background.paper};
        border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
        position: relative;
        overflow: hidden;
        background-color: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-column-resizing {
        cursor: ew-resize;
        user-select: none;
    }
    .rs-table-row {
        overflow: hidden;
        position: absolute;
        height: 36px;
        width: 100%;
        top: 0;
    }
    .rs-table-hover .rs-table-row:hover {
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-hover .rs-table-row:hover .rs-table-cell-group {
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-hover .rs-table-row:hover .rs-table-cell {
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-row-header {
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-row-header .rs-table-cell {
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-row-header .rs-table-cell-group-shadow {
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.28);
        z-index: 5;
    }
    .rs-table-hover .rs-table-row:hover .rs-table-cell-group {
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-hover .rs-table-row:hover .rs-table-cell-header .rs-table-cell {
        background: none;
    }
    .rs-table-hover .rs-table-row:hover .rs-table-cell {
        background: ${({theme})=>theme.pallete.background.paper};
    }
    .rs-table-header-row-wrapper {
        z-index: 2;
        position: relative;
    }
    .rs-table-affix-header {
        z-index: 3;
        visibility: hidden;
    }
    .rs-table-affix-header.fixed {
        visibility: visible;
    }
    .rs-table-body-row-wrapper {
        position: relative;
        overflow: hidden;
        z-index: 0;
    }
    .rs-table-body-info {
        width: 100%;
        text-align: center;
        top: 50%;
        position: absolute;
        margin-top: -20px;
        line-height: 40px;
    }
    .rs-table-body-info .icon {
        margin: 0 10px;
    }
    .rs-table-body-info-wheel-area {
        width: 100%;
    }
    .rs-table-cell {
        height: 36px;
        border-bottom: 1px solid ${({theme})=>theme.pallete.background.paper};
        display: block;
        overflow: hidden;
        position: absolute;
        white-space: normal;
        background: ${({theme})=>theme.pallete.background.default};
    }
    .rs-table-cell.first {
        border-left-width: 0;
    }
    .rs-table-cell-wrap1 {
        display: table;
    }
    .rs-table-cell-wrap2 {
        display: table-row;
    }
    .rs-table-cell-wrap3 {
        display: table-cell;
        vertical-align: middle;
    }
    .rs-table-cell-content {
        padding: 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
    .rs-table-cell-header-sortable {
        cursor: pointer;
    }
    .rs-table-cell-header-sort-wrapper {
        display: inline-block;
    }
    .rs-table-column-resize-spanner {
        height: 36px;
        width: 6px;
        z-index: 3;
        position: absolute;
        cursor: ew-resize !important;
        outline: none;
    }
    .rs-table-column-resize-spanner:hover {
        background: #34c3ff;
    }
    .rs-table-cell-group-fixed-left {
        position: absolute;
        z-index: 4;
        background: ${({theme})=>theme.pallete.background.paper};
    }
    .rs-table-cell-group-fixed-right {
        position: absolute;
        z-index: 4;
        background: ${({theme})=>theme.pallete.background.paper};
    }
    .rs-table-cell-group-left-shadow {
        box-shadow: 3px 0px 5px rgba(9, 9, 9, 0.08);
    }
    .rs-table-cell-group-shadow,
    .rs-table-cell-group-right-shadow {
        box-shadow: -3px 0px 5px rgba(9, 9, 9, 0.08);
    }
    .rs-table-mouse-area {
        display: none;
        background: #34c3ff;
        left: -1px;
        top: 0;
        position: absolute;
        width: 1px;
        z-index: 6;
    }
    .rs-table-cell-bordered .rs-table-cell {
        border-right: 1px solid ${({theme})=>theme.pallete.background.paper};
    }
    .rs-table-word-wrap .rs-table-cell-content {
        white-space: normal;
    }
    .rs-table-row-expanded {
        position: absolute;
        height: 46px;
        bottom: 0;
        width: 100%;
        z-index: 4;
        border-top: 1px solid ${({theme})=>theme.pallete.background.paper};
        padding: 10px;
        background: ${({theme})=>theme.pallete.background.paper};
    }
    .rs-table-loader-wrapper {
        visibility: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);
    }
    .rs-table-loader {
        width: 100%;
        text-align: center;
        top: 50%;
        position: absolute;
        margin-top: -20px;
        line-height: 40px;
    }
    .rs-table-loader-icon {
        width: 18px;
        height: 18px;
        display: inline-block;
        position: relative;
        margin-right: 12px;
        padding-top: 3px;
    }
    .rs-table-loader-icon::before,
    .rs-table-loader-icon::after {
        width: 18px;
        height: 18px;
    }
    .rs-table-loader-icon::before,
    .rs-table-loader-icon::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        display: block;
        border-radius: 50%;
    }
    .rs-table-loader-icon::before {
        border: 3px solid rgba(247, 247, 250, 0.8);
    }
    .rs-table-loader-icon::after {
        border-width: 3px;
        border-style: solid;
        border-color: #a6a6a6 transparent transparent;
        animation: loaderSpin 0.6s infinite linear;
    }
    .rs-table-loading .rs-table-loader-wrapper {
    
    }
    .rs-table-cell-expand-icon {
        cursor: pointer;
        outline: none;
    }
    .rs-table-cell-expand-wrapper {
        margin-right: 10px;
        display: inline-block;
        cursor: pointer;
    }
    .rs-table-scrollbar {
        background: rgba(45, 45, 45, 0.05);
        position: absolute;
    }
    .rs-table-scrollbar-active {
        background: rgba(45, 45, 45, 0.1);
    }
    .rs-table-scrollbar-hide {
        display: none;
    }
    .rs-table-scrollbar-handle {
        position: absolute;
        background: rgba(45, 45, 45, 0.5);
        border-radius: 4px;
    }
    .rs-table-scrollbar-horizontal {
        width: 100%;
        height: 10px;
        bottom: 2px;
    }
    .rs-table-scrollbar-horizontal.fixed {
        position: fixed;
    }
    .rs-table-scrollbar-horizontal .rs-table-scrollbar-handle {
        height: 8px;
        left: 0px;
        top: 1px;
    }
    .rs-table-scrollbar-horizontal .rs-table-scrollbar-pressed,
    .rs-table-scrollbar-horizontal:hover {
        height: 14px;
    }
    .rs-table-scrollbar-horizontal .rs-table-scrollbar-pressed .rs-table-scrollbar-handle,
    .rs-table-scrollbar-horizontal:hover .rs-table-scrollbar-handle {
        top: 2px;
        height: 10px;
    }
    .rs-table-scrollbar-vertical {
        top: 0;
        right: 0px;
        width: 10px;
        bottom: 2px;
    }
    .rs-table-scrollbar-vertical .rs-table-scrollbar-handle {
        min-height: 20px;
        width: 8px;
        top: 0px;
        left: 1px;
    }
    .rs-table-scrollbar-vertical .rs-table-scrollbar-pressed,
    .rs-table-scrollbar-vertical:hover {
        width: 14px;
    }
    .rs-table-scrollbar-vertical .rs-table-scrollbar-pressed .rs-table-scrollbar-handle,
    .rs-table-scrollbar-vertical:hover .rs-table-scrollbar-handle {
        left: 2px;
        width: 10px;
    }
    .rs-table-column-group {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
    }
    .rs-table-column-group-header {
        border-bottom: 1px solid ${({theme})=>theme.pallete.background.paper};
        position: absolute;
        width: 100%;
    }
    .rs-table-column-group-header-content {
        display: table-cell;
        padding: 8px;
    }
    .rs-table-column-group-cell {
        position: absolute;
        border-right: 1px solid ${({theme})=>theme.pallete.background.paper};
    }
`