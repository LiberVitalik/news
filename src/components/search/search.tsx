import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { FormSearch, SearchField, SearchIcon } from './search.style';

library.add(faSearch);

export class Search extends React.Component {

    public render() {
        return (
            <FormSearch>
                <label>
                    <SearchField type="search" />
                    <SearchIcon icon="search" />
                </label>
            </FormSearch>
        );
    }
}