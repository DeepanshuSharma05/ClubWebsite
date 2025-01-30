import React from 'react';

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'Technical Workshop 2025',
            date: 'February 15, 2025',
            description: 'Learn about the latest technologies and their practical applications.',
            location: 'Main Auditorium',
            time: '10:00 AM - 2:00 PM',
            type: 'Workshop'
        },
        {
            id: 2,
            title: 'Annual Club Meetup',
            date: 'March 1, 2025',
            description: 'Join us for our annual gathering with amazing speakers and networking.',
            location: 'Conference Hall',
            time: '11:00 AM - 4:00 PM',
            type: 'Meetup'
        },
        // Add more events as needed
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
                <p className="mt-2 text-gray-600">Join us in our upcoming activities and events</p>
            </div>

            <div className="mt-10 space-y-8">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white shadow overflow-hidden rounded-lg"
                    >
                        <div className="px-6 py-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {event.title}
                                </h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                    {event.type}
                                </span>
                            </div>
                            <div className="mt-2">
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Date & Time</p>
                                    <p className="mt-1 text-sm text-gray-900">
                                        {event.date} | {event.time}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Location</p>
                                    <p className="mt-1 text-sm text-gray-900">{event.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;