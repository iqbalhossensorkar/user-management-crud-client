import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserTable = ({ user, index, users, setUser }) => {
    const { _id, name, email, gender, status } = user;

    const handleDeleteUser = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = users.filter(person => person._id !== _id)
                        setUser(remaining);
                    })

            }
        })
    }
    return (
        <>

            <tbody>
                {/* row 1 */}
                <tr>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{status}</td>
                    <td>
                        <div className="flex items-center gap-4">
                            <Link to={`/UpdateUser/${_id}`}>
                                <button className="btn btn-outline btn-square">Edit</button>
                            </Link>
                            <button onClick={() => handleDeleteUser(_id)} className="btn btn-outline btn-square"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default UserTable;