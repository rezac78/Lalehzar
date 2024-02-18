import { PlusIcon } from '@heroicons/react/24/solid';
import PartImage from '../Shared/PartImag/PartImage';
import PartButton from '../Shared/PartButton/PartButton';

export default function CartSections() {
        const products = [
                {
                        id: 1,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        description: "اسپرسو",
                        price: "100,000 تومان"
                },
                {
                        id: 2,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        description: "اسپرسو",
                        price: "100,000 تومان"
                },
                {
                        id: 3,
                        imageUrl: "/x8rhq2rkrnfd.webp",
                        name: "اسپرسو",
                        description: "اسپرسو",
                        price: "100,000 تومان"
                }
                // Add more products if needed
        ];

        return (
                <div className="flex flex-wrap justify-center gap-4 my-10">
                        {products.map((e) => (
                                <div key={e.id} className="flex flex-wrap w-11/12 md:w-2/5 xl:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden">
                                        <PartImage src={e.imageUrl} className="w-1/3 md:w-1/3" width={500} height={500} />
                                        <div className="w-2/3 p-4 flex flex-col justify-between">
                                                <div>
                                                        <h2 className="text-lg font-bold">{e.name}</h2>
                                                        <p className="text-sm text-gray-600">{e.description}</p>
                                                </div>
                                                <div className="flex justify-between items-end mt-4">
                                                        <span className="text-lg font-bold">{e.price}</span>
                                                        <PartButton className="text-Text bg-Buttons hover:bg-ButtonHover rounded-full p-2">
                                                                <PlusIcon className="h-5 w-5" />
                                                        </PartButton>
                                                </div>
                                        </div>
                                </div>
                        ))}
                </div>

        );
}
