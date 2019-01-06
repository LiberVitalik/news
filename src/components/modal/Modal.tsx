import * as React from 'react';
import {ModalState} from './ModalState';
import {ModalWrapper} from './style';

export class Modal extends React.Component<ModalState> {
    
    public state: ModalState = {
        isVisible: true
    };

    public render(): React.ReactNode {
        return (
            <>
                {this.state.isVisible && (
                    <ModalWrapper>
                        lol
                    </ModalWrapper>
                )}
            </>
        );
    }
}