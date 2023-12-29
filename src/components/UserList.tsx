import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data: User[]) => {
                setUsers(data);
            })
            .catch(() => {});
    }, []);

    return (
        <div className="container p-4">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <ul className="list-disc pl-5">
                {users.map((user) => (
                    <li key={user.id} className="mb-2">
                        <p>
                            <span className="font-semibold">ID:</span> {user.id}
                        </p>
                        <p>
                            <span className="font-semibold">Name:</span>{' '}
                            {user.name}
                        </p>
                        <p>
                            <span className="font-semibold">Username:</span>{' '}
                            {user.username}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span>{' '}
                            {user.email}
                        </p>
                        <p>
                            <span className="font-semibold">Phone:</span>{' '}
                            {user.phone}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
