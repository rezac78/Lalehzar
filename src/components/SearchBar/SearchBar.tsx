import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import PartInputs from '../Shared/PartInputs/PartInputs';
import PartButton from '../Shared/PartButton/PartButton';
export default function SearchBar() {
        return (
                <div className="flex items-center justify-center ">
                        <div className="flex border border-Highlights rounded-lg w-auto">
                                <PartInputs className="px-1 sm:px-4 py-2 w-auto md:w-96 bg-backgroundColor border-none focus:outline-none focus:ring-2 focus:ring-Highlights focus:bg-backgroundColor" placeholder="جست و جو ...." type="text" Type={'search'} />
                                <PartButton className="flex items-center justify-center px-4 border-none rounded-l-lg bg-Buttons hover:bg-ButtonHover">
                                        <MagnifyingGlassIcon className="h-4 w-4 text-Text" />
                                </PartButton>
                        </div>
                </div>
        );
}
