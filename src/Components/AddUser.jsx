import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddUser = () => {
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const handleAddUSer = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = {name, email, gender, status}
        console.log(newUser);

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
            }
        })

    }
    return (
        <>
            <div className='container mx-auto px-12'>
                <Link to="/"><button className='text-blue-600  px-5 py-3 my-10'>--All User</button></Link>
            </div>
            <div className="p-10 bg-slate-100 mx-10 rounded mb-10">
                <div className="text-center">
                    <h2 className="text-xl font-bold my-5">New User</h2>
                    <p>Use the below form to create a new User</p>
                </div>
                <form onSubmit={handleAddUSer}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Iqbal Hossen Sorkar" name="name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="@example.com" name="email" className="input input-bordered w-full" required />
                    </div>
                    {/* Gender Radio */}
                    <div className="max-w-xs mt-8">
                        <span className="mr-5">Gender</span>
                        <label>
                            <input
                                className="radio checked:bg-red-500"
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                            Male
                        </label>

                        <label>
                            <input
                                className="radio checked:bg-blue-500"
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                            Female
                        </label>
                    </div>
                    {/* Status Radio  */}
                    <div className="max-w-xs mt-8">
                        <span className="mr-5">Status</span>
                        <label>
                            <input
                                className="radio checked:bg-red-500"
                                type="radio"
                                value="active"
                                checked={status === 'active'}
                                onChange={(event) => setStatus(event.target.value)}
                            />
                            Active
                        </label>

                        <label>
                            <input
                                className="radio checked:bg-blue-500"
                                type="radio"
                                value="inactive"
                                checked={status === 'inactive'}
                                onChange={(event) => setStatus(event.target.value)}
                            />
                            Inactive
                        </label>
                    </div>
                    <input className="btn btn-success w-full mt-8" type="submit" value="Add User" />
                </form>
            </div>
        </>

    );
};

export default AddUser;