import { PlusIcon } from '@heroicons/react/24/solid';
import PartImage from '../Shared/PartImag/PartImage';
import PartButton from '../Shared/PartButton/PartButton';
import { Menu, Hashtag } from '@/types/auth';
interface CartSectionsProps {
        Data: Menu[];
        Hashtag: Hashtag[];
}
export default function CartSections(props: CartSectionsProps) {
        const renderProductsByHashtag = (hashtag: string) => {
                return props.Data
                        .filter(product => product.hashtags.includes(hashtag))
                        .map(product => (
                                <div key={product._id} className="flex flex-wrap w-11/12 sm:w-8/12 md:w-2/5 xl:w-[30%] bg-cardBackgroundColor shadow-lg rounded-lg overflow-hidden">
                                        <div className="w-1/3 flex justify-center">
                                                <div className="aspect-w-1 aspect-h-1 w-full relative">
                                                        <PartImage src={product.photo} className="absolute w-11/12 h-full" width={800} height={500} />
                                                </div>
                                        </div>
                                        <div className="w-2/3 p-4 flex flex-col justify-between">
                                                <div>
                                                        <h2 className="text-lg font-bold text-titleColor">{product.title}</h2>
                                                        <p className="text-sm text-textColor">{product.description}</p>
                                                </div>
                                                <div className="flex justify-between items-end mt-4">
                                                        <span className="text-lg font-bold text-textColor">{product.price}</span>
                                                        <PartButton className="text-white bg-buttonColor hover:bg-buttonHoverColor rounded-full p-2">
                                                                <PlusIcon className="h-5 w-5" />
                                                        </PartButton>
                                                </div>
                                        </div>
                                </div>
                        ));
        };
        return (
                <div className="my-10">
                        {props.Hashtag.map(hashtag => (
                                <div className="my-10" id={hashtag.hashtag} key={hashtag._id}>
                                        <h2 className="text-xl font-bold my-4 mx-5 sm:mx-10 text-titleColor">{hashtag.hashtag}</h2>
                                        <div className="flex flex-wrap justify-center gap-4">
                                                {renderProductsByHashtag(hashtag.hashtag)}
                                        </div>
                                </div>
                        ))}
                </div>
        );
}
