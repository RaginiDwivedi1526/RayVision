import React, { useState, useEffect } from 'react';
import { getContacts, getVolunteers, getCSRs } from '../api';
import toast from 'react-hot-toast';
import { Lock, Loader2, Users, Briefcase, MessageSquare } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('contacts');
  
  const [data, setData] = useState({ contacts: [], volunteers: [], csr: [] });
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      toast.error('Incorrect password');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, volRes, csrRes] = await Promise.all([
        getContacts(),
        getVolunteers(),
        getCSRs()
      ]);
      setData({
        contacts: contactsRes.data.data,
        volunteers: volRes.data.data,
        csr: csrRes.data.data
      });
    } catch (error) {
      toast.error('Failed to fetch data');
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 section-padding">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-primary/10 text-blue-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-navy" style={{ fontFamily: 'var(--font-heading)' }}>Admin Access</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              className="form-input mb-4" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-main">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>Admin Dashboard</h1>
          <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline-dark text-sm">Logout</button>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button onClick={() => setActiveTab('contacts')} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'contacts' ? 'bg-blue-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border'}`}>
            <MessageSquare size={18} /> Contacts ({data.contacts.length})
          </button>
          <button onClick={() => setActiveTab('volunteers')} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'volunteers' ? 'bg-green-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border'}`}>
            <Users size={18} /> Volunteers ({data.volunteers.length})
          </button>
          <button onClick={() => setActiveTab('csr')} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'csr' ? 'bg-orange text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border'}`}>
            <Briefcase size={18} /> CSR ({data.csr.length})
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={40} className="animate-spin text-blue-primary" />
          </div>
        ) : (
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                  {activeTab === 'contacts' && (
                    <tr><th className="p-4">Date</th><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Phone</th><th className="p-4">Message</th></tr>
                  )}
                  {activeTab === 'volunteers' && (
                    <tr><th className="p-4">Date</th><th className="p-4">Name</th><th className="p-4">Email/Phone</th><th className="p-4">Location</th><th className="p-4">Interest</th><th className="p-4">Message</th></tr>
                  )}
                  {activeTab === 'csr' && (
                    <tr><th className="p-4">Date</th><th className="p-4">Company</th><th className="p-4">Contact</th><th className="p-4">Tier/Budget</th><th className="p-4">Message</th></tr>
                  )}
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {activeTab === 'contacts' && data.contacts.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-4 whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString()}</td>
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4">{item.email}</td>
                      <td className="p-4">{item.phone || '-'}</td>
                      <td className="p-4 max-w-xs truncate" title={item.message}>{item.message}</td>
                    </tr>
                  ))}
                  
                  {activeTab === 'volunteers' && data.volunteers.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-4 whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString()}</td>
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4">{item.email}<br/><span className="text-gray-500">{item.phone}</span></td>
                      <td className="p-4">{item.city}, {item.state}</td>
                      <td className="p-4"><span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">{item.interest}</span></td>
                      <td className="p-4 max-w-xs truncate" title={item.message}>{item.message || '-'}</td>
                    </tr>
                  ))}
                  
                  {activeTab === 'csr' && data.csr.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-4 whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString()}</td>
                      <td className="p-4 font-medium">{item.company}</td>
                      <td className="p-4">{item.name}<br/><span className="text-gray-500">{item.email}</span></td>
                      <td className="p-4"><span className="bg-orange/10 text-orange px-2 py-1 rounded text-xs">{item.tier}</span><br/>{item.budget && <span className="text-gray-500 text-xs">{item.budget}</span>}</td>
                      <td className="p-4 max-w-xs truncate" title={item.message}>{item.message || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data[activeTab].length === 0 && (
                <div className="p-8 text-center text-gray-500">No records found.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
