import Route from "./Route";

const Navbar = () => {
    return (
        <div className='navbar'>
            <Route href={'/'} text={'Home Page'}/>
            <Route href={'/users'} text={'Users Page'}/>
        </div>
    );
};

export default Navbar;
