import { Week } from "../../../Event/Event"
export default function PartWeek() {
        return (
                <div className="w-full md:w-1/3 p-2 text-center">
                        <h3 className="font-bold text-lg mb-2">ساعت کاری</h3>
                        <div className="flex flex-col items-center justify-center">
                                {Week.map((e, index) => (
                                        <div key={index} className="flex justify-center items-center w-full">
                                                <span className="mr-2">{e.name} :</span>
                                                <span>{e.time}</span>
                                        </div>
                                ))}
                        </div>
                </div>
        );
}
