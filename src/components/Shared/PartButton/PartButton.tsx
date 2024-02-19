interface ButtonProps {
        Title?: string;
        className?: string;
        children?: React.ReactNode;
        IdName?: string;
        Click?: () => void| undefined;
}
export default function PartButton(props: ButtonProps) {
        return (
                <button aria-label={props.IdName} className={props.className} onClick={props.Click}>
                        {props.children}
                </button>
        );
}