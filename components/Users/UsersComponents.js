import s from "../../styles/User.module.scss";
import UserItem from "./UserItem";

const UsersComponents = ({users}) => {

    return (
        <div className={s.users_wrapper}>
            <h1>Users list</h1>
            <ul>
                {users.map(user => {
                    return <UserItem key={user.id} user={user}/>
                })}
            </ul>
        </div>
    );
};

export default UsersComponents;
