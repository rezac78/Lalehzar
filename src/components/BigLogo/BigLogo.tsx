import PartImage from "../Shared/PartImag/PartImage";

export default function BigLogo() {
        return (
                <div className="flex flex-col items-center justify-center my-10">
                        <div className="mb-2">
                                <PartImage src="/Logo.png" width={150} height={150} />
                        </div>
                        <h1 className="text-xl font-bold text-titleColor mb-3">کافه لاله زار</h1>
                        <div className="text-base font-semibold text-caramel">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-ping"></span>
                                <span className="px-2 text-textColor">کافه باز است</span>
                        </div>
                </div>
        );
}