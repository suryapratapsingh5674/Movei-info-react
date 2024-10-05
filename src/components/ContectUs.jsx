import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  document.title = "Movie Info | Contect"

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to server or email service (e.g., EmailJS)
    console.log('Form submitted:', { name, email, subject, message });
    setSent(true);
    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md bg-[#1F1E24]">
      <h1 className="text-3xl font-bold mb-4"><i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i> Contact Us</h1>
      <p className="text-lg mb-4">Have feedback, suggestions, or questions? We'd love to hear from you!</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-600 block w-full p-4 pl-10 text-lg border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-600 block w-full p-4 pl-10 text-lg border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="border border-gray-600 block w-full p-4 pl-10 text-lg border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border border-gray-600 block w-full p-4 pl-10 text-lg border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg focus:ring focus:ring-blue-500"
        >
          Send Message
        </button>

        {sent && <p className="text-lg text-green-500">Thank you for contacting us!</p>}
      </form>

      <div className="mt-6">
        <p className="text-lg mb-2">Email: <a href="mailto:your-email@example.com" className="text-blue-500">Movieinfo@example.com</a></p>
        <p className="text-lg mb-2">Phone: <a href="tel:your-phone-number" className="text-blue-500">984***8734</a></p>
      </div>
    </div>
  );
}

export default ContactUs;