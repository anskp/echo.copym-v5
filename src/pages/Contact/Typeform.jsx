import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Building2, Briefcase, DollarSign, MapPin,
  ShieldCheck, CheckCircle, LinkIcon, FileText, Layers, ArrowLeft
} from "lucide-react";

/**
 * Copym — RWA Tokenized Marketplace
 * Typeform-style form
 * - First screen: "Get Started" prompt
 * - Then form with Back button and OK
 * - Updated to match AccessPage theme structure
 * - No progress bar
 */

const THEME = {
  pageBg: "bg-blue-100",
  ctaGrad: "bg-gradient-to-r from-emerald-500 to-blue-500 text-white",
  ctaHover: "hover:from-emerald-600 hover:to-blue-600 transform hover:scale-[1.02] active:scale-[0.98]",
  ring: "focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2",
  inputFocus: "focus:border-emerald-500 focus:bg-white focus:shadow-lg",
  accent: {
    deep: "#059669",
    mid: "#10b981", 
    light: "#34d399",
    ultraLight: "#ecfdf5",
  },
};

const steps = [
  {
    id: "tokenGoal",
    label: "First, what are your Tokenization goals?",
    helper: "Choose the area you want to tokenize with Copym",
    type: "segmented",
    icon: Layers,
    required: true,
    options: [
      "Tokenize Real Estate",
      "Tokenize Debt / Credit",
      "Tokenize Commodities",
      "Tokenize Art / Collectibles",
      "Tokenize Infrastructure",
      "Other",
    ],
  },
  { id: "companyName", label: "What is the name of your company?", type: "text", icon: Building2, required: true },
  { id: "firstName", label: "What is your First Name?", type: "text", icon: User, required: true },
  { id: "lastName", label: "What is your Last Name?", type: "text", icon: User, required: true },
  { id: "email", label: "What is your email?", type: "email", icon: Mail, required: true, validate: v => /\S+@\S+\.\S+/.test(v || "") },
  { id: "title", label: "What is your title?", type: "text", icon: Briefcase, required: true },
  { id: "website", label: "What is your website?", type: "url", icon: LinkIcon, required: true, validate: v => /^https?:\/\//i.test(v || "") },
  {
    id: "industry",
    label: "What Industry is your company in?",
    type: "segmented",
    icon: Building2,
    required: true,
    options: [
      "Real Estate",
      "Private Credit",
      "Treasury Bills",
      "Commodities",
      "Art / Collectibles",
      "Energy / Infrastructure",
      "Other",
    ],
  },
  {
    id: "summary",
    label: "Please give us a brief summary about the company",
    type: "textarea",
    icon: FileText,
    required: true,
  },
  {
    id: "traction",
    label: "Please share any applicable traction on the company",
    type: "textarea",
    icon: FileText,
    required: true,
  },
  {
    id: "raised",
    label: "How much $ has the company raised to date? (In Millions)",
    helper: "Use decimals if under $1M, e.g., 0.5",
    type: "number",
    icon: DollarSign,
    required: true,
  },
  {
    id: "address",
    label: "What is the company's address?",
    type: "group",
    icon: MapPin,
    required: true,
    fields: [
      { key: "street", label: "Address", required: true },
      { key: "line2", label: "Address line 2", required: false },
      { key: "city", label: "City/Town", required: true },
      { key: "state", label: "State/Region/Province", required: true },
      { key: "zip", label: "Zip/Post code", required: true },
      { key: "country", label: "Country", required: true },
    ],
  },
  {
    id: "incUS",
    label: "Is the company incorporated in the U.S?",
    type: "segmented",
    icon: ShieldCheck,
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "productAvailable",
    label: "Is your product available (for sale) in market?",
    type: "segmented",
    icon: ShieldCheck,
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "revenue",
    label: "Is your company generating revenue?",
    type: "segmented",
    icon: ShieldCheck,
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "raiseStructure",
    label: "How would you like to structure your raise on Copym?",
    type: "segmented",
    icon: DollarSign,
    required: true,
    options: [
      "Tokenized Equity",
      "Tokenized Debt",
      "Revenue Share",
      "SAFE / SAFT",
      "SPV",
      "Other",
    ],
  },
];

const initialForm = {
  tokenGoal: "",
  companyName: "",
  firstName: "",
  lastName: "",
  email: "",
  title: "",
  website: "",
  industry: "",
  summary: "",
  traction: "",
  raised: "",
  address: { street: "", line2: "", city: "", state: "", zip: "", country: "" },
  incUS: "",
  productAvailable: "",
  revenue: "",
  raiseStructure: "",
};

export default function Typeform() {
  const [form, setForm] = useState(initialForm);
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false); // Controls landing vs form

  const step = useMemo(() => steps[stepIndex], [stepIndex]);

  const setValue = (id, value) => setForm(prev => ({ ...prev, [id]: value }));
  const setAddress = (k, v) =>
    setForm(prev => ({ ...prev, address: { ...prev.address, [k]: v } }));

  const validateCurrent = () => {
    setError("");
    if (step.required) {
      if (step.type === "group") {
        for (const f of step.fields) {
          if (f.required && !form.address[f.key]) {
            setError(`${f.label} is required.`);
            return false;
          }
        }
      } else if (!form[step.id]) {
        setError("This question is required.");
        return false;
      }
    }
    if (typeof step.validate === "function") {
      if (!step.validate(form[step.id])) {
        setError("Please enter a valid value.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateCurrent()) return;
    if (stepIndex < steps.length - 1) setStepIndex(i => i + 1);
    else setSubmitted(true);
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(i => i - 1);
    else setShowForm(false); // Go back to landing
  };

  return (
    <div className="min-h-screen text-gray-900 flex items-center justify-center px-4 py-2">
      <div className="relative w-full max-w-4xl group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/30 hover:border-green-300/50 p-6 sm:p-8 shadow-xl">
        
        {/* Background gradient overlay - Same as AccessPage */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Enhanced Brand */}
        <div className="absolute top-8 left-8 flex items-center gap-4 z-10">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 grid place-items-center shadow-xl overflow-hidden border border-white/30">
            <img 
              src="/assets/copym/png/Copym-05-1.png" 
              alt="Copym Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-black tracking-wide text-lg text-gray-900">Copym</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="min-h-[300px] pt-12 relative z-10">
          <AnimatePresence mode="wait">
            {!showForm ? (
              // Enhanced Landing Screen with AccessPage-inspired styling
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                {/* Enhanced Section Header */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 rounded-full border border-emerald-200 mb-6">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-emerald-700">Quick & Secure Process</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 uppercase anton-regular">
                    <span className="text-gray-900">READY TO </span>
                    <span className="text-emerald-600">TOKENIZE YOUR ASSETS?</span>
                  </h1>
                  
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
                    This form takes only <span className="font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">2 minutes</span> to complete and will capture all the information needed for your tokenization journey.
                  </p>
                  
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Join the future of Real World Asset tokenization with Copym.
                  </p>
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => setShowForm(true)}
                    className="px-12 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-xl shadow-2xl border border-emerald-200 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started →
                  </motion.button>
                  
                  <p className="text-sm text-gray-500 mt-4 font-medium">Secure & confidential • Enterprise-grade encryption</p>
                </motion.div>
              </motion.div>
            ) : !submitted ? (
              // Enhanced Form Screen
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      Question {stepIndex + 1} of {steps.length}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        {Math.round(((stepIndex + 1) / steps.length) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Button + Question */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.button
                      onClick={handleBack}
                      className="p-3 rounded-2xl hover:bg-gray-100 border border-gray-200 transition-all hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </motion.button>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 grid place-items-center border border-emerald-200 shadow-sm">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight uppercase anton-regular">{step.label}</h2>
                          {step.helper && (
                            <p className="text-base text-gray-600 mt-2">{step.helper}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <Question
                    step={step}
                    value={form[step.id]}
                    address={form.address}
                    onChange={setValue}
                    onAddressChange={setAddress}
                  />
                </div>

                {error && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-100 border border-red-300 rounded-2xl flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⚠</span>
                    </div>
                    <span className="text-red-700 font-medium">{error}</span>
                  </motion.div>
                )}

                {/* Enhanced Action Buttons */}
                <div className="flex justify-center">
                  {step.type === "segmented" && (
                    <motion.button
                      onClick={handleNext}
                      disabled={!form[step.id]}
                      className={`px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-lg shadow-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 ${
                        !form[step.id] ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                      }`}
                      whileHover={form[step.id] ? { scale: 1.05 } : {}}
                      whileTap={form[step.id] ? { scale: 0.95 } : {}}
                    >
                      OK ✓
                    </motion.button>
                  )}

                  {["text", "email", "url", "number", "textarea", "group"].includes(step.type) && (
                    <motion.button
                      onClick={handleNext}
                      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-lg shadow-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {stepIndex === steps.length - 1 ? "Submit Application" : "Continue →"}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <ThankYou />
            )}
          </AnimatePresence>
        </div>
        
        {/* Bottom accent line - Same as AccessPage */}
        <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500 absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
}

function Question({ step, value, address, onChange, onAddressChange }) {
  return (
    <>
      {/* Enhanced text / email / url / number inputs */}
      {["text", "email", "url", "number"].includes(step.type) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type={step.type}
            value={value || ""}
            onChange={(e) =>
              onChange(
                step.id,
                step.type === "number" ? e.target.value.replace(/[^0-9.]/g, "") : e.target.value
              )
            }
            className="w-full px-6 py-5 text-lg rounded-2xl bg-white border-2 border-gray-200 placeholder-gray-400 text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 transition-all duration-200"
            placeholder="Type your answer..."
            autoFocus
          />
        </motion.div>
      )}

      {/* Enhanced textarea */}
      {step.type === "textarea" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <textarea
            rows={6}
            value={value || ""}
            onChange={(e) => onChange(step.id, e.target.value)}
            className="w-full px-6 py-5 text-lg rounded-2xl bg-white border-2 border-gray-200 placeholder-gray-400 text-gray-900 outline-none resize-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 transition-all duration-200"
            placeholder="Share your thoughts here..."
            autoFocus
          />
        </motion.div>
      )}

      {/* Enhanced segmented buttons */}
      {step.type === "segmented" && (
        <motion.div 
          className="flex flex-col gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {step.options.map((opt, index) => {
            const active = value === opt;
            return (
              <motion.button
                key={opt}
                onClick={() => onChange(step.id, opt)}
                className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200 text-lg font-medium ${
                  active
                    ? "border-emerald-500 bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-[1.02]"
                    : "border-gray-200 bg-white hover:bg-gray-50 hover:border-emerald-300 hover:shadow-md hover:scale-[1.01] text-gray-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: active ? 1.02 : 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {active && (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 text-sm">✓</span>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Enhanced grouped address */}
      {step.type === "group" && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {step.fields.map((f, index) => (
            <motion.input
              key={f.key}
              type="text"
              value={address?.[f.key] || ""}
              onChange={(e) => onAddressChange(f.key, e.target.value)}
              placeholder={f.label}
              className={`px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 placeholder-gray-400 text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 transition-all duration-200 text-lg ${f.key === 'line2' ? 'sm:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}

function ThankYou() {
  return (
    <motion.div
      key="thankyou"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center max-w-2xl mx-auto"
    >
      <motion.div 
        className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-blue-500 grid place-items-center shadow-2xl mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <CheckCircle className="w-12 h-12 text-white" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-4xl font-black mb-4 text-gray-900 uppercase anton-regular">
          Application Submitted! 🎉
        </h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Thank you for your interest in tokenizing with{" "}
          <span className="text-emerald-600 font-bold">Copym</span>
        </p>
        
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <div className="text-left space-y-2 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Our team will review your application within 24 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>We'll schedule a consultation call to discuss your tokenization goals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>You'll receive a personalized tokenization strategy</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Questions? Contact us at{" "}
          <a href="mailto:hello@copym.xyz" className="text-emerald-600 hover:underline font-medium">
            hello@copym.xyz
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}