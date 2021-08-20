import Link from "next/link";

const UserItem = ({user}) => {
    return (
        <li>
            <Link href={`users/${user.id}`}>
                <a>{user.name}</a>
            </Link>
        </li>
    );
};

export default UserItem;
