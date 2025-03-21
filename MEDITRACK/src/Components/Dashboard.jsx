import "../styles/Dashboard.css"; // Optional for extra styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-100 to-yellow-100 flex items-center justify-center text-center py-20 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-900">
            Person-centered care is at the heart of everything we do.
          </h1>
          <p className="text-gray-600 mt-4">
            We are committed to guiding patients towards a healthier life
            through individualized, affirming care.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="services grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-8">
        {[
          { title: "Individualized Pharmacy Care", icon: "🏥" },
          { title: "Sexual Health", icon: "💙" },
          { title: "Onsite Pharmacy", icon: "💊" },
          { title: "Clinical Program Development", icon: "🛠" },
          { title: "Clinical Supervision & Education", icon: "🎓" },
          { title: "LGBTQ+ Care", icon: "🌈" }
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl">{service.icon}</span>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 mt-2">Learn more about our services.</p>
            <button className="mt-4 text-blue-500">Learn More →</button>
          </div>
        ))}
      </section>

      {/* Patients & Providers Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-8">
        <div className="bg-blue-100 rounded-lg p-8">
          <h3 className="text-xl font-bold">Patients</h3>
          <p className="text-gray-600 mt-2">
            We want our patients to feel deeply cared for and understood.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full">
            Patient Overview
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold">Providers</h3>
          <p className="text-gray-600 mt-2">
            We want our providers to feel empowered and supported.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full">
            Providers Overview
          </button>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="text-center py-16 bg-gray-50">
        <h3 className="text-2xl font-bold">Join the Mango Health Team</h3>
        <p className="text-gray-600 mt-2">
          We foster an inclusive community to improve healthcare services.
        </p>
        <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full">
          Contact Our Team
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Mango Health. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
