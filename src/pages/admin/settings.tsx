import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import { useEffect, useState } from 'react';
import { GetUser } from '@/services/SettingsService';
import AdminSetting from '@/components/AdminDash/AdminSetting';
export default function Settings() {
        const { loading } = useAccess();
        const [userInfo, setUserInfo] = useState();
        useEffect(() => {
                const fetchData = async () => {
                        const token = localStorage.getItem("token");
                        const data = await GetUser(token);
                        setUserInfo(data);
                };
                fetchData();
        }, []);
        if (loading) {
                return <LoadingPage />;
        }
        return <AdminSetting Data={userInfo} />;
}