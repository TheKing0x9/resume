"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export interface ProjectDetail {
  title?: string;
  name?: string;
  description?: string;
  bulletPoints?: string[];
  roles?: string[];
  category?: string;
  context?: string;
  gradient?: string;
  icon?: string;
  image?: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 250);
  };

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const title = project.title || project.name || "Project";
  const gradient =
    project.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  const icon = project.icon || "🚀";
  const hasImage = project.image && project.image.length > 0;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 ${
        isClosing
          ? "animate-[modal-backdrop-out_0.25s_ease_forwards]"
          : "animate-[modal-backdrop-in_0.3s_ease_forwards]"
      }`}
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      <div
        ref={contentRef}
        className={`relative w-full max-w-2xl max-h-[85vh] bg-background rounded-2xl shadow-2xl shadow-black/20 overflow-hidden flex flex-col ${
          isClosing
            ? "animate-[modal-content-out_0.25s_cubic-bezier(0.55,0,1,0.45)_forwards]"
            : "animate-[modal-content-in_0.35s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        }`}
      >
        {/* Header — image or gradient+icon */}
        {hasImage ? (
          <div className="relative w-full flex-shrink-0 flex items-center justify-center py-10 sm:py-14 overflow-hidden">
            {/*<img
              src={project.image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />*/}

            <Image
              src={project.image}
              alt={title}
              width={623}
              height={350}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />

            {/* Invisible spacer to match gradient header height */}
            <span
              className="text-6xl sm:text-7xl invisible select-none"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* Dark scrim for legibility over photos */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 cursor-pointer backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Category + context badges */}
            <div className="absolute bottom-3 left-4 sm:left-5 flex flex-wrap gap-2">
              {project.category && (
                <span className="text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  {project.category}
                </span>
              )}
              {project.context && (
                <span className="text-xs font-medium text-white/75 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {project.context}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div
            className="relative w-full flex-shrink-0 flex items-center justify-center py-10 sm:py-14"
            style={{ background: gradient }}
          >
            <span className="text-6xl sm:text-7xl drop-shadow-lg select-none">
              {icon}
            </span>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-200 cursor-pointer backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Category + context badges */}
            <div className="absolute bottom-3 left-4 sm:left-5 flex flex-wrap gap-2">
              {project.category && (
                <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {project.category}
                </span>
              )}
              {project.context && (
                <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {project.context}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 leading-snug">
            {title}
          </h3>

          {/* Summary description */}
          {project.description && (
            <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6">
              {project.description}
            </p>
          )}

          {/* Bullet points */}
          {project.bulletPoints && project.bulletPoints.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-[1.5px] text-primary/40 uppercase mb-3">
                Details
              </p>
              <ul className="space-y-2.5">
                {project.bulletPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-secondary leading-relaxed"
                    style={{
                      animation: `modal-bullet-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 60 + 150}ms both`,
                    }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech tags */}
          {project.roles && project.roles.length > 0 && (
            <div>
              <p className="text-xs font-semibold tracking-[1.5px] text-primary/40 uppercase mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm font-medium text-primary bg-primary/5 border border-primary/10 rounded-lg py-1.5 px-3"
                    style={{
                      animation: `modal-bullet-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 40 + 300}ms both`,
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes modal-backdrop-in {
          0% {
            background-color: rgba(0, 0, 0, 0);
          }
          100% {
            background-color: rgba(0, 0, 0, 0.4);
          }
        }
        @keyframes modal-backdrop-out {
          0% {
            background-color: rgba(0, 0, 0, 0.4);
          }
          100% {
            background-color: rgba(0, 0, 0, 0);
          }
        }
        @keyframes modal-content-in {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes modal-content-out {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }
        }
        @keyframes modal-bullet-in {
          0% {
            opacity: 0;
            transform: translateX(-8px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailModal;
