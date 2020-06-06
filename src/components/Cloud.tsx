import React from 'react';
import styled, { keyframes } from 'styled-components';

const flow = keyframes`
    0% {
        transform: translateX(-340px);
    }
    100%{
        transform: translateX(500px);
    }
`;

const StyledCloudSvg = styled.svg`
    animation: ${flow} 15s linear infinite;
    animation-direction: normal;
`;

const StyledPath = styled.path`
    fill: #fff;
    stroke: #a2bcce;
    stroke-miterlimit: 10;
    stroke-width: 2px;
`;

const StyledEllipse = styled.ellipse`
    fill: #fff;
    stroke: #a2bcce;
    stroke-miterlimit: 10;
    stroke-width: 2px;
`;

const StyledRect = styled.ellipse`
    fill: #fff;
    stroke: #a2bcce;
    stroke-miterlimit: 10;
    stroke-width: 2px;
`;
const Cloud: React.FC<{}> = () => {
    return (
        <StyledCloudSvg width="337.457" height="150.707" viewBox="0 0 337.457 150.707">
            <g id="Scenery" transform="translate(0 1)">
                <StyledPath
                    id="패스_57"
                    d="M1616.261,258.031h0a3.147,3.147,0,0,1,3.147-3.147h3.522a3.34,3.34,0,0,0,3.34-3.34h0a3.339,3.339,0,0,0-3.34-3.34h-22.79a3.147,3.147,0,0,1-3.147-3.147h0a3.147,3.147,0,0,1,3.147-3.147h31.574a3.816,3.816,0,0,0,3.815-3.816h0a3.815,3.815,0,0,0-3.815-3.816h-78.575a3.816,3.816,0,0,0-3.815,3.816h0a3.816,3.816,0,0,0,3.815,3.816h21.69a3.147,3.147,0,0,1,3.147,3.147h0a3.148,3.148,0,0,1-3.147,3.147h-12.906a3.339,3.339,0,0,0-3.34,3.34h0a3.34,3.34,0,0,0,3.34,3.34H1602.1a3.147,3.147,0,0,1,3.147,3.147h0a3.147,3.147,0,0,1-3.147,3.146H1501.489a3.34,3.34,0,0,0-3.34,3.34h0a3.341,3.341,0,0,0,3.34,3.341h156.349a3.341,3.341,0,0,0,3.34-3.341h0a3.34,3.34,0,0,0-3.34-3.34h-38.43A3.147,3.147,0,0,1,1616.261,258.031Z"
                    transform="translate(-1474.194 -174.976)"
                />
                <StyledPath
                    id="패스_58"
                    d="M1831.037,113.822h0a3.2,3.2,0,0,1,3.2-3.2h1.246a3.916,3.916,0,0,0,3.916-3.916h0a3.916,3.916,0,0,0-3.916-3.916h-57.932a3.915,3.915,0,0,0-3.916,3.916h0a3.915,3.915,0,0,0,3.916,3.916h36.753a3.2,3.2,0,0,1,3.2,3.2h0a3.2,3.2,0,0,1-3.2,3.2h-6.318a2.848,2.848,0,0,0-2.848,2.848h0a2.848,2.848,0,0,0,2.848,2.848H1865.3a2.848,2.848,0,0,0,2.848-2.848h0a2.848,2.848,0,0,0-2.848-2.848H1834.24A3.2,3.2,0,0,1,1831.037,113.822Z"
                    transform="translate(-1559.478 -102.787)"
                />
                <StyledEllipse
                    id="타원_7"
                    className="scenery-3"
                    cx="2.788"
                    cy="2.788"
                    rx="2.788"
                    ry="2.788"
                    transform="translate(316.055 14.357)"
                />
                <StyledEllipse
                    id="타원_8"
                    className="scenery-3"
                    cx="3.602"
                    cy="3.602"
                    rx="3.602"
                    ry="3.602"
                    transform="translate(61.517 59.696)"
                />
                <StyledRect
                    id="사각형_177"
                    className="scenery-3"
                    width="97.402"
                    height="6.356"
                    rx="3.178"
                    transform="translate(172.457 25.647)"
                />
            </g>
        </StyledCloudSvg>
    );
};

export default Cloud;
