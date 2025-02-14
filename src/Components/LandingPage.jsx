import { useState } from "react";
import UniversityPartners from "./pages/UniversityPartners";
import Logo from '../assets/Logo.png'
import StudentStory from "./pages/StudentStory";
import AddmitionProcess from "./pages/AddmitionProcess";
import Questions from "./pages/Questions";
import ContactUs from "./pages/ContactUs";
import InfoBar from "./pages/InfoBar";
import Footer from "./pages/Footer";
import WhyStudyMbbsAbroad from "./pages/MBBSAbroadReasons";

export default function LandingPage() {
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

  // Updated country image URLs with medical university photos
  const countryImages = {
    Russia: "https://www.justmbbs.com/img/college/russia/nizhny-novgorod-state-medical-university-banner.jpg",
    Uzbekistan: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Kazakhstan: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Philippines: "https://images.unsplash.com/photo-1523057530100-383d7fbc77a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Georgia: "https://th.bing.com/th/id/OIP.ej0bIiX4KEeT5-vX8RwbcQHaE7?rs=1&pid=ImgDetMain",
    Kyrgyzstan: "https://kalingatv.com/wp-content/uploads/2023/06/kalahandi-medical-college.jpg",
    Egypt: "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    India: "https://static.theprint.in/wp-content/uploads/2020/07/AIIMS-2-1068x630.jpg"
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={Logo} className="w-23 h-14" />
              
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#why" className="text-gray-700 hover:text-blue-900">Why Us</a>
              <a href="#countries" className="text-gray-700 hover:text-blue-900">Countries</a>
              <a href="#admission" className="text-gray-700 hover:text-blue-900">Admission</a>
              <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-full">Apply Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Medical students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        </div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Become a Global Medical Professional</h1>
          <p className="text-xl mb-8 font-light italic">Get admission to MCI/WHO approved universities with 100% placement support</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50">
              <a href="#countries">Explore Programs</a>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900">
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <InfoBar/>

      {/* University Partners */}
      <UniversityPartners/>

      {/* Why MBBS ABroad */}
      <WhyStudyMbbsAbroad/>

      {/* Countries Section */}
      <section id="countries" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore MBBS Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(countryImages).map(([country, image]) => (
              <div key={country} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image}
                  alt={`${country} Medical University`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{country}</h3>
                    <div className="flex justify-between text-sm">
                      <div>Tuition: $3,000-$6,000/year</div>
                      <div>MCI Approved</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <StudentStory/>

      {/* Enhanced Admission Process */}
      <AddmitionProcess/>

      {/* FAQ Section */}
      <Questions/>

      {/* Enhanced Contact Form */}
      <ContactUs/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}