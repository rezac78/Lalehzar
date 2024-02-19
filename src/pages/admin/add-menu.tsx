import AddMenu from '@/components/AdminDash/Add/Menu';
import LoadingPage from '@/components/Shared/Loading/Loading';
import useAccess from '@/hooks/useAccess';
export default function CreateCourse() {
        const { loading } = useAccess();
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <AddMenu />
        )
}