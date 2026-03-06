import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-7 py-24 sm:py-32 md:py-40 min-h-[60vh] text-center gap-8">
              {/* Large 404 number */}
              <div className="relative select-none">
                <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] bg-clip-text text-transparent">
                  404
                </h1>
                <div className="absolute inset-0 text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] bg-clip-text text-transparent blur-2xl opacity-30">
                  404
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3 max-w-md">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                  Page not found
                </h2>
                <p className="text-base sm:text-lg text-secondary font-normal leading-relaxed">
                  The page you&apos;re looking for doesn&apos;t exist or has
                  been moved.
                </p>
              </div>

              {/* Back to Home button */}
              <Link
                href="/"
                className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span className="flex items-center gap-3 bg-primary dark:bg-[#12151e] hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] dark:hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-6 rounded-full transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-foreground dark:text-white"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  <span className="text-sm sm:text-base font-semibold text-primary-foreground dark:text-white">
                    Back to Home
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
