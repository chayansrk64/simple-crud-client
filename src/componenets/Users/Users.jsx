 import { useState } from 'react';
import {useLoaderData, Link} from 'react-router-dom'

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDeleteUser = _id => {
        console.log('delete', _id);

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert("Deleted Successfully")
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining)
            }
        } )
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h2>All the users are here</h2>
             {
                users.map(user => <p key={user._id}>{user.name} : {user.email}
                 <Link to={`/update/${user._id}`}><button>Update</button></Link>
                 <button onClick={()=> handleDeleteUser(user._id)}>delete</button> 
                  </p> )
             }
        </div>
    );
};

export default Users;