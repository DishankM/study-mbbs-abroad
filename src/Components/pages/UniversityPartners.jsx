import React from 'react'

function UniversityPartners() {
  return (
        <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto  justify-evenly">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Universities</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {[
  {
    name: "Harvard Medical School",
    url: "https://th.bing.com/th/id/OIP.o1UdnF5KGjA081CoaxT1awHaCE?rs=1&pid=ImgDetMain"
  },
  {
    name: "University of Oxford",
    url: "https://i1.wp.com/albertfattal.com/wp-content/uploads/2018/03/Oxford_Logo_RGB.png?ssl=1"
  },
  {
    name: "Stanford University",
    url: "https://logos-world.net/wp-content/uploads/2021/10/Stanford-Symbol.png"
  },
  
  {
    name: "Johns Hopkins",
    url: "https://th.bing.com/th/id/R.b8fb432497345099231ff4694a3b76bc?rik=jKG04AYpoHqq2A&riu=http%3a%2f%2fassurgentmedical.com%2fwp-content%2fuploads%2f2017%2f07%2fjohns-hopkins-university-logo-768x160.png&ehk=4Mw6v%2b8114Fq8jLJ3T6H1A42rcEXzIqrrhZRwREriGw%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "MIT",
    url: "https://logosmarcas.net/wp-content/uploads/2021/09/MIT-Emblema.png"
  },
  {
    name: "Cambridge University",
    url: "https://seeklogo.com/images/U/university-of-cambridge-logo-F827CCB99A-seeklogo.com.png"
  },
  
].map((uni, i) => (
  <img 
    key={i}
    src={uni.url}
    alt={uni.name}
    className="h-15   object-contain opacity-75 hover:opacity-100 transition"
  />
))}
          </div>
        </div>
      </section>
  )
}

export default UniversityPartners