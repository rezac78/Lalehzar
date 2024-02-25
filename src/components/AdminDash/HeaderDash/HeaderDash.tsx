import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import PartLink from '@/components/Shared/PartLink/PartLink';

interface HeaderDashProps {
        HeadTitle: string;
        HeadLink: string;
        Type: string
}
export default function HeaderDash(props: HeaderDashProps) {
        return (
                <header className="bg-white shadow">
                        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-2 flex justify-between items-center">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{props.HeadTitle}</h1>
                                {props.Type === "home" ? null : <PartLink IdName="PlusIcon" className="" Href={props.HeadLink}>
                                        <PlusIcon className="text-white w-6 h-6 bg-green-500 rounded-full" />
                                </PartLink>}
                        </div>
                </header>
        )
}