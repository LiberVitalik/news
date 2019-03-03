import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/Header';
import { Modal } from '../components/modal/Modal';
import { Main } from './style';

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