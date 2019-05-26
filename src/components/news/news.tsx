import { NewsProps } from './news.types';
import * as React from 'react';
import {
    Author,
    Description,
    NewsHeader,
    NewsLink,
    NewsWrapper,
    PublishedAt, ReadMoreLink,
    ReadMoreWrapper,
    Title
} from './news.style';


export class News extends React.PureComponent<NewsProps> {
    public render() {

        const { author, description, title, publishedAt, urlToImage, url } = this.props.article;

        return (
            <NewsWrapper>
                <NewsHeader urlToImage={urlToImage}>
                    <NewsLink href={url} />
                </NewsHeader>
                {title ? <Title>{title}</Title> : <Title>No title</Title>}
                {description ? <Description>{description}</Description> : <Description>No description</Description>}
                {author ? <Author>{author}</Author> : <Author>No author</Author>}
                {publishedAt ? this.dateConverter(publishedAt) : <PublishedAt>No date</PublishedAt>}
                <ReadMoreWrapper>
                    <ReadMoreLink href={url}>Read More</ReadMoreLink>
                </ReadMoreWrapper>
            </NewsWrapper>
        );
    }

    private dateConverter = (date: string): JSX.Element => {
        const currentDate = new Date(date);
        return <PublishedAt>{currentDate.toDateString()}</PublishedAt>;
    }
}