import React from "react";

export default function WhyStudyMbbsAbroad() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Study MBBS Abroad?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow-lg  hover:bg-blue-100 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Affordable Tuition Fees</h3>
            <p className="text-gray-600">Study at top-ranked universities with lower costs compared to private institutions in India.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-lg  hover:bg-blue-100 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
            <p className="text-gray-600">Degrees approved by MCI, WHO, and other global medical councils.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-lg  hover:bg-blue-100 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">World-Class Infrastructure</h3>
            <p className="text-gray-600">Modern laboratories, advanced research facilities, and high-quality education.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-lg  hover:bg-blue-100 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">English-Medium Curriculum</h3>
            <p className="text-gray-600">No language barriers—courses are taught in English to ensure smooth learning.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-lg  hover:bg-blue-100 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Diverse Career Opportunities</h3>
            <p className="text-gray-600">Work internationally or practice in India after clearing the FMGE/NExT exam.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-lg  hover:bg-blue-100 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Safe & Comfortable Living</h3>
            <p className="text-gray-600">Hostels with modern amenities and multicultural exposure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

