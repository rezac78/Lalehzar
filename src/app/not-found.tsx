import React from 'react';
import ImagePart from '@/components/Shared/PartImag/PartImage';
import PartLink from '@/components/Shared/PartLink/PartLink';
export default function Custom404() {
        return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
                        <div className="text-center">
                                <ImagePart src="/notFound.webp" width={600} height={400} className="" />
                                <h1 className="text-6xl font-bold text-white">404</h1>
                                <p className="text-xl mb-4 text-white">.اوپس! اون صفحه ای که میخواید وجود نداره</p>
                                <PartLink Href="/" className="text-blue-600 hover:underline">
                                        برگشت به صفحه اصلی
                                </PartLink>
                        </div>
                </div>
        );
};