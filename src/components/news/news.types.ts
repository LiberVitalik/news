export interface NewsProps {
    article: any;
}

export interface ArticlesData {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}