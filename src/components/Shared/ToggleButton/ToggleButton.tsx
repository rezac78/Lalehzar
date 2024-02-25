import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import PartButton from "../PartButton/PartButton";
export default function ToggleButton({ toggle, available }: any) {
        return (
                <div className="flex items-center justify-between mt-4">
                        <label htmlFor="available" className="block text-right text-titleColor text-sm font-bold mb-2">
                                موجود بودن:
                        </label>
                        <PartButton
                                Click={toggle}
                                IdName="CheckIcon"
                                className={`flex items-center justify-center w-16 h-10 rounded-full font-medium focus:outline-none transition-colors ${available ? 'bg-green-600' : 'bg-red-600'
                                        }`}
                        >
                                {available ? (
                                        <CheckIcon className="w-6 h-6 text-white" />
                                ) : (
                                        <XMarkIcon className="w-6 h-6 text-white" />
                                )}
                        </PartButton>
                </div>
        );
};
