import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Sparkles, TrendingUp, Users, Target, Award, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight, Star, Quote, CheckCircle, Calendar, BookOpen, Zap, Globe, BarChart3, Cpu, Layers, Eye, Rocket, Shield } from 'lucide-react';

const ParticleField = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#8B5CF6' : '#EC4899'
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#8B5CF6';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

const FloatingCard = ({ children, delay = 0, className = '' }) => {
  return (
    <div 
      className={`transform transition-all duration-1000 hover:scale-105 ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

const GlowingText = ({ children, className = '' }) => {
  return (
    <span className={`relative ${className}`}>
      {children}
      <span className="absolute inset-0 blur-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent opacity-50 animate-pulse">
        {children}
      </span>
    </span>
  );
};

const NaisonMagicalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const profileImage = "/naison.webp";
  
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Marketing",
      description: "AI-powered marketing strategies that adapt to your market in real-time.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Transform your business with next-gen marketing automation and AI insights.",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Evolution",
      description: "Create dynamic brands that evolve with your audience and market trends.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "See the future of your market with advanced predictive modeling.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Jesca Mukono",
      role: "CEO, Neural Dynamics",
      content: "Naison's AI-driven approach increased our conversion rates by 450%. It's like having a crystal ball for marketing!",
      rating: 5,
      avatar: "🚀"
    },
    {
      name: "Tendai Chikafu",
      role: "Founder, Quantum Labs",
      content: "The predictive insights were mind-blowing. We scaled from startup to unicorn in 18 months!",
      rating: 5,
      avatar: "⚡"
    },
    {
      name: "Dr. Mary Kamau",
      role: "CMO, BioTech Innovations",
      content: "Revolutionary approach to marketing. Results that seemed impossible are now our reality.",
      rating: 5,
      avatar: "🎯"
    }
  ];

  const achievements = [
    { number: "1000+", label: "AI Models Deployed", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.2%", label: "Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "15+", label: "Years Future-Proofing", icon: <Rocket className="w-6 h-6" /> },
    { number: "$500M+", label: "Revenue Generated", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor Trail Effect */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-gradient-to-r from-purple-500 to-pink-500 p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Naison Marufu
                  </GlowingText>
                </h1>
                <p className="text-sm text-purple-300 font-semibold">The Marketing Magician ✨</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Reviews', 'Insights', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </a>
              ))}
              <button className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
  
              >
                <span className="relative z-10">Start Magic</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 animate-pulse"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Reviews', 'Insights', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg text-gray-300 hover:text-white font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold">
                Start Magic
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Floating Badge */}
            <FloatingCard className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8">
              <Sparkles className="w-5 h-5 mr-3 text-purple-400" />
              <span className="text-purple-300 font-semibold">AI-Powered Marketing Revolution</span>
              <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </FloatingCard>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Marketing
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-20 animate-pulse"></div>
              </div>
              <br />
              <div className="relative inline-block">
                <GlowingText className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Sorcery
                </GlowingText>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              I'm <span className="text-purple-400 font-bold">Naison Marufu</span>, your AI-powered Marketing Magician. 
              I transform businesses into market leaders using cutting-edge technology, 
              predictive analytics, and pure marketing magic.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center">
                  Unleash the Magic
                  <Rocket className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-purple-400 text-purple-400 hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:bg-purple-500/20 hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center">
                  View Magic Portfolio
                  <Eye className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <FloatingCard 
                  key={index} 
                  delay={index * 0.5}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-600/30 hover:to-pink-600/30">
                    <div className="text-purple-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400 font-semibold text-sm">
                      {achievement.label}
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Meet Your </span>
              <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Marketing Wizard
              </GlowingText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combining 15+ years of marketing mastery with cutting-edge AI to create impossible results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Profile Section */}
            <FloatingCard>
              <div className="relative">
                {/* Holographic Frame Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                  <div className="relative w-80 h-96 mx-auto rounded-2xl overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Naison Marufu - The Marketing Wizard" 
                      className="w-full h-full object-cover"
                    />
                    {/* Hologram Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-blue-600/40 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 shadow-2xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 shadow-2xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </FloatingCard>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-4">🧙‍♂️</span>
                  The Magic Behind The Results
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  As Founder & CEO of Ashnai Holdings, I've pioneered the fusion of traditional marketing wisdom 
                  with AI-powered innovation. My 9.5K+ LinkedIn followers witness daily magic as I transform 
                  businesses from the ground up.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Based in Harare, Zimbabwe, I've created a global impact by developing proprietary AI algorithms 
                  that predict market trends, optimize campaigns in real-time, and generate ROI that defies logic.
                </p>
              </div>

              {/* Magical Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { skill: "AI Marketing", level: 98, icon: "🤖" },
                  { skill: "Predictive Analytics", level: 95, icon: "🔮" },
                  { skill: "Brand Alchemy", level: 97, icon: "⚗️" },
                  { skill: "Growth Hacking", level: 99, icon: "🚀" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold flex items-center">
                        <span className="mr-2">{item.icon}</span>
                        {item.skill}
                      </span>
                      <span className="text-purple-400 font-bold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center">
                  Discover My Magic
                  <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-black">
        <ParticleField />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Magical </span>
              <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </GlowingText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered solutions that transform your business into a market-dominating force
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FloatingCard 
                key={index} 
                delay={index * 0.3}
                className="group cursor-pointer"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 overflow-hidden">
                  {/* Animated Background */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${service.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <button className="flex items-center text-purple-400 hover:text-pink-400 font-semibold transition-colors duration-300">
                    Unleash This Magic
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </FloatingCard>
            ))}
          </div>

          {/* Center CTA */}
          <div className="text-center mt-20">
            <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-500">
              <span className="flex items-center justify-center">
                Start Your Transformation
                <Rocket className="w-6 h-6 ml-3" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Client </span>
              <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transformations
              </GlowingText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real magic, real results, real businesses transformed beyond recognition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard 
                key={index} 
                delay={index * 0.4}
                className="group cursor-pointer h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 overflow-hidden">
                  {/* Magic Sparkles Background */}
                  <div className="absolute top-4 right-4 text-4xl animate-bounce" style={{ animationDelay: `${index * 0.5}s` }}>
                    ✨
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                    <span className="ml-3 text-yellow-400 font-bold text-lg">Perfect!</span>
                  </div>
                  
                  {/* Quote */}
                  <Quote className="w-12 h-12 text-purple-400/50 mb-4" />
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-purple-400 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Magical Border Animation */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className="w-full h-full rounded-3xl bg-gray-900"></div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-8">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['🚀 TechCorp', '⚡ InnovateLab', '🎯 GrowthCo', '🔥 ScaleUp Inc', '💎 EliteBrands'].map((brand, index) => (
                <div key={index} className="text-xl font-bold text-white hover:text-purple-400 transition-colors cursor-pointer">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="relative py-32 bg-black">
        <ParticleField />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Marketing </span>
              <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Prophecies
              </GlowingText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Peer into the future of marketing with AI-powered insights and predictions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Marketing Revolution 2025: The Death of Traditional Advertising",
                excerpt: "Discover how AI-driven personalization will make traditional ads obsolete by Q2 2025.",
                date: "Future Prediction",
                readTime: "Mind-bending read",
                category: "🤖 AI Revolution",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Quantum Marketing: Computing the Perfect Customer Journey",
                excerpt: "How quantum algorithms are revolutionizing customer behavior prediction with 99.9% accuracy.",
                date: "Cutting Edge",
                readTime: "Reality-shifting",
                category: "🌌 Quantum Tech",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Neuro-Marketing: Reading Minds for Maximum ROI",
                excerpt: "The ethical implications and incredible results of brain-computer marketing interfaces.",
                date: "Future Now",
                readTime: "Consciousness-expanding",
                category: "🧠 Neuro-Science",
                gradient: "from-pink-500 to-orange-500"
              }
            ].map((post, index) => (
              <FloatingCard 
                key={index} 
                delay={index * 0.3}
                className="group cursor-pointer h-full"
              >
                <article className="relative h-full bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
                  {/* Header Image */}
                  <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                    
                    {/* Floating Category */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold text-sm">
                      {post.category}
                    </div>
                    
                    {/* Meta Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/80 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <BookOpen className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More Button */}
                    <button className="flex items-center text-purple-400 hover:text-pink-400 font-semibold transition-colors duration-300">
                      Read Prophecy
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                </article>
              </FloatingCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center justify-center">
                Access All Prophecies
                <Sparkles className="w-6 h-6 ml-3" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Ready for </span>
              <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Magic?
              </GlowingText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's conjure up some impossible results for your business. The transformation begins now.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <FloatingCard>
              <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-8 text-white overflow-hidden">
                {/* Background Effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 mr-6">
                      <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Naison Marufu</h3>
                      <p className="text-purple-200 font-semibold">The Marketing Magician ✨</p>
                      <div className="flex items-center mt-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-sm">Available for Magic</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Email Portal</p>
                        <p className="text-purple-200">naison@ashnaiholdings.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Magic Hotline</p>
                        <p className="text-purple-200">+263 xxx xxx xxx</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">HQ Location</p>
                        <p className="text-purple-200">Harare, Zimbabwe 🇿🇼</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn Army</p>
                        <p className="text-purple-200">9.5K+ Followers & Growing</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <a href="#" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors group">
                      <Linkedin className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-semibold">LinkedIn</p>
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors group">
                      <Twitter className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-semibold">Twitter</p>
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors group">
                      <Instagram className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-semibold">Instagram</p>
                    </a>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Right Side - Contact Form */}
            <FloatingCard delay={0.5}>
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                <h3 className="text-3xl font-bold text-white mb-2">Start Your Transformation</h3>
                <p className="text-gray-300 mb-8">Tell me about your business and let's create some magic together ✨</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-purple-300 mb-3">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-4 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-purple-300 mb-3">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-4 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-purple-300 mb-3">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="john@amazingcompany.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-purple-300 mb-3">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="Your Amazing Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-purple-300 mb-3">What Magic Do You Need?</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-4 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                      placeholder="Tell me about your marketing challenges, goals, and dreams..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-5 px-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-500"
                  >
                    <span className="flex items-center justify-center">
                      Cast the Spell
                      <Zap className="w-6 h-6 ml-3" />
                    </span>
                  </button>
                </form>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-purple-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img src={profileImage} alt="Naison Marufu" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <GlowingText className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Naison Marufu
                    </GlowingText>
                  </h3>
                  <p className="text-purple-300 font-semibold">The Marketing Magician ✨</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Transforming businesses through AI-powered marketing magic. Based in Harare, Zimbabwe, 
                creating impossible results worldwide.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, bg: "from-blue-600 to-blue-700" },
                  { icon: <Twitter className="w-5 h-5" />, bg: "from-blue-400 to-blue-500" },
                  { icon: <Instagram className="w-5 h-5" />, bg: "from-pink-500 to-pink-600" },
                  { icon: <Globe className="w-5 h-5" />, bg: "from-purple-600 to-purple-700" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-12 h-12 bg-gradient-to-r ${social.bg} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {['Quick Links', 'Magic Services'].map((title, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="font-bold text-white mb-6">{title}</h4>
                <ul className="space-y-3 text-gray-400">
                  {(sectionIndex === 0 ? 
                    ['Home', 'About', 'Services', 'Reviews', 'Insights', 'Contact'] :
                    ['AI Marketing', 'Predictive Analytics', 'Brand Evolution', 'Quantum Insights', 'Magic Consultation']
                  ).map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="hover:text-purple-400 transition-colors duration-300 flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">✨</span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Naison Marufu - The Marketing Magician. All rights reserved. ✨
              </p>
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Spell</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Magic</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookie Enchantment</a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                🚀 Powered by AI • 🔮 Driven by Magic • 🎯 Focused on Impossible Results • ✨ Making Dreams Reality
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Magic Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white w-20 h-20 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-500 flex items-center justify-center overflow-hidden">
          <Sparkles className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Back to Top Magic */}
      <div className="fixed bottom-8 left-8 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group bg-white/10 backdrop-blur-sm text-purple-400 w-16 h-16 rounded-full shadow-xl hover:shadow-purple-500/30 border border-purple-500/30 hover:border-purple-400/60 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <ChevronRight className="w-8 h-8 transform -rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Magic Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .bg-size-200 { background-size: 200% 200%; }
        .bg-pos-0 { background-position: 0% 50%; }
        .bg-pos-100 { background-position: 100% 50%; }
      `}</style>
    </div>
  );
};

export default NaisonMagicalWebsite;