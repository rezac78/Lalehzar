import React from 'react';
import ImagePart from '@/components/Shared/PartImag/PartImage';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Custom500() {
        const router = useRouter();
        const { redirect }: any = router.query;
        return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4">
                        <div className="text-center max-w-lg mx-auto">
                                <div className="mb-8">
                                        <ImagePart src="/500.webp" width={600} height={400} className="shadow-lg rounded-lg mx-auto" />
                                </div>
                                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">خطا از سمت سرور است</h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        ما بسیار  متاسفیم. لطفاً بعداً دوباره امتحان کنید یا به صفحه قبلی بازگردید.
                                </p>
                                {redirect && (
                                        <Link href={decodeURIComponent(redirect)}>
                                                <span className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors cursor-pointer">
                                                        به صفحه قبل برگردید
                                                </span>
                                        </Link>
                                )}
                        </div>
                </div>
        );
};