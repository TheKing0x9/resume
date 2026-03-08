"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectDetailModal from "../project-detail-modal";
import type { ProjectDetail } from "../project-detail-modal";
import { projectOverview } from "@/data/page-data";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ProjectEntry {
  name?: string;
  comingSoon?: boolean;
  [key: string]: unknown;
}

interface CategorySection {
  label: string;
  projects: ProjectEntry[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ARROW_ICON = "images/icon/tile-arrow-icon.svg";

const CATEGORY_SECTIONS: CategorySection[] = [
  { label: "Digital Design", projects: projectOverview.digitalDesign },
  { label: "Image Processing", projects: projectOverview.imageProcessing },
  { label: "Embedded Systems", projects: projectOverview.embeddedSystems },
  {
    label: "Control Systems and Robotics",
    projects: projectOverview.controlSystems,
  },
  { label: "Layout Design", projects: projectOverview.layoutDesign },
  {
    label: "Software Engineering",
    projects: projectOverview.softwareEngineering,
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const ComingSoonBadge = () => (
  <div className="py-1.5 px-3 bg-muted rounded-lg">
    <p className="text-xs md:text-base font-normal text-muted-foreground">
      Coming Soon
    </p>
  </div>
);

const ArrowIcon = () => (
  <Image
    src={ARROW_ICON}
    alt="tile-icon"
    width={24}
    height={24}
    className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in dark:invert"
  />
);

interface ProjectItemProps {
  project: ProjectEntry;
  onSelect: (project: ProjectEntry) => void;
}

const ProjectItem = ({ project, onSelect }: ProjectItemProps) => {
  if (project.comingSoon) {
    return (
      <div className="group flex flex-wrap items-center gap-2">
        <h4 className="text-muted-foreground">{project.name}</h4>
        <ComingSoonBadge />
      </div>
    );
  }

  return (
    <button
      onClick={() => onSelect(project)}
      className="group flex flex-wrap items-center gap-2 text-left cursor-pointer bg-transparent border-none p-0"
    >
      <h4 className="text-primary">{project.name}</h4>
      <ArrowIcon />
    </button>
  );
};

interface CategoryRowProps {
  label: string;
  projects: ProjectEntry[];
  onSelect: (project: ProjectEntry) => void;
}

const CategoryRow = ({ label, projects, onSelect }: CategoryRowProps) => (
  <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
    <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
      {label}
    </p>
    <div className="flex flex-col gap-2.5">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} onSelect={onSelect} />
      ))}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const ProjectOverview = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectEntry) => {
    setSelectedProject({
      name: project.name as string | undefined,
      description: project.description as string | undefined,
      bulletPoints: project.bulletPoints as string[] | undefined,
      roles: project.roles as string[] | undefined,
      category: project.category as string | undefined,
      context: project.context as string | undefined,
      image: project.image as string | undefined,
      gradient: project.gradient as string | undefined,
      icon: project.icon as string | undefined,
    });
    setModalOpen(true);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="border-x border-primary/10">
            {/* Section header */}
            <div className="flex flex-col max-w-5xl mx-auto py-10 px-4 sm:px-7">
              <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                  Projects
                </p>
              </div>
            </div>

            {/* Category list */}
            <div className="border-t border-primary/10">
              <div className="flex flex-col max-w-5xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
                {CATEGORY_SECTIONS.map(({ label, projects }) => (
                  <CategoryRow
                    key={label}
                    label={label}
                    projects={projects}
                    onSelect={handleProjectClick}
                  />
                ))}
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
