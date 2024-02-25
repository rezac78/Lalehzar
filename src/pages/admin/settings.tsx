import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import { useEffect, useState } from 'react';
import { GetUser, GetWeekDate } from '@/services/SettingsService';
import AdminSetting from '@/components/AdminDash/AdminSetting';
export default function Settings() {
        const { loading } = useAccess();
        const [userInfo, setUserInfo] = useState();
        const [weekData, setWeekData] = useState();
        useEffect(() => {
                const fetchData = async () => {
                        const token = localStorage.getItem("token");
                        const data = await GetUser(token);
                        const WeekData = await GetWeekDate();
                        setUserInfo(data);
                        setWeekData(WeekData);
                };
                fetchData();
        }, []);
        if (loading) {
                return <LoadingPage />;
        }
        return <AdminSetting Data={userInfo} WeekData={weekData} />;
}