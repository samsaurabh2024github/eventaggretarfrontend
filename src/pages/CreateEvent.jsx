import { useState } from 'react';
import api from '../api/axios';
import { Calendar, MapPin, Users, Tag, FileText, Clock } from 'lucide-react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '', description: '', date: '', venue: '', category: '', maxParticipants: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Calls your backend: router.post("/create", auth, checkRole("organizer"), createEvent);
      await api.post('/events/create', formData);
      alert("Event submitted! It will be visible once Admin approves it.");
    } catch (err) {
      alert("Error creating event");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="bg-[#1a1a2e] p-8 rounded-3xl border border-gray-800 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Calendar className="text-brand-orange" /> Host New Event
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Event Title" icon={<FileText size={18}/>} placeholder="e.g. Tech Symposium 2024" 
              onChange={e => setFormData({...formData, title: e.target.value})} />
            
            <InputGroup label="Category" icon={<Tag size={18}/>} placeholder="e.g. Coding, Workshop" 
              onChange={e => setFormData({...formData, category: e.target.value})} />

            <InputGroup label="Date & Time" type="datetime-local" icon={<Clock size={18}/>}
              onChange={e => setFormData({...formData, date: e.target.value})} />

            <InputGroup label="Max Participants" type="number" icon={<Users size={18}/>} placeholder="100"
              onChange={e => setFormData({...formData, maxParticipants: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Venue / Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-gray-500" size={18} />
              <input required className="w-full bg-[#0f0f1b] border border-gray-800 p-4 pl-12 rounded-xl"
                onChange={e => setFormData({...formData, venue: e.target.value})} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Description</label>
            <textarea required rows="4" className="w-full bg-[#0f0f1b] border border-gray-800 p-4 rounded-xl"
              onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>

          <button className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg">
            Submit for Approval
          </button>
        </form>
      </div>
    </div>
  );
};

const InputGroup = ({ label, icon, type="text", placeholder, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-400">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-4 text-gray-500">{icon}</div>
      <input required type={type} placeholder={placeholder} onChange={onChange}
        className="w-full bg-[#0f0f1b] border border-gray-800 p-4 pl-12 rounded-xl focus:border-brand-yellow outline-none" />
    </div>
  </div>
);

export default CreateEvent;