import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../data'
import '../assect/home.css';


function Home() {
    var i = 0;

    var navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerpage] = useState(2);
    const clickGoogleMap = (address) => {
        window.location.href = 'https://www.google.com/maps/place/' + address
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    const currentPosts = User.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(User.length / postsPerpage); i++) {
        pageNumbers.push(i);
    }

    return (
        <table>
            <button> <Link to="/createUser" > Create User</Link></button>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
            {
                currentPosts.map(u => (
                    <tr key={u.id} >
                        <td>{i++}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.phone_number}</td>
                        <td>{u.address} <span onClick={() => clickGoogleMap(u.address)} ><i className="fa-solid fa-location-dot"></i></span>  </td>
                    </tr>
                ))
            }
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number} >
                            <Link onClick={() => paginate(number)} to="/" className='page-link'>
                                {number}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </table>
    )
}

export default Home