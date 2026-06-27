"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, Users, MessageSquare, User, Phone, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

const WHATSAPP_NUMBER = "2348160566598";

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const message = `Hello LGX Atlantic Hub! I'd like to make a booking.

*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Service:* ${data.serviceType}
*Date:* ${data.date}
*Time:* ${data.time}
${data.numberOfGuests ? `*Guests:* ${data.numberOfGuests}` : ""}
${data.additionalNotes ? `*Notes:* ${data.additionalNotes}` : ""}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); reset(); }, 5000);
  };

  if (isSubmitted) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ maxWidth: "440px", width: "100%", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", borderRadius: "24px", padding: "56px 40px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #d4af37, #c9a961)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <CheckCircle color="#0a1628" size={40} />
          </div>
          <h2 className="font-bold text-white" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>Request Sent!</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.8, marginBottom: "32px" }}>
            Your booking request has been sent via WhatsApp. LGX will confirm your reservation shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", padding: "14px 32px", borderRadius: "50px", fontWeight: 600, border: "none", cursor: "pointer", fontSize: "0.95rem" }}
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(212,175,55,0.25)",
    borderRadius: "12px",
    padding: "16px 18px",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#fff",
    fontSize: "0.9rem",
    fontWeight: 500,
    marginBottom: "10px",
  };

  return (
    <div style={{ minHeight: "100vh", padding: "80px 24px" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h1 className="font-bold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            Book a Space
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
            Fill the form below and your request goes straight to our WhatsApp. We'll confirm within a few hours.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", borderRadius: "24px", padding: "48px 40px", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Full Name */}
            <div>
              <label style={labelStyle}>
                <User size={16} color="#d4af37" /> Full Name *
              </label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                type="text"
                placeholder="Enter your full name"
                style={inputStyle}
              />
              {errors.fullName && <p style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "6px" }}>{errors.fullName.message}</p>}
            </div>

            {/* WhatsApp */}
            <div>
              <label style={labelStyle}>
                <Phone size={16} color="#d4af37" /> WhatsApp Number *
              </label>
              <input
                {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9+\s()-]+$/, message: "Enter a valid phone number" } })}
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                style={inputStyle}
              />
              {errors.phone && <p style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "6px" }}>{errors.phone.message}</p>}
            </div>

            {/* Service Type */}
            <div>
              <label style={labelStyle}>
                <MessageSquare size={16} color="#d4af37" /> Service Type *
              </label>
              <select
                {...register("serviceType", { required: "Please select a service" })}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="" style={{ background: "#0d1f38" }}>Select a service</option>
                <option value="Party / Event Space" style={{ background: "#0d1f38" }}>Party / Event Space</option>
                <option value="DJ / Hypeman Slot" style={{ background: "#0d1f38" }}>DJ / Hypeman Slot</option>
                <option value="Gym Session" style={{ background: "#0d1f38" }}>Gym Session</option>
                <option value="VIP Lounge" style={{ background: "#0d1f38" }}>VIP Lounge</option>
                <option value="Outdoor Bar Reservation" style={{ background: "#0d1f38" }}>Outdoor Bar Reservation</option>
                <option value="Other" style={{ background: "#0d1f38" }}>Other</option>
              </select>
              {errors.serviceType && <p style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "6px" }}>{errors.serviceType.message}</p>}
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
              <div>
                <label style={labelStyle}>
                  <Calendar size={16} color="#d4af37" /> Date *
                </label>
                <input
                  {...register("date", { required: "Date is required" })}
                  type="date"
                  style={inputStyle}
                />
                {errors.date && <p style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "6px" }}>{errors.date.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>
                  <Clock size={16} color="#d4af37" /> Time *
                </label>
                <input
                  {...register("time", { required: "Time is required" })}
                  type="time"
                  style={inputStyle}
                />
                {errors.time && <p style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "6px" }}>{errors.time.message}</p>}
              </div>
            </div>

            {/* Guests */}
            <div>
              <label style={labelStyle}>
                <Users size={16} color="#d4af37" /> Number of Guests (optional)
              </label>
              <input
                {...register("numberOfGuests")}
                type="number"
                min="1"
                placeholder="e.g. 50"
                style={inputStyle}
              />
            </div>

            {/* Notes */}
            <div>
              <label style={labelStyle}>
                <MessageSquare size={16} color="#d4af37" /> Additional Notes (optional)
              </label>
              <textarea
                {...register("additionalNotes")}
                rows={4}
                placeholder="Any special requests or additional information..."
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{ width: "100%", background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", padding: "18px", borderRadius: "12px", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "8px" }}
            >
              <MessageSquare size={18} />
              Send Booking Request via WhatsApp
            </button>

            <p style={{ color: "#6b7280", fontSize: "0.8rem", textAlign: "center" }}>
              * Required fields. Clicking submit opens WhatsApp with your booking details pre-filled.
            </p>

          </form>
        </motion.div>
      </div>
    </div>
  );
}