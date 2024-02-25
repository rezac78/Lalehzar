import { PuzzlePieceIcon, Bars3Icon } from '@heroicons/react/24/solid'
import PartImage from '../Shared/PartImag/PartImage';
import PartLink from '../Shared/PartLink/PartLink';
import PartButton from '../Shared/PartButton/PartButton';
import { navbar } from "../../Event/Event";
import { useState } from 'react';
export default function Navbar() {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
        return (
                <nav className="bg-navbarFooterColor shadow-lg">
                        <div className="max-w-6xl mx-auto px-4">
                                <div className="flex justify-between">
                                        <div className="flex space-x-7">
                                                <div>
                                                        <PartLink Href={'/'} className="flex items-center py-4">
                                                                <PartImage src="/Logo.png" width={75} height={75} />
                                                                <span className="font-semibold text-linkColor text-lg px-2">لاله زار</span>
                                                        </PartLink>
                                                </div>
                                                <div className="hidden md:flex items-center space-x-1">
                                                        <PartLink Href={'/aboutus'} className="py-4 px-2 text-linkColor hover:text-ButtonHover font-semibold">درباره ما</PartLink>
                                                        <PartLink Href={'/contactus'} className="py-4 px-2 text-linkColor hover:text-ButtonHover font-semibold">ارتباط با ما</PartLink>
                                                </div>
                                        </div>
                                        <div className="hidden md:flex items-center space-x-3 ">
                                                <PartLink  Href={'#'} className="py-2 px-2 flex items-center">
                                                        <PuzzlePieceIcon className="h-5 w-5 text-linkColor hover:text-ButtonHover" />
                                                </PartLink>
                                        </div>
                                        <div className="md:hidden flex items-center">
                                                <PartButton IdName={'Bars3Icon'} Click={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="outline-none mobile-menu-button">
                                                        <Bars3Icon className="h-7 w-7 text-linkColor hover:text-ButtonHover" />
                                                </PartButton>
                                        </div>
                                </div>
                        </div>
                        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
                                <ul className="px-5">
                                        {navbar.map((e, i) => (
                                                <li className="py-2" key={i}><a href={e.Link} className="block text-sm px-2 py-4 text-linkColor hover:bg-ButtonHover transition duration-300">{e.name}</a></li>
                                        ))}
                                </ul>
                        </div>
                </nav >
        );
}