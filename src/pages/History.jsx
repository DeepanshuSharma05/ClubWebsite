import React from 'react';

const History = () => {
    const milestones = [
        {
            year: '2020',
            title: 'Club Foundation',
            description: 'Started with 20 founding members dedicated to technical excellence.'
        },
        {
            year: '2021',
            title: 'First Major Event',
            description: 'Organized successful technical symposium with 500+ participants.'
        },
        {
            year: '2022',
            title: 'National Recognition',
            description: 'Received best technical club award at national level.'
        },
        {
            year: '2023',
            title: 'International Collaboration',
            description: 'Started partnership with international technical communities.'
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">Our History</h1>
                <p className="mt-2 text-gray-600">Journey through the years</p>
            </div>

            {/* About Section */}
            <div className="mt-10 bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900">About Us</h2>
                <p className="mt-4 text-gray-600">
                    Our college club was established with the vision of fostering technical innovation
                    and leadership among students. We provide a platform for students to explore their
                    interests, develop new skills, and network with industry professionals.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
                    <p className="mt-4 text-gray-600">
                        To empower students with technical knowledge and practical skills while
                        building a strong community of innovators and leaders.
                    </p>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900">Our Vision</h2>
                    <p className="mt-4 text-gray-600">
                        To become the leading technical club that nurtures talent and drives
                        innovation in the college community.
                    </p>
                </div>
            </div>

            {/* Milestones Timeline */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Key Milestones</h2>
                <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                                    <div className="h-full w-0.5 bg-indigo-200"></div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {milestone.year} - {milestone.title}
                                    </h3>
                                    <p className="mt-1 text-gray-600">{milestone.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;