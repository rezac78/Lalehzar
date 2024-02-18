import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import PartButton from '../Shared/PartButton/PartButton';
import PartLink from '../Shared/PartLink/PartLink';

export default function HashTagBar() {
        const scrollContainer = useRef<HTMLDivElement>(null);
        const [isScrollable, setIsScrollable] = useState(false);
        const [selectedHashtag, setSelectedHashtag] = useState<string>('پرطرفدار');
        useEffect(() => {
                const checkScrollability = () => {
                        if (scrollContainer.current) {
                                const { scrollWidth, clientWidth } = scrollContainer.current;
                                const scrollable = scrollWidth > clientWidth;
                                setIsScrollable(scrollable);
                        }
                };
                checkScrollability();

                window.addEventListener('resize', checkScrollability);

                return () => window.removeEventListener('resize', checkScrollability);
        }, []);
        const scroll = (direction: 'left' | 'right') => {
                if (scrollContainer.current) {
                        const scrollAmount = direction === 'left' ? -200 : 200;
                        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
        };
        const hashtags = ["پرطرفدار", "زیپ کاپ", "قهوه", "گالن", "قهوه/سرد", "نوشیدنی کودم"];
        const handleHashtagClick = (hashtag: string) => {
                setSelectedHashtag(hashtag);
        };
        return (
                <div className="flex w-full md:w-10/12 m-auto items-center justify-center my-10 relative">
                        {isScrollable && (
                                <PartButton Click={() => scroll('left')} className="absolute left-0 z-10">
                                        <ChevronLeftIcon className="h-8 w-8 text-black" />
                                </PartButton>
                        )}
                        <div className="flex w-10/12 md:w-11/12 m-auto items-center justify-center my-10 relative">
                                <div className="flex flex-nowrap overflow-x-auto space-x-2 scrollbar-hide" ref={scrollContainer} style={{ scrollBehavior: 'smooth' }}>
                                        {hashtags.map((hashtag) => (
                                                <PartLink key={hashtag} Href={`#${hashtag}`} Click={() => handleHashtagClick(hashtag)} className={`px-4 py-2 text-black rounded-full transition duration-300 ease-in-out whitespace-nowrap ${selectedHashtag === hashtag ? 'text-Highlights' : 'hover:bg-opacity-80'}`}>
                                                        {hashtag}
                                                </PartLink>
                                        ))}
                                </div>
                        </div>
                        {isScrollable && (
                                <PartButton Click={() => scroll('right')} className="absolute right-0 z-10">
                                        <ChevronRightIcon className="h-8 w-8 text-black" />
                                </PartButton>
                        )}
                </div>
        );
}