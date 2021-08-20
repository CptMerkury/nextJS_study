import Navbar from "../components/Navbar";
import UsersComponents from "../components/Users/UsersComponents";
import MainContainer from "../components/MianConrainer";

export default function Users({users}) {
    return (
        <MainContainer keywords={'users, nextJS'}>
            <UsersComponents users={users}/>
        </MainContainer>
    );
};

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
