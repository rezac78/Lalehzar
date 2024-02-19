import React, { useState } from 'react';
import Table from '@/components/Shared/Table/Table';
import { Menu } from '../../../types/auth';
import { MenuDeletedData } from '@/services/MenuService';
import Alerts from '@/components/Shared/Alert/Alert';


interface DashboardProps {
        initialCoursesData: Menu[];
}

export default function DashboardMenu({ initialCoursesData }: DashboardProps) {
        const [coursesData, setCoursesData] = useState<Menu[]>(initialCoursesData);
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const token = localStorage.getItem("token");
        const deleteCourse = async (MenuId: string) => {
                try {
                        const response = await MenuDeletedData(MenuId, token);
                        setCoursesData(coursesData.filter(menu => menu._id !== MenuId));
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
                <div className="overflow-x-auto">
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <Table type="course" data={coursesData} onItemDelete={deleteCourse}/>
                </div>
        );
}
