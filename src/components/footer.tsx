export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} George Njau. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 text-center">
            Full-Stack Engineer · Backend Systems · Scalable Web Applications
          </p>

          <div className="flex gap-5 text-sm">
            <a
              href="https://github.com/jijonjau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/george-njau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              LinkedIn
            </a>

            <a
              href="#home"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
