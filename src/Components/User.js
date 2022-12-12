import React from 'react';

const User = ({ user, index }) => {
    const { name, picture } = user;
    console.log(name, picture)
    return (
        <tr className='bg-gray-300 hover border-red-500 border-2 rounded'>
            <td className='py-3 border-2 border-red-500 text-center'>{index + 1}</td>
            <td className='py-3 border-2 border-red-500 text-center'>{name.title} {name.first} {name.last}</td>
            <td className='py-3 border-2 border-red-500 text-center'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={picture.large} alt='user_picture' />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default User;