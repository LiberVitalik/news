interface StateColorProps {
    State: {
        Error: string;
        Active: string;
    };
}

interface TextColorProps {
    Gray: {
        dark: '#333';
        light: '#ccc';
        middle: '#666';
        soft: '#999';
    };
}

interface BackgroundColorProps {
    Background: {
        dark: '#263238';
        light: '#fefefe';
    };
}

export { TextColorProps, StateColorProps, BackgroundColorProps };