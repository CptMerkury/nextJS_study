import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import UserPage from "../../components/Users/UserPage";
import MainContainer from "../../components/MianConrainer";

export default function ({user}) {

    const {query} = useRouter();

    return (
        <MainContainer keywords={'users, json, jsonplaceholder'}>
            <UserPage queryId={query.id} user={user}/>
        </MainContainer>
    )
}

export async function getServerSideProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}, // will be passed to the page component as props
    }
}
