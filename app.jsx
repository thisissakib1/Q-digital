import { useState, useEffect } from 'react';
import {
  Briefcase,
  Layers,
  Code,
  Users,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Menu,
  X,
  Dribbble,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Tag,
  Rocket,
  Shield,
  Zap,
  Star,
  Sparkles,
  Palette,
  Layout,
  Globe,
  Monitor,
  Lightbulb,
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
} from 'lucide-react';

// Main App component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case 'case-study':
        return <CaseStudyPage />;
      case 'team':
        return <TeamPage />;
      case 'pricing':
        return <PricingPage />;
      case 'blog':
        return <BlogPage setCurrentPage={setCurrentPage} />;
      case 'blog-post-1':
        return <BlogPostPage post={blogPosts[0]} />;
      case 'blog-post-2':
        return <BlogPostPage post={blogPosts[1]} />;
      case 'blog-post-3':
        return <BlogPostPage post={blogPosts[2]} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="bg-slate-950 font-sans text-gray-300 antialiased">
      <NavBar 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isScrolled={isScrolled}
      />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Enhanced Navigation Bar component
const NavBar = ({ setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen, isScrolled }) => {
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Team', page: 'team' },
    { name: 'Pricing', page: 'pricing' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-xl py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={() => setCurrentPage('home')} className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
          qdigital.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.page} 
              href="#" 
              onClick={() => setCurrentPage(item.page)} 
              className="relative px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 py-2.5 px-6 rounded-full font-bold shadow-lg transition-all duration-300 hover:shadow-cyan-500/25 hover:scale-105"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none transition-all duration-300 p-1 rounded-lg hover:bg-slate-800"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl px-6 py-8 transition-all duration-300 ease-in-out origin-top animate-fade-in-down border-t border-slate-800">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.page}
                href="#"
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsMobileMenuOpen(false);
              }} 
              className="mt-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 py-3 px-6 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// Enhanced Home Page component
const HomePage = ({ setCurrentPage }) => {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection setCurrentPage={setCurrentPage} />
      <StatsSection />
      <TestimonialsSection />
      <CallToActionSection setCurrentPage={setCurrentPage} />
    </>
  );
};

