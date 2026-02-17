import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const FormInput = ({ label, type = "text", placeholder, required = false }: any) => (
  <div className="mb-4">
    <label className="block text-xs uppercase tracking-widest text-eco-gray mb-2">{label}</label>
    <input 
      type={type} 
      className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-eco-green transition-colors"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const FormTextArea = ({ label, placeholder }: any) => (
    <div className="mb-4">
      <label className="block text-xs uppercase tracking-widest text-eco-gray mb-2">{label}</label>
      <textarea 
        className="w-full bg-white border border-gray-200 p-3 h-32 focus:outline-none focus:border-eco-green transition-colors"
        placeholder={placeholder}
      ></textarea>
    </div>
  );

export const Contact = () => (
  <div className="pt-24 min-h-screen animate-fade-in">
    <div className="container mx-auto px-6 py-12">
      <h1 className="serif-heading text-4xl md:text-5xl mb-12 text-center text-eco-green-dark">Get in Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
            <div>
                <h3 className="text-xl font-bold mb-4">Head Office</h3>
                <div className="flex gap-4 text-eco-gray">
                    <MapPin className="shrink-0 w-5 h-5 text-eco-green" />
                    <p>Lalan Eco-Latex<br/>42, Old Avissawella Road<br/>Welivita, Sri Lanka</p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Factory</h3>
                <div className="flex gap-4 text-eco-gray">
                    <MapPin className="shrink-0 w-5 h-5 text-eco-green" />
                    <p>Lalan Eco-Latex<br/>Lot 72, Phase III, KEPZ<br/>Katunayake, Sri Lanka</p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Direct Lines</h3>
                <div className="space-y-2 text-eco-gray">
                    <p className="flex gap-4"><Phone className="w-5 h-5 text-eco-green"/> +94 11 234 5678</p>
                    <p className="flex gap-4"><Mail className="w-5 h-5 text-eco-green"/> info@ecolatex.com</p>
                </div>
            </div>
        </div>

        {/* Form */}
        <div className="bg-eco-base p-8 rounded-lg">
            <h3 className="text-lg font-bold mb-6">Send an Inquiry</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <FormInput label="Name" placeholder="Your Name" required />
                <FormInput label="Email" type="email" placeholder="email@company.com" required />
                <FormInput label="Subject" placeholder="Product Interest / General" />
                <FormTextArea label="Message" placeholder="How can we help you?" />
                <button className="w-full bg-eco-green-dark text-white py-4 text-sm uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2">
                    Submit Inquiry <Send className="w-4 h-4"/>
                </button>
            </form>
        </div>
      </div>
    </div>
  </div>
);

export const DealerInquiry = () => (
    <div className="pt-24 min-h-screen animate-fade-in bg-eco-beige/20">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="text-center mb-12">
            <h1 className="serif-heading text-4xl mb-4 text-eco-green-dark">Partner with Eco Latex</h1>
            <p className="text-eco-gray">
                Join our global network of distributors and retailers. Bring certified natural sleep systems to your market.
            </p>
        </div>

        <div className="bg-white p-10 shadow-lg rounded-sm">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormInput label="Company Name" required />
                    <FormInput label="Contact Person" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormInput label="Email" type="email" required />
                    <FormInput label="Phone" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormInput label="Country" required />
                    <FormInput label="Website" />
                </div>
                <div className="mb-4">
                    <label className="block text-xs uppercase tracking-widest text-eco-gray mb-2">Business Type</label>
                    <select className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-eco-green">
                        <option>Retailer</option>
                        <option>Distributor</option>
                        <option>Hotel / Hospitality</option>
                        <option>Private Label Brand</option>
                    </select>
                </div>
                <FormTextArea label="Partnership Proposal" placeholder="Tell us about your market and estimated volume." />
                
                <button className="w-full bg-eco-green text-white py-4 text-sm uppercase tracking-widest hover:bg-eco-green-dark transition-colors">
                    Apply for Partnership
                </button>
            </form>
        </div>
      </div>
    </div>
  );