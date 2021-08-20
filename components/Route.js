import Link from "next/link";

const Route = ({text, href}) => {
    return (
        <Link href={href} >
            <a className='route'>{text}</a>
        </Link>
    )
}

export default Route;
