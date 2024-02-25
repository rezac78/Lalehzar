import React, { useEffect, useState } from 'react';
import PartButton from '@/components/Shared/PartButton/PartButton';
import { PutWeekDate } from "@/services/SettingsService";
interface DashSettingProps {
        initialData: any;
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function WeekSetting({ initialData, Message, SuccessMessage, Success }: DashSettingProps) {
        const [editMode, setEditMode] = useState(false);
        const [editedHours, setEditedHours] = useState(initialData ? initialData.regularHours : []);
        useEffect(() => {
                if (initialData && initialData.regularHours) {
                        setEditedHours(initialData.regularHours);
                }
        }, [initialData]);
        const handleEditToggle = () => setEditMode(!editMode);
        const handleHoursChange = (dayIndex: number, slotIndex: string | number, field: string, value: string) => {
                const updatedHours = [...editedHours];
                updatedHours[dayIndex].slots[slotIndex][field] = value;
                setEditedHours(updatedHours);
        };
        const token = localStorage.getItem("token");
        const handleSubmit = async () => {
                const response = await PutWeekDate({ regularHours: editedHours }, token);
                console.log(response)
                setEditMode(false);
                SuccessMessage(response.success);
                Success(response.message);
                Message(true);
                setTimeout(() => {
                        Message(false);
                }, 4000);
        };
        return (
                <div className={`${editMode ? "w-full" : "w-full md:w-1/2 lg:w-1/3"} mx-auto p-3 text-center shadow-md rounded`} style={{ backgroundColor: "#F5F5DC" }}>
                        <div className="flex flex-col items-center justify-center space-y-2">
                                {editedHours?.map((day: any, dayIndex: number) => (
                                        <div key={dayIndex} className="flex flex-col md:flex-row justify-between items-center w-full px-2 py-2" style={{ backgroundColor: "#D3D3D3", color: "#6F4E37" }}>
                                                <span className="font-medium text-sm mb-2 md:mb-0">{day.day}:</span>
                                                {editMode ? (
                                                        day.slots.map((slot: any, slotIndex: number) => (
                                                                <div key={slotIndex} className="flex space-x-2 justify-center">
                                                                        <input
                                                                                type="time"
                                                                                value={slot.open}
                                                                                onChange={(e) => handleHoursChange(dayIndex, slotIndex, 'open', e.target.value)}
                                                                                className="text-sm p-2 rounded border border-gray-300"
                                                                        />
                                                                        <span>-</span>
                                                                        <input
                                                                                type="time"
                                                                                value={slot.close}
                                                                                onChange={(e) => handleHoursChange(dayIndex, slotIndex, 'close', e.target.value)}
                                                                                className="text-sm p-2 rounded border border-gray-300"
                                                                        />
                                                                </div>
                                                        ))
                                                ) : (
                                                        <span className="text-sm">
                                                                {day.slots.map((slot: { open: any; close: any; }) => `${slot.open} - ${slot.close}`).join(', ')}
                                                        </span>
                                                )}
                                        </div>
                                ))}
                        </div>
                        {editMode && (
                                <PartButton
                                        Click={handleSubmit}
                                        className="px-6 py-2 mx-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
                                >
                                        ذخیره
                                </PartButton>
                        )}
                        <PartButton
                                Click={handleEditToggle}
                                className={`px-6 py-2 mt-4 ${editMode ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-lg`}
                        >
                                {editMode ? 'لغو' : 'ویرایش'}
                        </PartButton>
                </div>

        );
};