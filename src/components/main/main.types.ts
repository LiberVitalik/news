export interface MainState {
    newsName: string;
    articles: ArticlesData[];
}

export interface ArticlesData {
    author?: string;
    content?: string;
    description?: string;
    publishedAt?: string;
    source: {
        id: string;
        name: string;
    };
    title?: string;
    url?: string;
    urlToImage?: string;
}