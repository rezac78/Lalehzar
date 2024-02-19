import EditCoursePart from '@/components/AdminDash/Edite/EditMenu';
import { GetServerSidePropsContext } from "next";
import { MenuData } from '@/services/MenuService';
import { Menu } from '../../../../types/auth';
import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
export default function EditCourse({ initialCourseData }: { initialCourseData: Menu[] }) {
        const { loading } = useAccess();
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <EditCoursePart initialCourseData={initialCourseData} />
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const menuId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const menuData = menuId ? await MenuData(menuId, null) : null;
        return {
                props: { initialCourseData: menuData ? menuData.data : null },
        };
};