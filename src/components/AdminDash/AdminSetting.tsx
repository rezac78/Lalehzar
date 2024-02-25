import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash';
import ChangPassSetting from './ChangPassSetting/ChangPassSetting';
import { useState } from 'react';
import Alerts from '../Shared/Alert/Alert';
import Divider from '../Shared/Divider/Divider';
import ChangEmailSetting from './ChangEmailSetting/ChangEmailSetting';
import WeekSetting from './weekSetting/weekSetting';
export default function AdminSetting({ Data, WeekData }: any) {
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        return (
                <>
                        <div className="min-h-full">
                                <Disclosure as="nav" className="bg-gray-800">
                                        {({ open }) => (
                                                <>
                                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                <NavDash open={open} />
                                                        </div>
                                                </>
                                        )}
                                </Disclosure>
                                <HeaderDash Type="home" HeadTitle="تنظیمات" HeadLink="/" />
                                {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 px-2 sm:px-8 lg:px-8">
                                                <Divider Message="تغیر رمز" />
                                                <ChangPassSetting initialData={Data} Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                                <Divider Message="تغیر ایمیل" />
                                                <ChangEmailSetting initialData={Data} Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                                <Divider Message="ساعت کاری" />
                                                <WeekSetting initialData={WeekData} Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                        </div>
                                </main>
                        </div>
                </>
        )
}