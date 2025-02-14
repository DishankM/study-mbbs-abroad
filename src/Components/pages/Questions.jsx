import React from 'react'

function Questions() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {question: "Is MBBS abroad valid in India?", answer: "Yes, from MCI recognized universities..."},
              {question: "What are the eligibility criteria?", answer: "Minimum 50% in PCB, NEET qualification..."},
              {question: "Hostel facilities available?", answer: "All universities provide safe hostel accommodation..."},
              {question: "Medium of instruction?", answer: "English medium courses available in all countries..."},
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="font-bold text-lg mb-2">{faq.question}</div>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Questions