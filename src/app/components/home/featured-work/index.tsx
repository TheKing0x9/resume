"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectDetailModal from "../project-detail-modal";
import type { ProjectDetail } from "../project-detail-modal";
import { featureWork } from "@/data/featured-work";

const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject({
      title: project.title,
      description: project.description,
      bulletPoints: project.bulletPoints,
      roles: project.roles,
      category: project.category,
      context: project.context,
      gradient: project.gradient,
      icon: project.icon,
      image: project.image,
    });
    setModalOpen(true);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="flex flex-col max-w-5xl mx-auto py-10 px-4 sm:px-7">
              <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                  Featured work
                </p>
                {/*<Button asChild variant={"outline"} className="h-auto">
                  <Link href={"/"} className="py-3 px-5">
                    Download Resume
                  </Link>
                </Button>*/}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
              {featureWork.map((value, index) => {
                const isRightCol = index % 2 === 1;
                const hasImage = value?.image && value.image.length > 0;
                const gradient =
                  value?.gradient ||
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                const icon = value?.icon || "🚀";

                return (
                  <div
                    key={index}
                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 cursor-pointer ${
                      isRightCol ? "md:border-l md:border-primary/10" : ""
                    }`}
                    onClick={() => handleProjectClick(value)}
                  >
                    {hasImage ? (
                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src={value.image}
                          alt={value?.title || "Project image"}
                          width={490}
                          height={300}
                          className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                          priority
                        />

                        {/* Description overlay on hover */}
                        {value?.description && (
                          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl pointer-events-none">
                            <p className="text-sm text-white/90 font-normal leading-relaxed p-4 sm:p-5 line-clamp-4">
                              {value.description}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative overflow-hidden rounded-xl">
                        <div
                          className="w-full aspect-[49/30] flex items-center justify-center transition-all duration-500 ease-in-out group-hover:scale-105"
                          style={{ background: gradient }}
                        >
                          <span className="text-5xl sm:text-6xl drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6 select-none">
                            {icon}
                          </span>
                        </div>

                        {/* Description overlay on hover */}
                        {value?.description && (
                          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl pointer-events-none">
                            <p className="text-sm text-white/90 font-normal leading-relaxed p-4 sm:p-5 line-clamp-4">
                              {value.description}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                      <h4 className="group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors duration-200">
                        {value?.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {value?.roles?.map((role: string, roleIdx: number) => (
                          <span
                            key={roleIdx}
                            className="text-xs font-medium text-secondary bg-primary/5 rounded-md py-1 px-2"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default FeaturedWork;
