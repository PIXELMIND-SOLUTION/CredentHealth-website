// App.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Important for navbar toggle


function App() {
  useEffect(() => {
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.padding = '20px 0';
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa fa-heartbeat me-2"></i>CredentHealth
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#screens">App Screens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">Download</a>
              </li>
            </ul>
            <a href="#download" className="btn btn-primary ms-3">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1 className="hero-title">Your Health, Our Priority</h1>
              <p className="hero-subtitle">Comprehensive healthcare solutions right at your fingertips</p>
              <a href="#download" className="btn btn-light btn-lg me-3">Get App</a>
              <a href="#features" className="btn btn-outline-light btn-lg">Learn More</a>
            </div>
            <div className="col-lg-6 text-center">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="img-fluid app-screenshot mt-5 mt-lg-0" alt="CredentHealth App" style={{ maxWidth: '80%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">App Features</h2>
            <p className="lead">Everything you need for your healthcare journey in one place</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card card h-100 p-4">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="fa fa-calendar-check"></i>
                  </div>
                  <h3>Book Consultation</h3>
                  <p>Schedule appointments with top healthcare professionals in just a few taps.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card card h-100 p-4">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="fa fa-heartbeat"></i>
                  </div>
                  <h3>Health Risk Assessment</h3>
                  <p>Get personalized health insights and recommendations based on your profile.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card card h-100 p-4">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="fa fa-vial"></i>
                  </div>
                  <h3>Diagnostics</h3>
                  <p>Book lab tests, track results, and get expert interpretation of your reports.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card card h-100 p-4">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="fa fa-calendar-alt"></i>
                  </div>
                  <h3>My Bookings</h3>
                  <p>Manage all your appointments, tests, and consultations in one place.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card card h-100 p-4">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <h3>Family Management</h3>
                  <p>Add family members and manage their healthcare needs seamlessly.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card card h-100 p-4">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <h3>Address & Support</h3>
                  <p>Save multiple addresses and get 24/7 support for all your queries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section id="screens" className="feature-highlight">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">App Interface</h2>
            <p className="lead">Designed for simplicity and ease of use</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="animate-on-scroll">
                <h3>Intuitive Design</h3>
                <p>Our user-friendly interface makes navigating healthcare services effortless. Book appointments, access records, and connect with doctors in just a few taps.</p>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i> Clean, modern design</li>
                  <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i> Easy navigation</li>
                  <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i> Secure data encryption</li>
                  <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i> Personalized experience</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="img-fluid app-screenshot" alt="App Screens" style={{ maxWidth: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="lead">Trusted by thousands of users nationwide</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card animate-on-scroll">
                <div className="d-flex align-items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="testimonial-img me-3" />
                  <div>
                    <h5 className="mb-0">Sarah Johnson</h5>
                    <p className="text-muted mb-0">Regular User</p>
                  </div>
                </div>
                <p className="mb-0">"CredentHealth has transformed how I manage my family's healthcare. Booking consultations and tracking health records has never been easier!"</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card animate-on-scroll">
                <div className="d-flex align-items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="testimonial-img me-3" />
                  <div>
                    <h5 className="mb-0">Michael Chen</h5>
                    <p className="text-muted mb-0">Health Enthusiast</p>
                  </div>
                </div>
                <p className="mb-0">"The Health Risk Assessment feature provided insights I never knew I needed. The personalized recommendations have helped me improve my lifestyle significantly."</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card animate-on-scroll">
                <div className="d-flex align-items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="testimonial-img me-3" />
                  <div>
                    <h5 className="mb-0">Priya Sharma</h5>
                    <p className="text-muted mb-0">Busy Professional</p>
                  </div>
                </div>
                <p className="mb-0">"As someone with a hectic schedule, CredentHealth has been a lifesaver. I can book consultations, order tests, and manage prescriptions all during my commute."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">Get the App Today</h2>
              <p className="lead mb-4">Join thousands of users who have transformed their healthcare experience with CredentHealth.</p>
              <div className="d-flex flex-wrap">
                <a href="#" className="app-btn">
                  <i className="fa fa-apple me-2"></i> App Store
                </a>
                <a href="#" className="app-btn">
                  <i className="fa fa-google-play me-2"></i> Google Play
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="img-fluid app-screenshot mt-5 mt-lg-0" alt="Download App" style={{ maxWidth: '60%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h3 className="footer-title">
                <i className="fa fa-heartbeat me-2"></i>CredentHealth
              </h3>
              <p>Your complete healthcare solution for consultations, diagnostics, and health management.</p>
              <div className="d-flex mt-4">
                <a href="#" className="text-light me-3"><i className="fa fa-facebook-f fa-lg"></i></a>
                <a href="#" className="text-light me-3"><i className="fa fa-twitter fa-lg"></i></a>
                <a href="#" className="text-light me-3"><i className="fa fa-instagram fa-lg"></i></a>
                <a href="#" className="text-light"><i className="fa fa-linkedin-in fa-lg"></i></a>
              </div>
            </div>

            <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#screens">Screens</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
              <h5 className="footer-title">Features</h5>
              <ul className="footer-links">
                <li><a href="#">Book Consultation</a></li>
                <li><a href="#">Health Risk Assessment</a></li>
                <li><a href="#">Diagnostics</a></li>
                <li><a href="#">My Bookings</a></li>
                <li><a href="#">Family Management</a></li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3">
              <h5 className="footer-title">Contact Us</h5>
              <ul className="footer-links">
                <li><i className="fa fa-map-marker-alt me-2"></i>H NO 1-/21SE/1<br/> SMILW, ENCLAVE MAKTHA MAHABOO,<br/> BPET MIYAPUR, SERILINGAMPALLY,<br/> RANGA REDDY - 500049<br/>
                  SERILINGAMPALLY - 500049<br/>
                  India (IN)</li>
                <li><i className="fa fa-phone me-2"></i> +91 7619196856</li>
                <li><i className="fa fa-envelope me-2"></i> contact.credenthealth@gmail.com</li>
              </ul>
            </div>
          </div>

          <hr className="mt-5 mb-4 border-secondary" />

          <div className="text-center">
            <p className="mb-0">&copy; 2025 CredentHealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;