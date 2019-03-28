import * as React from 'react';
import { Component } from 'react';
import { Content } from '../components/content/content';
import { Header } from '../components/header/header';
import { Main } from './style';

export default class App extends Component {
    public render() {
        return (
            <Main>
                <Header />
                <Content />
            </Main>
        );
    }
}