import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-neutral-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider uppercase">
          Keller Shine
        </Link>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300 transition duration-300">Services</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-gray-300 transition duration-300">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-800 text-white p-8">
      <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-center">
        Unleash the Brilliance
      </h1>
      <p className="text-2xl text-center max-w-2xl leading-relaxed mb-10 text-gray-300">
        Keller Shine transforms vehicles into pristine works of art, reflecting a commitment to unparalleled craftsmanship and meticulous care.
      </p>
      <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl uppercase tracking-wider transition duration-300 shadow-lg">
        Explore Services
      </Link>
    </div>
  );
};

const Services: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-700 text-white p-8">
    <h2 className="text-5xl font-extrabold tracking-tight mb-4">Our Services</h2>
    <p className="text-xl text-center max-w-xl text-gray-300">Discover the range of detailing options designed to restore and protect your vehicle's beauty.</p>
  </div>
);

const Gallery: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-800 text-white p-8">
    <h2 className="text-5xl font-extrabold tracking-tight mb-4">Gallery</h2>
    <p className="text-xl text-center max-w-xl text-gray-300">Witness the Keller Shine difference through our portfolio of transformations.</p>
  </div>
);

const Contact: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-700 text-white p-8">
    <h2 className="text-5xl font-extrabold tracking-tight mb-4">Contact Us</h2>
    <p className="text-xl text-center max-w-xl text-gray-300">Get in touch to schedule your vehicle's next detailing appointment.</p>
  </div>
);


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-800 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;