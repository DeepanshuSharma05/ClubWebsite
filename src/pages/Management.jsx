import React from 'react';

const Management = () => {
    const team = [
        {
            id: 1,
            name: 'Alex Johnson',
            role: 'Club President',
            department: 'Computer Science',
            year: 'Final Year',
            email: 'alex.j@example.com'
        },
        {
            id: 2,
            name: 'Sarah Wilson',
            role: 'Vice President',
            department: 'Electronics',
            year: 'Third Year',
            email: 'sarah.w@example.com'
        },
        // Add more team members
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">Management Structure</h1>
                <p className="mt-2 text-gray-600">Meet our dedicated team members</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white shadow rounded-lg overflow-hidden"
                    >
                        <div className="px-6 py-5">
                            <div className="text-center">
                                <div className="h-24 w-24 rounded-full bg-indigo-100 mx-auto flex items-center justify-center">
                                    <span className="text-2xl text-indigo-800">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="mt-4 text-xl font-medium text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-indigo-600 font-medium">{member.role}</p>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-sm text-gray-500">
                                    Department: {member.department}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Year: {member.year}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Email: {member.email}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Management;