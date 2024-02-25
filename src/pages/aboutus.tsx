import PartAboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { GetWeekDate } from "@/services/SettingsService";
import { OpeningHours } from "@/types/auth";
import { GetServerSidePropsContext } from "next";
interface AboutUsProps {
        WeekData: OpeningHours;
}
export default function AboutUs(props: AboutUsProps) {
        return (
                <div>
                        <Navbar />
                        <PartAboutUs />
                        <Footer WeekData={props.WeekData} />
                </div>
        );
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        try {
                const WeekData = await GetWeekDate();
                if (!WeekData) {
                        throw new Error('Failed to fetch menu data');
                }
                return { props: { WeekData } };
        } catch (error) {
                const originalUrl = context.resolvedUrl;
                return {
                        redirect: {
                                destination: `/500?redirect=${encodeURIComponent(originalUrl)}`,
                                permanent: false,
                        },
                };
        }
};