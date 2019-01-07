interface StateColorProps {
    State: {
        error: string;
        active: string;
    };
}

interface TextColorProps {
    Gray: {
        dark: string;
        light: string;
        middle: string;
        soft: string;
    };
}

interface BackgroundColorProps {
    Background: {
        dark: string;
        light: string;
    };
}

export { TextColorProps, StateColorProps, BackgroundColorProps };