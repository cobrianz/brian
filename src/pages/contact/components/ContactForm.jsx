import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    budget: "",
    timeline: "",
    message: "",
    urgency: "normal",
    positionType: "",
    workArrangement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    { value: "job", label: "Job Opportunity", icon: "Briefcase" },
    { value: "freelance", label: "Freelance Project", icon: "Code" },
    { value: "collaboration", label: "Collaboration", icon: "Users" },
    { value: "consultation", label: "Consultation", icon: "MessageCircle" },
    { value: "networking", label: "Networking", icon: "Network" },
  ];

  const budgetRanges = [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 - $15,000" },
    { value: "15k-50k", label: "$15,000 - $50,000" },
    { value: "over-50k", label: "Over $50,000" },
    { value: "discuss", label: "Let's discuss" },
  ];

  const timelineOptions = [
    { value: "asap", label: "ASAP" },
    { value: "1-2weeks", label: "1-2 weeks" },
    { value: "1month", label: "1 month" },
    { value: "2-3months", label: "2-3 months" },
    { value: "flexible", label: "Flexible" },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.inquiryType)
      newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.inquiryType === "job" && !formData.company.trim())
      newErrors.company = "Company name is required for job inquiries";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "N/A",
        inquiry_type:
          inquiryTypes.find((type) => type.value === formData.inquiryType)
            ?.label || "N/A",
        budget:
          budgetRanges.find((range) => range.value === formData.budget)
            ?.label || "N/A",
        timeline:
          timelineOptions.find((option) => option.value === formData.timeline)
            ?.label || "N/A",
        message: formData.message,
        urgency: formData.urgency,
        position_type: formData.positionType || "N/A",
        work_arrangement: formData.workArrangement || "N/A",
      };

      // Send email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        budget: "",
        timeline: "",
        message: "",
        urgency: "normal",
        positionType: "",
        workArrangement: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear success/error messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const getConditionalFields = () => {
    switch (formData.inquiryType) {
      case "job":
        return (
          <>
            <Input
              label="Company Name"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              required
              error={errors.company}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Position Type
                </label>
                <select
                  name="positionType"
                  value={formData.positionType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select type</option>
                  <option value="full-time">Full-time</option>
                  <option value="contract">Contract</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Work Arrangement
                </label>
                <select
                  name="workArrangement"
                  value={formData.workArrangement}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select arrangement</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-site</option>
                </select>
              </div>
            </div>
          </>
        );
      case "freelance":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-premium">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Icon name="Send" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Send Message</h3>
          <p className="text-sm text-text-secondary">
            Let's discuss your project
          </p>
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={20} className="text-success" />
            <p className="text-success font-medium">
              Message sent successfully! I'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" size={20} className="text-error" />
            <p className="text-error font-medium">
              Failed to send message. Please try again or contact me directly.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
            error={errors.name}
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            error={errors.email}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Inquiry Type
          </label>
          {errors.inquiryType && (
            <p className="text-error text-sm mb-2">{errors.inquiryType}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inquiryTypes.map((type) => (
              <label
                key={type.value}
                className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                  formData.inquiryType === type.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50 hover:bg-surface"
                }`}
              >
                <input
                  type="radio"
                  name="inquiryType"
                  value={type.value}
                  checked={formData.inquiryType === type.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <Icon name={type.icon} size={18} />
                <span className="text-sm font-medium">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {getConditionalFields()}

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            placeholder="Tell me about your project, requirements, or any questions you have..."
            className={`w-full px-3 py-2 bg-input border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              errors.message ? "border-error" : "border-border"
            }`}
            required
          />
          {errors.message && (
            <p className="text-error text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Urgency Level
          </label>
          <div className="flex space-x-4">
            {[
              {
                value: "low",
                label: "Low Priority",
                color: "text-text-secondary",
              },
              { value: "normal", label: "Normal", color: "text-primary" },
              { value: "high", label: "Urgent", color: "text-warning" },
            ].map((urgency) => (
              <label
                key={urgency.value}
                className={`flex items-center space-x-2 cursor-pointer ${
                  formData.urgency === urgency.value
                    ? urgency.color
                    : "text-text-secondary"
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={urgency.value}
                  checked={formData.urgency === urgency.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    formData.urgency === urgency.value
                      ? "border-current bg-current"
                      : "border-border"
                  }`}
                >
                  {formData.urgency === urgency.value && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                  )}
                </div>
                <span className="text-sm font-medium">{urgency.label}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226]"
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
