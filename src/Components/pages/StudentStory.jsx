import React from 'react'

function StudentStory() {
  return (
    <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">Rahul Sharma</div>
                    <div className="text-sm text-gray-600">MBBS in Russia, 2022</div>
                  </div>
                </div>
                <p className="text-gray-600">"The complete guidance from MedGlobal helped me secure admission in my dream university..."</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StudentStory