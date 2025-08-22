import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles, TrendingUp, Users, Target, Award, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight, Star, Quote, CheckCircle, Calendar, BookOpen, Zap, Globe, BarChart3 } from 'lucide-react';

const NaisonMarufuWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileImage = "/naison.webp";
  
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Marketing",
      description: "Comprehensive marketing strategies tailored to your business goals and target audience."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Transform your digital presence with cutting-edge marketing technologies and approaches."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brand Development",
      description: "Build a powerful brand identity that resonates with your customers and drives loyalty."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Data-driven marketing decisions backed by comprehensive analytics and market research."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Naison transformed our marketing strategy completely. Our ROI increased by 300% within 6 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoSolutions",
      content: "The insights and strategies provided were game-changing. Highly recommend Naison's expertise!",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Marketing Director",
      content: "Professional, innovative, and results-driven. Naison exceeded all our expectations.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Exploring emerging trends and technologies shaping the marketing landscape.",
      date: "Aug 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "Building Brand Loyalty in a Digital World",
      excerpt: "Strategies to create lasting connections with your customers online and offline.",
      date: "Aug 10, 2025",
      readTime: "7 min read"
    },
    {
      title: "Data-Driven Marketing: Beyond the Basics",
      excerpt: "Advanced analytics techniques for modern marketers and business owners.",
      date: "Aug 5, 2025",
      readTime: "6 min read"
    }
  ];

  const achievements = [
    { number: "500+", label: "Clients Served" },
    { number: "95%", label: "Success Rate" },
    { number: "10+", label: "Years Experience" },
    { number: "50M+", label: "Revenue Generated" }
  ];

  const NavLink = ({ href, children, mobile = false }) => (
    <a
      href={href}
      className={`${
        mobile 
          ? 'block px-3 py-2 text-lg font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200'
          : 'text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
      )}
    </a>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500">
                <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Naison Marufu
                </h1>
                <p className="text-xs text-gray-600">Marketing Maven</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#testimonials">Reviews</NavLink>
              <NavLink href="#blog">Insights</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="#home" mobile>Home</NavLink>
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#services" mobile>Services</NavLink>
              <NavLink href="#testimonials" mobile>Reviews</NavLink>
              <NavLink href="#blog" mobile>Insights</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Marketing Tips | Facts | Insights | Trends | Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Strategic Marketing
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm Naison Marufu, your dedicated Marketing Maven. With 10+ years of experience, 
                I help businesses achieve extraordinary growth through innovative marketing strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 font-medium">
                  View My Work
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-gray-600">
                <div className="flex items-center mr-6">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  500+ Happy Clients
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  4.9/5 Rating
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Naison Marufu - Marketing Consultant" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Your <span className="text-purple-600">Marketing Maven</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founder & CEO of Ashnai Holdings, with 9.5K+ LinkedIn followers and a passion for transforming businesses through strategic marketing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative w-80 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Naison Marufu - Professional Photo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Transforming Businesses Since 2013
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As the Founder and Chief Executive Officer of Ashnai Holdings, I've dedicated my career to helping businesses unlock their true potential through innovative marketing strategies. Based in Harare, Zimbabwe, I've had the privilege of working with companies across various industries.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My approach combines data-driven insights with creative storytelling, ensuring that every marketing campaign not only reaches the right audience but also creates meaningful connections that drive long-term growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                  <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Naison Marufu</p>
                  <p className="text-purple-600 font-medium">Marketing Maven & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic <span className="text-purple-600">Marketing Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing services designed to elevate your brand and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-6 text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Clients Say About <span className="text-purple-600">Naison</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses who trusted me with their marketing transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-200 mr-4">
                    <img src={profileImage} alt={testimonial.name} className="w-full h-full object-cover opacity-50" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Marketing <span className="text-purple-600">Insights & Trends</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest marketing insights, tips, and industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <BookOpen className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium">
              View All Insights
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your <span className="text-purple-600">Marketing?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can take your business to the next level with strategic marketing solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white mr-4">
                    <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Naison Marufu</h3>
                    <p className="opacity-90">Marketing Maven & CEO</p>
                  </div>
                </div>
                <p className="mb-6 opacity-90">
                  Ready to discuss your marketing challenges and opportunities? I'm here to help you achieve extraordinary results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>naison@ashnaiholdings.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>+263 xxx xxx xxx</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>Harare, Zimbabwe</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span>9.5K+ Followers</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl text-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5 inline mr-2" />
                  LinkedIn
                </a>
                <a href="#" className="flex-1 bg-blue-400 text-white py-3 px-6 rounded-xl text-center hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5 inline mr-2" />
                  Twitter
                </a>
                <a href="#" className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-xl text-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5 inline mr-2" />
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Tell me about your marketing challenges..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                  <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Naison Marufu</h3>
                  <p className="text-purple-400">The Marketing Maven</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming businesses through strategic marketing solutions. Based in Harare, Zimbabwe, serving clients worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">Reviews</a></li>
                <li><a href="#blog" className="hover:text-purple-400 transition-colors">Insights</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Strategic Marketing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Brand Development</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Analytics & Insights</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Consultation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Naison Marufu - Marketing Maven. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                🚀 Powered by Innovation • 📈 Driven by Results • 🎯 Focused on Growth
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
          <Zap className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white text-purple-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-purple-200"
        >
          <ChevronRight className="w-6 h-6 transform -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default NaisonMarufuWebsite;