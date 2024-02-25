import React from 'react';
import { OpeningHours } from "@/types/auth";

interface PartWeekProps {
        WeekData: OpeningHours;
}

export default function PartWeek({ WeekData }: PartWeekProps) {
        return (
                <div className="w-full md:w-1/3 xl:w-1/4 p-3 text-center bg-backgroundColor shadow-md rounded">
                        <h3 className="font-semibold text-md mb-3 text-titleColor">ساعت کاری</h3>
                        <div className="flex flex-col items-center justify-center space-y-1">
                                {WeekData.regularHours.map((day, index) => (
                                        <div key={index} className="flex justify-between items-center text-textColor w-full px-3 md:px-1 lg:px-3 py-1 bg-cardBackgroundColor rounded">
                                                <span className="font-medium text-xs text-coffee">{day.day}:</span>
                                                <span className="text-xs text-gray-500">
                                                        {day.slots.map(slot => `${slot.open} - ${slot.close}`).join(', ')}
                                                </span>
                                        </div>
                                ))}
                        </div>
                </div>


        );
}
