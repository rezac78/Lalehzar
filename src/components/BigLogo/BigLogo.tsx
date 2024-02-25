import PartImage from "../Shared/PartImag/PartImage";
import { useEffect, useState } from "react";
interface BigLogoProps {
        regularHours: any;
}

export default function BigLogo(props: BigLogoProps) {
        const [isOpen, setIsOpen] = useState(false);

        useEffect(() => {
                const checkIfOpen = () => {
                        const now = new Date();
                        const currentDayName = now.toLocaleDateString('fa-IR', { weekday: 'long' }); // "شنبه", "یکشنبه", etc.
                        const currentTime = now.getHours() + ':' + now.getMinutes();

                        const todayHours = props.regularHours.find((day: { day: string; }) => day.day === currentDayName);

                        if (todayHours) {
                                const isOpenNow = todayHours.slots.some((slot: any) => {
                                        const [openHour, openMinute] = slot.open.split(':');
                                        const [closeHour, closeMinute] = slot.close.split(':');
                                        const openTime = new Date(now.setHours(openHour, openMinute, 0));
                                        const closeTime = new Date(now.setHours(closeHour, closeMinute, 0));
                                        const nowDate = new Date();
                                        return nowDate >= openTime && nowDate <= closeTime;
                                });

                                setIsOpen(isOpenNow);
                        }
                };

                checkIfOpen();
                const interval = setInterval(checkIfOpen, 60000);

                return () => clearInterval(interval);
        }, [props.regularHours]);
        return (
                <div className="flex flex-col items-center justify-center my-10">
                        <div className="mb-2">
                                <PartImage src="/Logo.png" width={150} height={150} />
                        </div>
                        <h1 className="text-xl font-bold text-titleColor mb-3">کافه لاله زار</h1>
                        <div className={`text-base font-semibold ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-green-600 animate-ping' : 'bg-red-600 animate-ping'}`}></span>
                                <span className="px-2">{isOpen ? 'کافه باز است' : 'کافه بسته است'}</span>
                        </div>
                </div>
        );
}