import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import User from './User';

const Home = () => {
    const { data: users, isLoading: userLoading } = useQuery('allUsers', () => fetch('users.json').then(res => res.json()));
    if (userLoading) {
       return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto px-2 my-4">
            <table className="table w-full">

                <thead>
                    <tr className='bg-gray-500 border-red-500 border-2 rounded'>
                        <th className='text-black border-2 border-red-500 text-center'>SL.</th>
                        <th className='text-black border-2 border-red-500 text-center'>User</th>
                        <th className='text-black border-2 border-red-500 text-center'>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <User index={index} user={user}></User>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Home; <h2>Home</h2>