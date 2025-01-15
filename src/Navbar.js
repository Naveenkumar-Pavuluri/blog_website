import { Link } from 'react-router-dom'

const Navbar = () => {
    const links = "navbar-brand";
    const navItemStyle = {
        color: 'white',
        fontSize: '1.25rem',
        marginLeft: '20px', 
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className={links}>The Blog Post</span>
                <div className="ms-auto d-flex align-items-center">
                    <Link to="/" style={navItemStyle}>Home</Link>
                    <Link to="/create" style={navItemStyle}>New Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
