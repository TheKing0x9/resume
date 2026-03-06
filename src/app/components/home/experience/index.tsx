"use client";
import Image from "next/image";
import { experienceData } from "@/data/page-data";

const INITIAL_COLORS = [
  "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
];

const Experience = () => {
  const getInitial = (role: string) => {
    const parts = role.split("—");
    if (parts.length > 1) {
      return parts[1].trim().charAt(0).toUpperCase();
    }
    return role.charAt(0).toUpperCase();
  };

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-5xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Experience
              </p>
            </div>
          </div>
          <div className="border-t border-primary/10">
            <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
              {experienceData.map((value, index) => {
                const colorClass =
                  INITIAL_COLORS[index % INITIAL_COLORS.length];
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                  >
                    {/*{value?.icon ? (
                      <Image
                        src={value.icon}
                        alt="icon"
                        width={128}
                        height={20}
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${colorClass}`}
                      >
                        {getInitial(value?.role || "")}
                      </div>
                    )}*/}
                    <div className="flex flex-wrap gap-5 items-center justify-between">
                      <h5>{value?.role}</h5>
                      <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                        <div
                          className={`w-4 h-2 rounded-sm ${value?.endYear == "Present" ? "bg-primary" : "bg-primary/10"} `}
                        />
                        <p className="text-sm xs:text-base text-primary">
                          {value?.startYear} – {value?.endYear} ·{" "}
                          {value?.location}
                        </p>
                      </div>
                    </div>
                    <ul>
                      {value?.bulletPoints?.map((point: any, idx: any) => {
                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-base font-normal text-secondary"
                          >
                            <span className="w-2.5 h-2.5 text-secondary">
                              •
                            </span>
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
