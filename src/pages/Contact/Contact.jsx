import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typeform from './Typeform';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  HeadphonesIcon,
  MessageSquare,
  Users,
  Shield,
  Zap,
  FileText,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ExternalLink,
  Download,
  Star,
  Scale,
  Lock,
  Award,
  X
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    assetType: '',
    investmentInterest: '',
    accreditation: '',
    subject: '',
    message: '',
    contactType: 'investor',
    phone: '',
    preferredContact: 'email',
    compliance: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showTypeform, setShowTypeform] = useState(true);

  // RWA-specific contact types
  const contactTypes = [
    { value: 'investor', label: 'Investor Inquiry', icon: Users },
    { value: 'issuer', label: 'Asset Issuer / Sponsor', icon: Building2 },
    { value: 'partner', label: 'Institutional Partnership', icon: Users },
    { value: 'legal', label: 'Legal & Compliance', icon: Scale },
    { value: 'tech', label: 'Technical Integration', icon: Globe },
    { value: 'support', label: 'Platform Support', icon: Shield }
  ];

  // RWA-specific asset types
  const assetOptions = [
    'Real Estate',
    'Private Equity',
    'Infrastructure',
    'Commodities',
    'Art & Collectibles',
    'Debt Instruments',
    'Venture Capital',
    'Hedge Funds',
    'Other'
  ];

  const investmentLevels = [
    'Under $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    'Over $5M',
    'Exploring Options'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@copym.xyz', 'hello@copym.xyz'],
      description: 'Get in touch via email for any inquiries',
      action: 'mailto:support@copym.xyz'
    },
    {
      icon: Phone,
      title: 'Direct Line',
      details: ['+1 (555) 123-4567'],
      description: 'Speak directly with our team',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Park, Whitefield', 'Bangalore, Karnataka 560066, India'],
      description: 'Drop by our office for a meeting',
      action: 'https://maps.app.goo.gl/tRFiZ3JenBnBVG158?g_st=ac'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Support Available', 'Round the clock assistance'],
      description: 'We\'re here when you need us',
      action: null
    }
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/rwa-platform', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/rwa-platform', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/rwa-platform', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/rwa-platform', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/rwa-platform', color: 'hover:text-red-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Fully compliant with SEC, KYC, and AML standards'
    },
    {
      icon: Scale,
      title: 'Legal Framework',
      description: 'Robust legal structure for asset tokenization'
    },
    {
      icon: Lock,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and audit trails'
    }
  ];

  const resources = [
    { name: 'Investor Deck', icon: Download, url: '/resources/investor-deck.pdf' },
    { name: 'Whitepaper', icon: FileText, url: '/resources/whitepaper.pdf' },
    { name: 'Compliance Framework', icon: Shield, url: '/compliance' },
    { name: 'API Documentation', icon: Globe, url: '/api' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';

    if (!formData.company.trim()) newErrors.company = 'Company or organization is required';
    if (!formData.role.trim()) newErrors.role = 'Your role (e.g., CFO, Portfolio Manager) is required';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (formData.preferredContact === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.compliance) {
      newErrors.compliance = 'You must agree to the compliance terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));

    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        assetType: '',
        investmentInterest: '',
        accreditation: '',
        subject: '',
        message: '',
        contactType: 'investor',
        phone: '',
        preferredContact: 'email',
        compliance: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickContact = (type) => {
    const emails = {
      investor: 'support@copym.xyz',
      issuer: 'support@copym.xyz',
      partner: 'support@copym.xyz',
      legal: 'support@copym.xyz',
      tech: 'support@copym.xyz',
      support: 'support@copym.xyz'
    };
    
    const subjects = {
      investor: 'Investor Inquiry',
      issuer: 'Asset Issuer Inquiry',
      partner: 'Partnership Inquiry',
      legal: 'Legal & Compliance Inquiry',
      tech: 'Technical Integration Inquiry',
      support: 'Platform Support Request'
    };

    window.location.href = `mailto:${emails[type]}?subject=${subjects[type]}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-black" />
          <path d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450" stroke="currentColor" strokeWidth="2" fill="none" className="text-black" />
        </svg>
      </div>

      {/* Gradient Orbs - Removed for consistent background */}

      {/* Live Chat Widget - Mobile Responsive */}
      <motion.div 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setShowLiveChat(!showLiveChat)}
          className="bg-gradient-to-r from-[#1e40af] to-[#065f46] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation"
          aria-label="Open live chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        {showLiveChat && (
          <motion.div 
            className="absolute bottom-16 right-0 w-72 sm:w-80 bg-white rounded-lg shadow-xl border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-3 sm:p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-[#1e40af] text-sm sm:text-base">Live Chat</h3>
                <p className="text-xs sm:text-sm text-black">We're online and ready to help!</p>
              </div>
              <button
                onClick={() => setShowLiveChat(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-black mb-3">Start a conversation with our support team.</p>
              <button className="w-full bg-[#065f46] text-white py-2 px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#064e3b] transition-colors">
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 pb-8 sm:pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
                 {/* Header - Enhanced Mobile Responsiveness */}
         <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 sm:mb-4 lg:mb-6 text-[#1e40af] font-bold px-2">
             Let's <span className="text-[#065f46]">Connect</span>
           </h1>
           <p className="text-sm sm:text-base lg:text-xl max-w-2xl sm:max-w-3xl mx-auto text-gray-700 px-4">
             Connect with our team for investor onboarding, asset tokenization,
             legal compliance, or technical integration.
           </p>
         </motion.div>

        {/* Quick Contact Cards - Smart 3-Column Layout */}
        {/* <motion.div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12" variants={itemVariants}>
          {contactTypes.map((type) => (
            <motion.div
              key={type.value}
              className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-[#065f46] hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 active:scale-95 touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleQuickContact(type.value)}
            >
              <div className="p-2 sm:p-4 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#1e40af] to-[#065f46] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <type.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#1e40af] mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base leading-tight">{type.label}</h3>
                <p className="text-xs text-black leading-tight">Secure email for qualified parties</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Form Type Toggle */}
        {/* <motion.div className="flex justify-center mb-6 sm:mb-8" variants={itemVariants}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-2">
            <div className="flex">
              <button
                onClick={() => setShowTypeform(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  !showTypeform 
                    ? 'bg-gradient-to-r from-[#1e40af] to-[#065f46] text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Standard Form
              </button>
              <button
                onClick={() => setShowTypeform(true)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  showTypeform 
                    ? 'bg-gradient-to-r from-[#1e40af] to-[#065f46] text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Interactive Typeform
              </button>
            </div>
          </div>
        </motion.div> */}

        {/* Main Content Grid - Fixed Responsive Layout */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form - Optimized for all screens */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <Typeform />
          </motion.div>
        </div>

        {/* Horizontal Sidebar Sections */}
        <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Information - Single Consolidated Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
              <h3 className="font-semibold text-[#1e40af] mb-4 text-base sm:text-lg">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1e40af] to-[#065f46] rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#1e40af] text-sm">{info.title}</h4>
                      {info.details.map((d, i) => (
                        <p key={i} className="text-black text-xs mb-1 break-words">{d}</p>
                      ))}
                      <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                      {info.action && (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#065f46] text-xs mt-1 hover:underline"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {info.action.includes('mailto') ? 'Email Us' : info.action.includes('tel') ? 'Call' : 'View Map'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
              
            {/* Social Media & Resources - Combined Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
              <h3 className="font-semibold text-[#1e40af] mb-4 text-base sm:text-lg">Connect & Resources</h3>
              
              {/* Social Media */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3 text-sm">Follow Us</h4>
                <div className="flex flex-wrap gap-2">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors ${social.color} touch-manipulation`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-4 h-4 text-black" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3 text-sm">Resources</h4>
                <div className="space-y-2">
                  {resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation"
                    >
                      <r.icon className="w-4 h-4 text-[#065f46] flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{r.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Partner With Us - Simplified */}
            <div className="bg-gradient-to-br from-[#1e40af] to-[#065f46] rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-4">Why Partner With Us</h3>
              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <f.icon className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{f.title}</p>
                      <p className="text-white/70 text-xs">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section - Optimized layout */}
        <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e40af] mb-3 sm:mb-4">Find Us</h2>
            <p className="text-black text-sm sm:text-base">Visit our office or get in touch</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copym Office Location - Bangalore"
              ></iframe>
      </div>
          </div>
        </motion.div>


      </motion.div>
    </div>
  );
};

export default Contact;