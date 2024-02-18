import PartAddress from "../Shared/PartAddress/PartAddress";
import PartMap from "../Shared/PartMap/PartMap";
import PartWeek from "../Shared/PartWeek/PartWeek";

export default function Footer() {
        return (
                <footer className="w-full bg-navbarFooterColor text-white p-2 sm:p-8">
                        <div className="flex flex-wrap justify-between items-start">
                                <PartMap />
                                <PartAddress />
                                <PartWeek />
                        </div>
                </footer>
        );
}