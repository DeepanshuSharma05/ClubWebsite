import React from 'react';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center py-16">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Welcome to College Club
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                    Empowering students through innovation and collaboration
                </p>
            </div>

            {/* Featured Section */}
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Upcoming Events Card */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
                        <div className="mt-4 space-y-4">
                            <div className="border-l-4 border-indigo-500 pl-4">
                                <p className="font-medium">Tech Workshop</p>
                                <p className="text-sm text-gray-500">February 15, 2025</p>
                            </div>
                            <div className="border-l-4 border-indigo-500 pl-4">
                                <p className="font-medium">Annual Meetup</p>
                                <p className="text-sm text-gray-500">March 1, 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Announcements Card */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Latest News</h2>
                        <div className="mt-4 space-y-4">
                            <div>
                                <p className="font-medium">New Committee Elections</p>
                                <p className="text-sm text-gray-500">Nominations open for 2025-26</p>
                            </div>
                            <div>
                                <p className="font-medium">Achievement</p>
                                <p className="text-sm text-gray-500">Won Best Club Award 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Card */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Quick Links</h2>
                        <div className="mt-4 space-y-2">
                            <a href="#" className="block text-indigo-600 hover:text-indigo-800">
                                → Join the Club
                            </a>
                            <a href="#" className="block text-indigo-600 hover:text-indigo-800">
                                → Resources
                            </a>
                            <a href="#" className="block text-indigo-600 hover:text-indigo-800">
                                → Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;