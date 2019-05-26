import * as React from 'react';
import { NewsEnum } from '../../services/news.enum';
import { getNewsData } from '../../services/news.service';
import { Menu } from '../menu/menu';
import { ArticlesData, MainState } from './main.types';
import { News } from '../news/news';
import { Content } from '../content/content';

export class Main extends React.Component<{}, MainState> {

    public state: MainState = {
        newsName: '',
        articles: []
    };

    public componentDidUpdate(prevProps: {}, prevState: MainState): void {
        const { newsName } = this.state;
        if (newsName && newsName !== prevState.newsName) {
            this.loadNews();
        }
    }

    public render() {
        return (
            <>
                <Menu newsHandler={this.newsHandler} />
                <Content>
                    {this.renderNews()}
                </Content>
            </>
        );
    };

    private newsHandler = (news: string): void => {
        this.setState({
            newsName: news
        });
    };

    private loadNews = () => {
        const { newsName } = this.state;
        getNewsData(NewsEnum[newsName as keyof typeof NewsEnum]).then(data => {
            return data.status === 'ok' ? data.articles : null;
        }).then((data: ArticlesData[]): void => {
            if (data) {
                this.setState({
                    articles: data
                })
            }
        });
    };

    private renderNews = () => {
        const { articles } = this.state;

        return articles.map((newsData: ArticlesData, index: number) => {
            return (<News article={newsData} key={index} />);
        });
    };
}