import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import PartInputs from '../Shared/PartInputs/PartInputs';
import PartButton from '../Shared/PartButton/PartButton';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { debounce } from 'lodash';
interface SearchProps {
        baseUrl: '/' | '/admin/dashboard';
}
export default function SearchBar(props: SearchProps) {
        const [searchTerm, setSearchTerm] = useState('');
        const router = useRouter();
        const handleSearch = debounce(() => {
                if (!searchTerm.trim()) {
                        router.push(`/`);
                } else {
                        router.push(`/?term=${encodeURIComponent(searchTerm)}`);
                };
        }, 500);
        useEffect(() => {
                handleSearch();
                return () => {
                        handleSearch.cancel();
                };
        }, [searchTerm]);
        return (
                <div className="flex items-center justify-center">
                        <div className="flex border border-buttonColor w-auto rounded-lg">
                                <PartInputs setSearchTerm={setSearchTerm} value={searchTerm} className="px-1 sm:px-4 py-2 w-auto md:w-96 bg-backgroundColor border-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-buttonColor focus:bg-backgroundColor" placeholder="جست و جو ...." type="text" Type={'search'} />
                                <PartButton className="flex items-center justify-center px-4 border-none rounded-l-lg bg-buttonColor hover:bg-buttonHoverColor">
                                        <MagnifyingGlassIcon className="h-4 w-4 text-white" />
                                </PartButton>
                        </div>
                </div>
        );
}
