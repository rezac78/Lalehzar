import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PartContactUs from "@/components/PartContactUs/PartContactUs";
import Alerts from "@/components/Shared/Alert/Alert";
import { GetWeekDate } from "@/services/SettingsService";
import { OpeningHours } from "@/types/auth";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
interface ContactUsProps {
        WeekData: OpeningHours;
}
export default function ContactUs(props: ContactUsProps) {
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        return (
                <div className="">
                        <Navbar />
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <PartContactUs Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
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