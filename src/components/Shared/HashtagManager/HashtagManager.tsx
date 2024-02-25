import { PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import PartInputs from '../PartInputs/PartInputs';
import PartButton from '../PartButton/PartButton';
interface HashtagManagerProps {
        setNewHashtag: (value: string) => void;
        newHashtag: string;
        removeHashtag: (hashtag: string) => void;
        addHashtag: (e: React.FormEvent) => void;
        hashtags: string[];
        Register?: any;
        Errors?: any;
}
export default function HashtagManager(props: HashtagManagerProps) {
        return (
                <div>
                        <span className="block text-sm font-medium text-gray-700 my-2">هشتگ</span>
                        <div className="flex items-center justify-left">
                                <input
                                        type="text"
                                        value={props.newHashtag}
                                        onChange={(e) => props.setNewHashtag(e.target.value)}
                                        placeholder="اضافه کردن هشتگ"
                                        className="mt-1 block w-6/12 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                <div className="mx-2">
                                        <button
                                                aria-label="PlusCircleIcon"
                                                type="button"
                                                onClick={props.addHashtag}
                                                className="flex items-center justify-center px-1 border-none rounded-full py-1 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                                <PlusCircleIcon className="h-6 w-6 text-white" />
                                        </button>
                                </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1">
                                {props.hashtags.map((hashtag, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-full">
                                                {hashtag}
                                                <PartButton IdName="times" Click={() => props.removeHashtag(hashtag)} className="text-white">&times;</PartButton>
                                        </div>
                                ))}
                        </div>
                        <p className="mt-2 text-sm text-right text-red-600">{props.Errors.hashtags?.message}</p>
                </div>
        );
};