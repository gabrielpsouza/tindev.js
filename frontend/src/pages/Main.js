import React, { useEffect, useState } from 'react';
import Link from 'react-router-dom'
import './Main.css'
import api from '../services/api';

import logo  from '../img/logo.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg'

export default function Main( { match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: { user: match.params.id,
                 }
            })

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id] )
    
    async function handleLike(id) {
        await api.post(`/devs/${id}/like`, null, {
            headers: { user: match.params.id }
        });
    
        setUsers(users.filters(user => user.id != id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislike`, null, {
            headers: { user: match.params.id }
        });
    
        setUsers(users.filters(user => user.id != id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
                { users.length > 0 ? (
            <ul>
            {user.map(user => (
                <li key={user._id}>
                    <img src={user.avatar} alt={user.name} />
                    <footer>
                        <strong>{user.name}</strong>
                        <p>{user.bio}</p>
                        <div className="buttons" >
                        <button type="submit" onClick={() => handleDislike(user._id)} >
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="submit" onClick= {() => handleLike(user._id)} >
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </footer>
                </li>
                ))}
            </ul>
                ) : (
                    <div className="empty">Acabou :( </div>
                )}
        </div>
    );
}
