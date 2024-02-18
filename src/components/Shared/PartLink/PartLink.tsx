import Link from 'next/link';
interface LinkProps {
        Href: string;
        className?: string;
        Title?: string;
        children?: React.ReactNode;
        target?: string;
        IdName?: string;
}
export default function PartLink(props: LinkProps) {
        return (
                <Link aria-label={props.IdName} target={props.target ? "_blank" : undefined} className={props.className} href={props.Href}>
                        {props.children}
                </Link>
        );
}