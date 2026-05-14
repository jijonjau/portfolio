import Image from 'next/image';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <section id="home" className="bg-white">
        <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto min-h-[85vh] px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Full-Stack Engineer
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Building Scalable Systems
              </span>
            </h1>

            <p className="text-blue-500 font-medium mt-5 flex items-center gap-2">
              Hi, I&apos;m George
              <span className="animate-wave">👋</span>
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              I design and build production-grade backend systems and modern web
              applications, focusing on scalability, performance, and clean
              system architecture.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                Backend Systems
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                API Design
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                System Design
              </span>
            </div>

            <div className="mt-8 flex gap-4 sm:items-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium text-sm text-center w-full sm:w-auto"
              >
                Let&apos;s Work Together
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 hover:border-blue-500 rounded-lg transition text-sm text-center w-full sm:w-auto"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative">
            <Image
              src="/images/george-caricuture.png"
              alt="Developer illustration"
              width={500}
              height={500}
              className="max-w-md w-full h-auto relative z-10 object-contain"
              loading="eager"
            />

            <div className="absolute w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Full-Stack Engineer focused on scalable backend systems
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                I&apos;m a software engineer who enjoys building
                production-grade systems that are clean, scalable, and
                maintainable. My focus is on backend-heavy full-stack
                development, system design, and performance-oriented
                architecture.
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                I work across the full development lifecycle — from designing
                APIs and database structures to building responsive frontend
                interfaces and deploying applications to production
                environments.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I care deeply about writing code that is not just functional,
                but structured for long-term growth, readability, and real-world
                scale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Core Capabilities
              </h3>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">
                    Backend Engineering
                  </p>
                  <p className="text-gray-600">
                    Spring Boot, REST APIs, authentication systems,
                    microservices, JPA/Hibernate
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Frontend Development
                  </p>
                  <p className="text-gray-600">
                    React, Next.js, Tailwind CSS, responsive UI systems
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">System Design</p>
                  <p className="text-gray-600">
                    Scalable architectures, database design, API structure,
                    performance optimization
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">DevOps & Tools</p>
                  <p className="text-gray-600">
                    Git, Docker, AWS, Postman, Redis, CI/CD workflows
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Extended Skills</p>
                  <p className="text-gray-600">
                    Mobile development (React Native), UI/UX design (Figma),
                    basic ML integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            Projects
          </h2>

          <div className="space-y-10">
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="mb-4">
                <span className="text-sm text-blue-500 font-medium">
                  Featured Project
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  Tours & Travel Booking Platform
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                A full-stack booking system supporting multi-service travel
                workflows including flights, vehicle rentals, and structured
                booking journeys with payment and document handling.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    What I worked on
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>
                      • Designed backend architecture for complex booking flows
                    </li>
                    <li>• Built multi-step booking and billing system</li>
                    <li>
                      • Implemented document upload and transaction handling
                    </li>
                    <li>
                      • Integrated REST APIs across frontend and backend systems
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2">Tech Stack</p>
                  <p className="text-blue-500 text-sm">
                    Next.js · React · Spring Boot · MySQL · REST APIs
                  </p>

                  <div className="mt-4 text-sm text-gray-500">
                    Focus: system design, backend workflows, full-stack
                    integration
                  </div>
                </div>
              </div>
            </div>

            {/* SUPPORTING PROJECTS */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tap-to-Phone Payment Platform
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Contactless payment system enabling real-time transaction
                  processing across web interfaces.
                </p>

                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>• Built responsive transaction UI flows</li>
                  <li>• Integrated frontend with backend payment services</li>
                  <li>• Improved performance for real-time interactions</li>
                </ul>

                <div className="text-sm text-blue-500">
                  React · Tailwind CSS · API Integration
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mobigrow Platform
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Agricultural-financial platform supporting onboarding and
                  transaction workflows.
                </p>

                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>• Built reusable UI components</li>
                  <li>• Integrated dynamic API data handling</li>
                  <li>• Ensured responsive and consistent UX across modules</li>
                </ul>

                <div className="text-sm text-blue-500">
                  React · Tailwind CSS · API Integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            I&apos;m currently open to full-stack software development
            opportunities and product-driven engineering teams. If you&apos;re
            building systems that need scalability, structure, and performance —
            I&apos;d be glad to talk.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <a
              href="mailto:gnjau652@gmail.com"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition"
            >
              <FaEnvelope className="text-blue-500 text-xl" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-500">gnjau652@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+254713096423"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition"
            >
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-500">+254 713 096 423</p>
              </div>
            </a>

            <a
              href="https://wa.me/254713096423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-green-300 transition"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              <div>
                <p className="font-medium text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-500">Quick messaging</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/george-njau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition"
            >
              <FaLinkedin className="text-blue-600 text-xl" />
              <div>
                <p className="font-medium text-gray-900">LinkedIn</p>
                <p className="text-sm text-gray-500">Professional profile</p>
              </div>
            </a>

            <a
              href="https://github.com/jijonjau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-gray-300 transition"
            >
              <FaGithub className="text-gray-900 text-xl" />
              <div>
                <p className="font-medium text-gray-900">GitHub</p>
                <p className="text-sm text-gray-500">Projects & code</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
