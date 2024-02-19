import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import PartButton from '../Shared/PartButton/PartButton';
interface LogoutPartProps {
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function Logout(props: LogoutPartProps) {
        const router = useRouter();
        const logout = async () => {
                try {
                        localStorage.removeItem("token");
                        props.SuccessMessage(true);
                        props.Success('خروح موفقیت امیز');
                        props.Message(true);
                        setTimeout(() => {
                                props.Message(false);
                                router.push('/');
                        }, 3000);
                } catch (error) {
                        console.error('Logout failed:', error);
                }
        };
        return (
                <PartButton
                        Click={logout}
                        IdName="logout"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                </PartButton>
        );
};
