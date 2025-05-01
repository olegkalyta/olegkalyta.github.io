
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* About Hero Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Us</h1>
              <p className="text-xl text-gray-700 mb-8">
                CraftersLabs is created by software engineers with over 10 years of experience. By people who have helped to create apps used by millions of users; and apps that raised over $5M.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200&h=600" 
                  alt="CraftersLabs team" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">10+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
                    <p className="text-gray-700">
                      Our team brings over a decade of expertise in mobile app development, with a focus on iOS applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">M+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Users Reached</h3>
                    <p className="text-gray-700">
                      We've helped develop applications that have reached and improved the lives of millions of users worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">$5M</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Funding Raised</h3>
                    <p className="text-gray-700">
                      Our work has contributed to successful applications that have secured over $5 million in funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Future Projects</h2>
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-based Interior Design App</h3>
                    <p className="text-gray-700 mb-4">
                      We're working on an innovative application that will leverage artificial intelligence to help users visualize and plan interior design changes in their homes.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Coming Soon <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Address</h3>
                      <address className="not-italic text-gray-700">
                        Harju maakond, Tallinn, Kesklinna linnaosa,<br />
                        Kaupmehe tn 7-120, 10114
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:oleg@crafterslabs.com" className="text-primary hover:underline">
                        oleg@crafterslabs.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Send us a message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      ></textarea>
                    </div>
                    <div className="text-right">
                      <Button type="submit">
                        Send Message <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
