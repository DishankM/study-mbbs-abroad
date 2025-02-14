import React from 'react'

function AddmitionProcess() {
  return (
    <section id="admission" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our 4-Step Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {title: "Profile Evaluation", content: "Free eligibility check with our experts"},
              {title: "Documentation", content: "Assistance with mark sheets, NEET score, passport"},
              {title: "University Application", content: "Application to 3 top universities"},
              {title: "Visa & Departure", content: "100% visa success rate with pre-departure briefing"},
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-blue-900 text-2xl font-bold mb-4">0{index+1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AddmitionProcess