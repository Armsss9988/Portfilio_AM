import React from "react";
import { Card } from "antd";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <Card
      className="h-[350px] md:h-[320px] flex flex-col justify-between bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl shadow-[0_0_20px_var(--color-primary)/20] hover:shadow-[0_0_25px_var(--color-primary)] transition duration-300 overflow-hidden"
      styles={{
        body: {
          backgroundColor: "var(--color-background)",
        },
        actions: {},
        cover: {},
        footer: {},
        header: {},
        extra: {},
        title: {},
      }}
    >
      <div className="flex-1 flex flex-col justify-between h-[300px] md:h-[280px]">
        <div>
          <h3 className="text-xl mb-5 font-semibold text-[var(--color-primary)] h-[48px]">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-foreground)] mb-3 h-[100px] overflow-hidden">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-[var(--color-primary)] font-mono">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-[var(--color-border)] px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          {project.github2 ? (
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#AA8B56] hover:text-[var(--color-primary)] transition"
              >
                <FaGithub
                  size={18}
                  className="text-[#AA8B56] group-hover:text-[var(--color-primary)] transition"
                />
                <span className="text-[#AA8B56] group-hover:text-[var(--color-primary)] transition">
                  BE
                </span>
              </a>
              <a
                href={project.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#AA8B56] hover:text-[var(--color-primary)] transition"
              >
                <FaGithub
                  size={18}
                  className="text-[#AA8B56] group-hover:text-[var(--color-primary)] transition"
                />
                <span className="text-[#AA8B56] group-hover:text-[var(--color-primary)] transition">
                  FE
                </span>
              </a>
            </div>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[var(--color-primary)] transition"
            >
              <FaGithub
                size={18}
                className="text-[#AA8B56] group-hover:text-[var(--color-primary)] transition"
              />
              <span className="text-[#AA8B56] group-hover:text-[var(--color-primary)] transition">
                Code
              </span>
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--color-primary)] transition"
          >
            <FiExternalLink
              size={18}
              className="text-[#F0EBCE] group-hover:text-[var(--color-primary)] transition"
            />
            <span className="text-[#F0EBCE] group-hover:text-[var(--color-primary)] transition">
              Live
            </span>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
