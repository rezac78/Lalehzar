interface InputProps {
        IdName?: string;
        LabelName?: string;
        type: string;
        Register?: any;
        Errors?: any;
        className: string;
        placeholder?: string;
        Type: "search" | 'auth' | 'form';
        index?: number;
        value?: string;
}
export default function PartInputs(props: InputProps) {
        return (
                <>
                        {props.Type === 'search' ? <input type={props.type} className={props.className} placeholder={props.placeholder} />
                                : null
                        }
                </>
        )
}