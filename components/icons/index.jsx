import Svg, { Defs, Image, Path, Pattern, Rect, Use, Circle } from "react-native-svg";

export const IconPlay = () => {
    return (
        <Svg width="11" height="15" viewBox="0 0 11 15" fill="none">
            <Path d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z" fill="#021123"/>
        </Svg>
    )
}

export const IconPause = () => {
    return (
        <Svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z" fill="#021123"/>
        </Svg>
    )
}

export const IconCheck = ({ checked }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="12" fill={checked ? '#00F4BF' : 'white'} />
            <Path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#021123" />
        </Svg>
    )
}

export const IconPencil = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path d="M17.7188 4.03125L15.8906 5.85938L12.1406 2.10938L13.9688 0.28125C14.1562 0.09375 14.3906 0 14.6719 0C14.9531 0 15.1875 0.09375 15.375 0.28125L17.7188 2.625C17.9062 2.8125 18 3.04688 18 3.32812C18 3.60938 17.9062 3.84375 17.7188 4.03125ZM0 14.25L11.0625 3.1875L14.8125 6.9375L3.75 18H0V14.25Z" fill="#021123" />
        </Svg>
    )
}

export const IconTrash = () => {
    return (
        <Svg width="14" height="18" viewBox="0 0 14 18" fill="none">
            <Path d="M13.9844 0.984375V3H0.015625V0.984375H3.48438L4.51562 0H9.48438L10.5156 0.984375H13.9844ZM1 15.9844V3.98438H13V15.9844C13 16.5156 12.7969 16.9844 12.3906 17.3906C11.9844 17.7969 11.5156 18 10.9844 18H3.01562C2.48438 18 2.01562 17.7969 1.60938 17.3906C1.20312 16.9844 1 16.5156 1 15.9844Z" fill="#021123" />
        </Svg>
    )
}

export const FokusLogo = () => {
    return (
        <Svg width="158" height="40" viewBox="0 0 158 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="0.818115" width="156.364" height="40" fill="url(#pattern0_3717_508)"/>
            <Defs>
                <Pattern id="pattern0_3717_508" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <Use xlinkHref="#image0_3717_508" transform="matrix(0.00414938 0 0 0.0162203 0 -0.05149)"/>
                </Pattern>
                <Image id="image0_3717_508" width="241" height="68" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
            </Defs>
        </Svg>
    )
}