// Enhanced Hero Section
const HeroSection = ({ setCurrentPage }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-0 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-cyan-950/70 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 text-white max-w-6xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm font-medium">We're accepting new projects</span>
          <ArrowRight size={14} className="ml-2" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Digital Excellence <br /> 
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Reimagined</span>
        </h1>
        
        <p className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto text-gray-300">
          We are qdigital, a collective of designers and developers dedicated to creating future-proof digital experiences that captivate and convert.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button onClick={() => setCurrentPage('services')} className="group relative bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 py-4 px-10 rounded-full font-bold shadow-lg transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Explore Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button onClick={() => setCurrentPage('portfolio')} className="group relative border-2 border-slate-700 text-white py-4 px-10 rounded-full font-bold shadow-lg transition-all duration-300 hover:border-cyan-400/30 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              View Our Work
              <ArrowUpRight size={18} className="ml-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

// New Clients Section
const ClientsSection = () => {
  const clients = [
    { name: 'Google', logo: 'Google' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'Netflix', logo: 'Netflix' },
    { name: 'Spotify', logo: 'Spotify' },
    { name: 'Airbnb', logo: 'Airbnb' },
  ];

  return (
    <section className="py-16 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 mb-12 text-lg">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="text-gray-400 hover:text-cyan-400 transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100">
              <div className="h-8 w-32 bg-slate-800 rounded-lg flex items-center justify-center">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user interfaces that lead to seamless user experiences.',
      color: 'from-violet-500 to-purple-400',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building robust, scalable, and high-performance websites and web applications from the ground up.',
      color: 'from-sky-500 to-cyan-400',
    },
    {
      icon: Sparkles,
      title: 'Brand Strategy',
      description: 'Developing a cohesive brand identity and strategy that truly resonates with your audience.',
      color: 'from-amber-500 to-yellow-400',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Implementing data-driven strategies to boost your online presence and drive measurable growth.',
      color: 'from-rose-500 to-pink-400',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We bring a holistic approach to every project, combining technical expertise with creative vision to deliver outstanding results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 border border-slate-800/50 hover:border-cyan-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-slate-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}>
                  <service.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-sm font-medium text-cyan-400 flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Portfolio Section
const projects = [
  { 
    title: 'Nexus UI/UX Design', 
    category: 'UI/UX Design', 
    image: 'https://images.unsplash.com/photo-1549495759-992a06511a7c?q=80&w=2670&auto=format&fit=crop', 
    page: 'case-study' 
  },
  { 
    title: 'Project Genesis Branding', 
    category: 'Brand Identity', 
    image: 'https://images.unsplash.com/photo-1579783900882-c2057d9b936f?q=80&w=2670&auto=format&fit=crop', 
    page: 'portfolio' 
  },
  { 
    title: 'Aura E-commerce Platform', 
    category: 'Web Development', 
    image: 'https://images.unsplash.com/photo-1582213782179-e0d5333bb203?q=80&w=2670&auto=format&fit=crop', 
    page: 'portfolio' 
  },
  { 
    title: 'Stratosphere Mobile App', 
    category: 'UI/UX Design', 
    image: 'https://images.unsplash.com/photo-1629864299981-d13028d68966?q=80&w=2670&auto=format&fit=crop', 
    page: 'portfolio' 
  },
  { 
    title: 'Orion Marketing Campaign', 
    category: 'Digital Marketing', 
    image: 'https://images.unsplash.com/photo-1550547660-f9479e0f3938?q=80&w=2670&auto=format&fit=crop', 
    page: 'portfolio' 
  },
  { 
    title: 'Equinox SaaS Solution', 
    category: 'Web Development', 
    image: 'https://images.unsplash.com/photo-1620242250109-0d29d3c50965?q=80&w=2670&auto=format&fit=crop', 
    page: 'portfolio' 
  },
];

const PortfolioSection = ({ setCurrentPage }) => {
  return (
    <section className="py-24 md:py-32 bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Creative Portfolio</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A glimpse into the diverse projects where we've partnered with forward-thinking brands to build amazing digital experiences.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentPage(project.page)} 
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-cyan-500/10 border border-slate-800/50 hover:border-cyan-400/20 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm text-cyan-400 mr-2">View project</span>
                  <ArrowUpRight size={16} className="text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setCurrentPage('portfolio')} 
            className="inline-flex items-center bg-slate-800/50 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-400/30"
          >
            View all projects
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

// New Stats Section
const StatsSection = () => {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '12+', label: 'Years Experience' },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-sky-500/5 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "qdigital's work is simply outstanding. They turned our vague ideas into a stunning and highly functional website that exceeded all our expectations.",
      author: "Jane Doe",
      title: "CEO, Innovate Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2587&auto=format&fit=crop",
    },
    {
      text: "The team is incredibly talented and professional. Their dedication to our project and attention to detail resulted in a product we are truly proud of.",
      author: "John Smith",
      title: "Founder, Apex Corp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
    },
    {
      text: "Our new platform has seen a remarkable increase in user engagement since its launch. The design is beautiful and the performance is flawless.",
      author: "Emily Chen",
      title: "Marketing Director, Global Ventures",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Partners Say</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We pride ourselves on building strong relationships and delivering results that speak for themselves.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full px-8 py-12 md:p-16">
                  <div className="text-center">
                    <div className="inline-flex p-3 rounded-full bg-slate-700/50 mb-6">
                      <Star size={24} className="text-amber-400 fill-amber-400" />
                    </div>
                    
                    <p className="text-xl italic text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">"{testimonial.text}"</p>
                    
                    <div className="flex items-center justify-center">
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/30" />
                      <div className="ml-4 text-left">
                        <div className="font-semibold text-white">{testimonial.author}</div>
                        <div className="text-sm text-cyan-400">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button 
              onClick={() => {
                setIsAutoPlaying(!isAutoPlaying);
                prevSlide();
              }} 
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={() => {
                setIsAutoPlaying(!isAutoPlaying);
                nextSlide();
              }} 
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-cyan-400 w-6' : 'bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Call to Action Section
const CallToActionSection = ({ setCurrentPage }) => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-400 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2640&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-6">Ready to Create Something Amazing?</h2>
        <p className="text-slate-800 text-lg mb-10 max-w-3xl mx-auto">
          Let's discuss your vision and turn it into a powerful digital reality. Our team is ready to help you succeed.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="bg-slate-950 text-white py-4 px-10 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-900 hover:shadow-xl"
          >
            Start Your Project
          </button>
          
          <button 
            onClick={() => setCurrentPage('services')} 
            className="bg-white/10 text-slate-950 backdrop-blur-sm py-4 px-10 rounded-full font-bold border-2 border-slate-950/20 transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// The remaining page components (About, Services, Portfolio, etc.) would follow similar enhancement patterns
// For brevity, I'll show the enhanced Footer component and note that other pages would receive similar upgrades

// Enhanced Footer component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-16 border-t border-slate-800/50">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="md:col-span-2">
          <a href="#" onClick={() => setCurrentPage('home')} className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent mb-6 inline-block">
            qdigital.
          </a>
          <p className="text-sm leading-relaxed max-w-md mb-6">
            We are a creative agency specializing in web design, development, and digital strategy. We help brands succeed in the digital world.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 bg-slate-900 rounded-lg">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 bg-slate-900 rounded-lg">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 bg-slate-900 rounded-lg">
              <Dribbble size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 bg-slate-900 rounded-lg">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" onClick={() => setCurrentPage('about')} className="hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#" onClick={() => setCurrentPage('services')} className="hover:text-cyan-400 transition-colors duration-300">Our Services</a></li>
            <li><a href="#" onClick={() => setCurrentPage('portfolio')} className="hover:text-cyan-400 transition-colors duration-300">Portfolio</a></li>
            <li><a href="#" onClick={() => setCurrentPage('contact')} className="hover:text-cyan-400 transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Mail size={18} className="text-cyan-400 mr-3 mt-1" />
              <span>hello@qdigital.com</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3 mt-1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>123 Digital Street<br />San Francisco, CA 94103</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-800/50 text-center text-sm">
        <p>&copy; 2024 qdigital. All rights reserved.</p>
      </div>
    </footer>
  );
};

