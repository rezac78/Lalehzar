import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PartContactUs from "@/components/PartContactUs/PartContactUs";
import Alerts from "@/components/Shared/Alert/Alert";
import { useState } from "react";
export default function ContactUs() {
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        return (
                <div className="">
                        <Navbar />
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <PartContactUs Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                        <Footer />
                </div>
        );
}
