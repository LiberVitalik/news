import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/header';
import { Main } from '../components/main/main';
import { MainWrapper } from './style';

export default class App extends Component {
    public render() {
        return (
            <MainWrapper>
                <Header />
                <Main />
            </MainWrapper>
        );
    }
}