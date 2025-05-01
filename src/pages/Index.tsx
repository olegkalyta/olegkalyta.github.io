
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Code, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  We create iOS apps that solve real-world problems
                </h1>
                <p className="text-xl mb-8 text-gray-700 max-w-lg">
                  Consumer-facing mobile applications designed with purpose, built with care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/about">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link to="/about#contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <div className="max-w-md">
                  <img 
                    src="https://images.unsplash.com/photo-1586880244406-8b245be7f5f6?auto=format&fit=crop&q=80&w=800&h=900" 
                    alt="iOS app development" 
                    className="rounded-lg shadow-xl" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700">
                Create first-class mobile applications to make life easier.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">What We Deliver</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intuitive Design</h3>
                <p className="text-gray-600">
                  User-friendly interfaces that prioritize usability and create delightful experiences.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clean Architecture</h3>
                <p className="text-gray-600">
                  Robust, maintainable code built on solid engineering principles for lasting value.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
                <p className="text-gray-600">
                  Forward-thinking approaches that leverage the latest technologies and methodologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to build something amazing?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Let's discuss how we can help bring your ideas to life.
              </p>
              <Button asChild size="lg">
                <Link to="/about#contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
