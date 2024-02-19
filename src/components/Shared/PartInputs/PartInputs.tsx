interface InputProps {
        IdName?: string;
        LabelName?: string;
        type: string;
        Register?: any;
        Errors?: any;
        className?: string;
        placeholder?: string;
        Type: "search" | 'auth' | 'form';
        index?: number;
        value?: string;
}
export default function PartInputs(props: InputProps) {
        const uniqueId = props.index !== undefined ? `${props.IdName}-${props.index}` : props.IdName;
        return (
                <div>
                        {props.Type === 'search' ? null : <label htmlFor={uniqueId} className={props.Type === "auth" ? "block text-right text-titleColor text-sm font-bold mb-2" : "block text-sm font-medium text-gray-700 my-2"}>{props.LabelName}</label>}
                        {props.Type === 'search' ? <input type={props.type} className={props.className} placeholder={props.placeholder} />
                                : <input {...props.Register(props.IdName)} id={uniqueId} type={props.type} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        }
                        {props.IdName && props.Errors[props.IdName] && <p className="mt-2 text-sm text-right text-red-600">{props.Errors[props.IdName]?.message}</p>}
                </div>
        )
}