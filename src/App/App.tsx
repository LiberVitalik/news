import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/Header';
import { Modal } from '../components/modal/Modal';
import { Main } from './style';

library.add(faUser);

export default class App extends Component {
    public render() {
        return (
            <Main>
                <Header />
                <Modal />
            </Main>
        );
    }
}