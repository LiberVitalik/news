import * as React from 'react';
import { Button } from '../../theme/button/Button';

export class User extends React.Component {

    public render(): React.ReactNode {
        return (
            <>
                <Button>
                    Sign in
                </Button>
            </>
        );
    }
}