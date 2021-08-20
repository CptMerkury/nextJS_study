import s from '../../styles/UserPage.module.scss'

const UserPage = ({ user }) => {
    return (
        <div className={s.page_wrapper}>
            <h1>{user.name}</h1>
            <div>ID : {user.id}</div>
            <div>Username : {user.username}</div>
            <div>Email : {user.email}</div>
        </div>
    );
};

export default UserPage;
