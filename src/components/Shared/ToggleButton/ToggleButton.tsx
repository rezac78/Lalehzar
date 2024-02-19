import { useState } from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
export default function ToggleButton({ toggle, available }: any) {
        return (
                <div className="flex items-center justify-between mt-4">
                        <label htmlFor="available" className="block text-right text-titleColor text-sm font-bold mb-2">
                                موجود بودن:
                        </label>
                        <button
                                type="button"
                                onClick={toggle}
                                className={`flex items-center justify-center w-16 h-10 rounded-full font-medium focus:outline-none transition-colors ${available ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                        >
                                {available ? (
                                        <CheckIcon className="w-6 h-6 text-white" />
                                ) : (
                                        <XMarkIcon className="w-6 h-6 text-white" />
                                )}
                        </button>
                </div>
        );
};
