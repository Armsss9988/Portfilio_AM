import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)] text-[var(--color-foreground)] py-12 px-8 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Dev Name + Quote */}
        <h2 className="text-3xl font-extrabold text-[var(--color-primary)] tracking-wider">
          Lê Anh Minh's Portfolio
        </h2>
        <p className="text-base opacity-90 italic">
          "Code with passion, design with purpose."
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 pt-4">
          <a
            href="mailto:leanhminh098@gmail.com"
            className="hover:text-[var(--color-primary)] transition duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/Armsss9988"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/l%C3%AA-anh-minh-lamlamlam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 pt-8">
          © {new Date().getFullYear()} — Crafted with ❤️ by{" "}
          <span className="text-[var(--color-primary)] font-semibold">
            Lê Anh Minh
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
