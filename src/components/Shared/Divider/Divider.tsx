interface DividerProps {
        Message?: string;
}
export default function Divider(props: DividerProps) {
        return (
                <div className="flex items-center text-center my-5">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="mx-4">{props.Message}</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                </div>
        )
}
