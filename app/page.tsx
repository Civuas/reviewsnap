"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BarChart3,
  Github,
  Instagram,
  Share2,
  Sparkles,
  Star,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Animated background with gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full filter blur-3xl animate-blob">
          </div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full filter blur-3xl animate-blob animation-delay-2000">
          </div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-400/15 rounded-full filter blur-3xl animate-blob animation-delay-4000">
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-yellow-400" />
          <span className="font-bold text-xl">ReviewSnap</span>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="#features"
                className="text-sm hover:text-yellow-400 transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Early Access
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-3 py-1 border border-yellow-400 rounded-full">
              <p className="text-xs font-medium text-yellow-400">Coming Soon</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Collect, Share & Manage{" "}
              <span className="text-yellow-400">Reviews</span> with Ease
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              ReviewSnap helps businesses collect, showcase, and leverage
              customer reviews to build trust and drive growth.
            </p>

            {/* Waiting list form */}
            <div className="max-w-md mx-auto w-full mb-10">
              <form onSubmit={handleSubmit} className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 pr-32"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1 bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              {submitted && (
                <p className="mt-2 text-sm text-yellow-400">
                  Thanks for joining our waitlist!
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-400">20+</p>
                <p className="text-sm text-gray-400">Early adopters</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-400">85%</p>
                <p className="text-sm text-gray-400">Development complete</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-400">30</p>
                <p className="text-sm text-gray-400">Days until launch</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div id="features" className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose <span className="text-yellow-400">ReviewSnap</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collect Reviews</h3>
                <p className="text-gray-400">
                  Easily gather authentic reviews from your customers through
                  customizable forms and automated email campaigns.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors">
                  <Share2 className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Share Reviews</h3>
                <p className="text-gray-400">
                  Showcase your best reviews on your website, social media, and
                  marketing materials with beautiful, customizable widgets.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors">
                  <BarChart3 className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Analyze Insights</h3>
                <p className="text-gray-400">
                  Gain valuable insights from your reviews with powerful
                  analytics tools that help you understand customer sentiment.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              How ReviewSnap Works
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Create Your Account",
                    description:
                      "Sign up and set up your ReviewSnap profile in minutes.",
                  },
                  {
                    number: "02",
                    title: "Collect Reviews",
                    description:
                      "Send review requests to your customers via email or custom links.",
                  },
                  {
                    number: "03",
                    title: "Manage & Moderate",
                    description:
                      "Easily organize, respond to, and moderate all your reviews in one place.",
                  },
                  {
                    number: "04",
                    title: "Display & Share",
                    description:
                      "Showcase your reviews on your website and social media with beautiful widgets.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 md:p-12 text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to transform your review management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our waitlist today and be the first to experience ReviewSnap
              when we launch.
            </p>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 pr-32"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1 bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              {submitted && (
                <p className="mt-2 text-sm text-yellow-400">
                  Thanks for joining our waitlist!
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="font-bold">ReviewSnap</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ReviewSnap. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
