import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash'
import DashboardMenu from './Dashboard/Dashboard'
import { Menu } from '../../types/auth';
import SearchBar from '../SearchBar/SearchBar';
interface AdminMenuProps {
        MenusData: Menu[];
}
export default function AdminDash({ MenusData }: AdminMenuProps) {
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
                                <HeaderDash Type="create" HeadTitle="داشبورد" HeadLink="/admin/add-menu" />
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                                <div className="my-10">
                                                        <SearchBar baseUrl="/admin/dashboard" />
                                                </div>
                                                <DashboardMenu initialMenuData={MenusData} />
                                        </div>
                                </main>
                        </div>
                </>
        )
}