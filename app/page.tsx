import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Building, TrendingUp, Award, Globe, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center py-4 bg-[#fa4f00] text-white">
        Webinuxs Limited Demo. For buy please contact with <Link href="https://webinuxs.com/" className="underline">
          Webinuxs Team</Link>.
      </div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">Salesforce</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Products
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Industries
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Customers
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Learning
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Support
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Company
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Partners
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">Contact Us</button>
              <button className="text-gray-700 hover:text-blue-600">Support</button>
              <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
                Log in
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Try for free</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#10B981" opacity="0.3" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Try Salesforce Starter Suite for free.</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Easily onboarding, sales, and service in a single app. Try Salesforce Starter Suite today. There's
                nothing to install.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Start free trial</Button>
                <Button variant="outline" className="bg-white text-gray-700 border-gray-300 px-8 py-3">
                  Watch demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-16 h-16 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn what Salesforce products can do for you.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Cloud</h3>
                <p className="text-gray-600 mb-4">Close more deals and speed up growth with the #1 CRM.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn more →
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Cloud</h3>
                <p className="text-gray-600 mb-4">Make customers happy with service that exceeds expectations.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn more →
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cloud</h3>
                <p className="text-gray-600 mb-4">Build lasting relationships with personalized experiences.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn more →
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commerce Cloud</h3>
                <p className="text-gray-600 mb-4">Grow revenue with unified commerce experiences.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn more →
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="bg-white text-blue-600 border-blue-600">
              View all products
            </Button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z" fill="#10B981" opacity="0.2" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We bring companies and customers together.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Salesforce is the world's #1 customer relationship management (CRM) platform. We help your marketing, sales,
            commerce, service and IT teams work as one from anywhere — so you can keep your customers happy everywhere.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start free trial</Button>
            <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn valuable skills for free, with Trailhead.</h2>
          <p className="text-xl text-gray-600 mb-16">
            Pick up new skills and get hands-on with the world's #1 CRM. Join over 4 million Trailblazers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trailhead Trailblazer Guide</h3>
              <p className="text-gray-600 mb-4">Learn how to get started with Trailhead and earn your first badge.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Start learning
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Salesforce CRM</h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of customer relationship management with Salesforce CRM.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Start learning
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Cloud Basics</h3>
              <p className="text-gray-600 mb-4">
                Get hands-on with Sales Cloud and learn how to manage your sales process.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Start learning
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline" className="bg-white text-blue-600 border-blue-600">
              Learn on Trailhead
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 200" className="w-full h-32">
            <path d="M0,100 C300,150 900,50 1200,100 L1200,200 L0,200 Z" fill="#10B981" opacity="0.3" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Over 150,000 companies, both big and small, are growing their business with Salesforce.
          </h2>
          <div className="mt-16">
            <Button variant="outline" className="bg-white text-blue-600 border-blue-600">
              Meet our customers
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 mt-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">IBM</div>
            <div className="text-2xl font-bold text-gray-400">T-Mobile</div>
            <div className="text-2xl font-bold text-gray-400">Spotify</div>
            <div className="text-2xl font-bold text-gray-400">American Express</div>
            <div className="text-2xl font-bold text-gray-400">Adidas</div>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Try Salesforce for free. No credit card required, no software to install.
              </h2>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start free trial</Button>
                <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
                  Contact sales
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-4xl">👨‍💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">How can we help grow your business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">20%</span>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
              </div>
              <p className="text-gray-600">Increase in sales</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-teal-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">29%</span>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
              </div>
              <p className="text-gray-600">Faster case resolution</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-pink-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">27%</span>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
              </div>
              <p className="text-gray-600">Higher marketing ROI</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-orange-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">27%</span>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
              </div>
              <p className="text-gray-600">Increase in revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Our technology helps people create better jobs, lives, companies, and communities.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">$1.5B</div>
              <p className="text-gray-600">Technology gives us a new opportunity to reimagine how we work</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-4">FORTUNE</div>
              <p className="text-gray-600">Future 50 Best Companies to Work for 2021 and 2022</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-4">FORTUNE</div>
              <p className="text-gray-600">Fortune World's Most Admired Companies 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#10B981" opacity="0.2" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Questions? We'll put you on the right path.</h2>
              <p className="text-xl text-blue-100 mb-8">
                Ask about Salesforce products, pricing, implementation, or anything else. Our highly trained reps are
                standing by, ready to help.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Start free trial</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact sales
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="flex space-x-4">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl">👩‍💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="ml-2 text-xl font-semibold">Salesforce</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">New to Salesforce?</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    What is Salesforce?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    What is CRM?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    What is Cloud Computing?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Customer Success
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">About Salesforce</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Free Trial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Demos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Salesforce, Inc. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">
            We use cookies to improve your browsing experience. By continuing to use this site, you agree to our use of
            cookies.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-sm">
              Cookie Preferences
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 text-sm">Accept All Cookies</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
