import AdminDash from "@/components/AdminDash/AdminDash";
import LoadingPage from "@/components/Shared/Loading/Loading";
import useAccess from "@/hooks/useAccess";
import { Menu } from '../../types/auth';
import { MenuAllData } from "@/services/MenuService";
export default function AdminDashboard({ MenuData }: { MenuData: Menu[] }) {
        const { loading } = useAccess();
        if (loading) {
                return <LoadingPage />;
        }
        return <AdminDash MenusData={MenuData}/>
};
export const getServerSideProps = async () => {
        const MenuData = await MenuAllData();
        return {
                props: { MenuData: MenuData.data },
        };
};