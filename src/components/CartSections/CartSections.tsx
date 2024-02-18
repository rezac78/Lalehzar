import { PlusIcon } from '@heroicons/react/24/solid';
import PartImage from '../Shared/PartImag/PartImage';
import PartButton from '../Shared/PartButton/PartButton';

export default function CartSections() {
        const products = [
                {
                        id: 1,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        hashTag: ["پرطرفدارها", "قهوه"],
                        description: "اسپرسو",
                        price: "100,000 تومان"
                },
                {
                        id: 2,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        hashTag: ["قهوه"],
                        description: "اسپرسو",
                        price: "100,000 تومان"
                },
                {
                        id: 3,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        hashTag: ["پرطرفدارها", "زیپ کاپ"],
                        description: "اسپرسو",
                        price: "100,000 تومان"
                },
                {
                        id: 4,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        hashTag: ["پرطرفدارها", "زیپ کاپ"],
                        description: "اسپرسو",
                        price: "100,000 تومان"
                }
        ];
        const hashtags = ["پرطرفدارها", "زیپ کاپ", "قهوه"];
        const renderProductsByHashtag = (hashtag: string) => {
                return products
                        .filter(product => product.hashTag.includes(hashtag))
                        .map(product => (
                                <div key={product.id} className="flex flex-wrap w-11/12 md:w-2/5 xl:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden">
                                        <PartImage src={product.imageUrl} className="w-1/3 md:w-1/3" width={500} height={500} />
                                        <div className="w-2/3 p-4 flex flex-col justify-between">
                                                <div>
                                                        <h2 className="text-lg font-bold">{product.name}</h2>
                                                        <p className="text-sm text-gray-600">{product.description}</p>
                                                </div>
                                                <div className="flex justify-between items-end mt-4">
                                                        <span className="text-lg font-bold">{product.price}</span>
                                                        <PartButton className="text-Text bg-Buttons hover:bg-ButtonHover rounded-full p-2">
                                                                <PlusIcon className="h-5 w-5" />
                                                        </PartButton>
                                                </div>
                                        </div>
                                </div>
                        ));
        };
        return (
                <div className="my-10">
                        {hashtags.map(hashtag => (
                                <div className="my-10" key={hashtag}>
                                        <h2 className="text-xl font-bold my-4 mx-5 sm:mx-10 text-Highlights">{hashtag}</h2>
                                        <div className="flex flex-wrap justify-center gap-4">
                                                {renderProductsByHashtag(hashtag)}
                                        </div>
                                </div>
                        ))}
                </div>
        );
}
