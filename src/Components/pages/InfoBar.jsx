import React from 'react'

function InfoBar() {
  return (
    <section className="bg-blue-100 py-5 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2000+", label: "Students Placed" },
            { number: "97%", label: "FMGE Pass Rate" },
            { number: "15+", label: "Countries" },
            { number: "50+", label: "University Partners" }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default InfoBar