import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrowseEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      // Hits your GET /api/events which filters for status: "approved"
      const res = await api.get('/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-black mb-10">Explore <span className="text-brand-yellow">Events</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map(event => (
          <div key={event._id} className="bg-[#1a1a2e] rounded-3xl border border-gray-800 overflow-hidden hover:border-brand-yellow transition-all group">
            <div className="p-6">
              <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase">
                {event.category}
              </span>
              <h3 className="text-2xl font-bold mt-4 group-hover:text-brand-yellow transition">{event.title}</h3>
              
              <div className="mt-6 space-y-3 text-gray-400 text-sm">
                <p className="flex items-center gap-2"><Calendar size={16}/> {new Date(event.date).toLocaleDateString()}</p>
                <p className="flex items-center gap-2"><MapPin size={16}/> {event.venue}</p>
                <p className="flex items-center gap-2"><Users size={16}/> {event.registeredUsers} / {event.maxParticipants} Joined</p>
              </div>

              // inside the map function of your events list
<Link 
  to={`/event/${event._id}`} 
  className="mt-8 w-full py-4 bg-gray-800 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-yellow hover:text-black transition-all"
>
  View Details
</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseEvents;