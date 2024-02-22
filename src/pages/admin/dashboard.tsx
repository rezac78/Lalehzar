import AdminDash from "@/components/AdminDash/AdminDash";
import LoadingPage from "@/components/Shared/Loading/Loading";
import useAccess from "@/hooks/useAccess";
import { Menu } from '../../types/auth';
import { MenuAllData } from "@/services/MenuService";
import { GetServerSidePropsContext } from "next";
export default function AdminDashboard({ MenuData }: { MenuData: Menu[] }) {
        const { loading } = useAccess();
        if (loading) {
                return <LoadingPage />;
        }
        return <AdminDash MenusData={MenuData} />
};
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        try {
                const menusData = await MenuAllData();
                if (!menusData) {
                        throw new Error('Failed to fetch menu data');
                }
                return { props: { MenuData: menusData.data } };
        } catch (error) {
                const originalUrl = context.resolvedUrl;
                return {
                        redirect: {
                                destination: `/admin/dashboard/500?redirect=${encodeURIComponent(originalUrl)}`,
                                permanent: false,
                        },
                };
        }
};