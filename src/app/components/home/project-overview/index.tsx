"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectDetailModal from "../project-detail-modal";
import type { ProjectDetail } from "../project-detail-modal";
import { projectOverview } from "@/data/page-data";

const ProjectOverview = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject({
      name: project.name,
      description: project.description,
      bulletPoints: project.bulletPoints,
      roles: project.roles,
      category: project.category,
      context: project.context,
      image: project.image,
      gradient: project.gradient,
      icon: project.icon,
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
                  Projects
                </p>
              </div>
            </div>
            <div className="border-t border-primary/10">
              <div className="flex flex-col max-w-5xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
                <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                  <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                    Digitial Design
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {projectOverview.digitalDesign.map((value, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => handleProjectClick(value)}
                          className="group flex items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
                        >
                          <h4>{value?.name}</h4>
                          <Image
                            src={"images/icon/tile-arrow-icon.svg"}
                            alt="tile-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                  <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                    Image Processing
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {projectOverview.imageProcessing.map((value, index) => {
                      const isComingSoon = (value as any)?.comingSoon;

                      if (isComingSoon) {
                        return (
                          <div
                            key={index}
                            className="group flex flex-wrap items-center gap-2"
                          >
                            <h4 className="text-muted-foreground">
                              {value?.name}
                            </h4>
                            <div className="py-1.5 px-3 bg-muted rounded-lg">
                              <p className="text-xs md:text-base font-normal text-muted-foreground">
                                Coming Soon
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleProjectClick(value)}
                          className="group flex flex-wrap items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
                        >
                          <h4 className="text-primary">{value?.name}</h4>
                          <Image
                            src={"images/icon/tile-arrow-icon.svg"}
                            alt="tile-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                  <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                    Embedded Systems
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {projectOverview.embeddedSystems.map((value, index) => {
                      const isComingSoon = (value as any)?.comingSoon;

                      if (isComingSoon) {
                        return (
                          <div
                            key={index}
                            className="group flex flex-wrap items-center gap-2"
                          >
                            <h4 className="text-muted-foreground">
                              {value?.name}
                            </h4>
                            <div className="py-1.5 px-3 bg-muted rounded-lg">
                              <p className="text-xs md:text-base font-normal text-muted-foreground">
                                Coming Soon
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleProjectClick(value)}
                          className="group flex flex-wrap items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
                        >
                          <h4 className="text-primary">{value?.name}</h4>
                          <Image
                            src={"images/icon/tile-arrow-icon.svg"}
                            alt="tile-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                  <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                    Control Systems and Robotics
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {projectOverview.controlSystems.map((value, index) => {
                      const isComingSoon = (value as any)?.comingSoon;

                      if (isComingSoon) {
                        return (
                          <div
                            key={index}
                            className="group flex flex-wrap items-center gap-2"
                          >
                            <h4 className="text-muted-foreground">
                              {value?.name}
                            </h4>
                            <div className="py-1.5 px-3 bg-muted rounded-lg">
                              <p className="text-xs md:text-base font-normal text-muted-foreground">
                                Coming Soon
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleProjectClick(value)}
                          className="group flex flex-wrap items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
                        >
                          <h4 className="text-primary">{value?.name}</h4>
                          <Image
                            src={"images/icon/tile-arrow-icon.svg"}
                            alt="tile-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                  <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                    Layout Design
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {projectOverview.layoutDesign.map((value, index) => {
                      const isComingSoon = (value as any)?.comingSoon;

                      if (isComingSoon) {
                        return (
                          <div
                            key={index}
                            className="group flex flex-wrap items-center gap-2"
                          >
                            <h4 className="text-muted-foreground">
                              {value?.name}
                            </h4>
                            <div className="py-1.5 px-3 bg-muted rounded-lg">
                              <p className="text-xs md:text-base font-normal text-muted-foreground">
                                Coming Soon
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleProjectClick(value)}
                          className="group flex flex-wrap items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
                        >
                          <h4 className="text-primary">{value?.name}</h4>
                          <Image
                            src={"images/icon/tile-arrow-icon.svg"}
                            alt="tile-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                  <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                    Software Engineering
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {projectOverview.softwareEngineering.map((value, index) => {
                      const isComingSoon = (value as any)?.comingSoon;

                      if (isComingSoon) {
                        return (
                          <div
                            key={index}
                            className="group flex flex-wrap items-center gap-2"
                          >
                            <h4 className="text-muted-foreground">
                              {value?.name}
                            </h4>
                            <div className="py-1.5 px-3 bg-muted rounded-lg">
                              <p className="text-xs md:text-base font-normal text-muted-foreground">
                                Coming Soon
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleProjectClick(value)}
                          className="group flex flex-wrap items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
                        >
                          <h4 className="text-primary">{value?.name}</h4>
                          <Image
                            src={"images/icon/tile-arrow-icon.svg"}
                            alt="tile-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
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

export default ProjectOverview;
