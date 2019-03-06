import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/Header';
import { Main } from './style';

export default class App extends Component {
    public render() {
        return (
            <Main>
                <Header />
            </Main>
        );
    }
}