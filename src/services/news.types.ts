export interface NewsItem {
    articles: {
        author: string | undefined;
        description: string;
        publishedAt: string;
        source: {
            id: string;
            name: string;
        };
        title: string;
        url: string;
        urlToImage: string;
    };
}

export interface NewsData {
    articles: NewsItem[];
}