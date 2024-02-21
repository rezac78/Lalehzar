import AdminDash from "@/components/AdminDash/AdminDash";
import LoadingPage from "@/components/Shared/Loading/Loading";
import useAccess from "@/hooks/useAccess";
import { Menu } from '../../types/auth';
import { MenuAllData } from "@/services/MenuService";
import { GetServerSidePropsContext } from "next";
import { SearchMenu } from "@/services/SearchService";
export default function AdminDashboard({ MenuData }: { MenuData: Menu[] }) {
        console.log('Fetched Menu Data:', MenuData);
        const { loading } = useAccess();
        if (loading) {
                return <LoadingPage />;
        }
        return <AdminDash MenusData={MenuData} />
};
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const searchTerm = context.query.term;
        try {
                let menusData;
                if (searchTerm) {
                        menusData = await SearchMenu(searchTerm);
                } else {
                        menusData = await MenuAllData();
                }
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