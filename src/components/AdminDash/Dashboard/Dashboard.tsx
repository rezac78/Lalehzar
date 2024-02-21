import React, { useEffect, useState } from 'react';
import Table from '@/components/Shared/Table/Table';
import { Menu } from '../../../types/auth';
import { MenuDeletedData } from '@/services/MenuService';
import Alerts from '@/components/Shared/Alert/Alert';


interface DashboardProps {
        initialMenuData: Menu[];
}

export default function DashboardMenu({ initialMenuData }: DashboardProps) {
        const [MenusData, setMenusData] = useState<Menu[]>(initialMenuData);
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const token = localStorage.getItem("token");
        useEffect(() => {
                setMenusData(initialMenuData);
        }, [initialMenuData]);
        const deleteCourse = async (MenuId: string) => {
                try {
                        const response = await MenuDeletedData(MenuId, token);
                        setMenusData(MenusData.filter(menu => menu._id !== MenuId));
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(response.success);
                        setSuccessMessage(response.message || 'Menu deleted successfully');
                } catch (error) {
                        console.error('Error deleting Menu', error);
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(false);
                        setSuccessMessage('Failed to delete the Menu');
                }
                setTimeout(() => setShowSuccessMessage(false), 5000);
        };
        return (
                <div className="overflow-x-auto w-11/12	m-auto sm:w-full">
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <Table data={MenusData} onItemDelete={deleteCourse} />
                </div>
        );
}
