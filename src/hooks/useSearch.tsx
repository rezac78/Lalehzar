import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { Hashtag, Menu } from '@/types/auth';
interface useSearchProps {
        menuData: Menu[];
        hashtagData?: Hashtag[];
}
const useSearch = (props: useSearchProps) => {
        const [searchTerm, setSearchTerm] = useState('');
        const [filteredData, setFilteredData] = useState(props.menuData);
        const [filteredHashtags, setFilteredHashtags] = useState(props.hashtagData);

        const handleSearch = useCallback(debounce((currentSearchTerm) => {
                if (!currentSearchTerm.trim()) {
                        setFilteredData(props.menuData);
                        setFilteredHashtags(props.hashtagData);
                } else {
                        const newFilteredData = props.menuData.filter(item =>
                                item.title.toLowerCase().includes(currentSearchTerm.toLowerCase())
                        );
                        setFilteredData(newFilteredData);

                        const searchHashtags = new Set();
                        newFilteredData.forEach(item => {
                                item.hashtags.forEach(tag => {
                                        searchHashtags.add(tag);
                                });
                        });

                        const newFilteredHashtags = props.hashtagData?.filter(hashtag =>
                                searchHashtags.has(hashtag.hashtag)
                        );
                        setFilteredHashtags(newFilteredHashtags);
                }
        }, 500), [props.menuData, props.hashtagData]);

        useEffect(() => {
                handleSearch(searchTerm);
                return () => {
                        handleSearch.cancel();
                };
        }, [searchTerm, handleSearch]);

        return { searchTerm, setSearchTerm, filteredData, filteredHashtags };
};

export default useSearch;
