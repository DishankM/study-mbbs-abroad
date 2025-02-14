import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", country: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const countries = [
    "Rassia",
    "Uzbekistan",
    "Kazakhstan",
    "Philippines",
    "Georgia",
    "Kyrgyzstan",
    "Egypt",
    "India"
  ];

  return (
    <section id="contact" className="py-16 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Start Your Medical Journey Today</h2>
          <p className="text-blue-200">Get free counseling session with our medical admission experts</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
              required
            />
            <select
              name="country"
              className="w-full p-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
              required
            >
              <option value="" className="bg-gray-400">Select Preferred Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country} className="bg-gray-500">{country}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-900 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Get Free Consultation Now
          </button>
          {showSuccess && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
              Thank you! Our counselor will contact you within 24 hours.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
