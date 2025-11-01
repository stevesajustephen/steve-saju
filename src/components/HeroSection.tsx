export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Add your image here */}
          <div className="my-6 opacity-0 animate-fade-in-delay-3">
            <img
              src="/me.jpg"
              alt="Showcase"
              className="mx-auto w-89 h-[350px] object-cover object-bottom rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Steve
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Saju
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I am a Full-Stack Software Engineer with 5+ years of experience
            building scalable, high-performance web applications using Node.js,
            TypeScript, and React, currently residing in Germany
          </p>

          {/* Social Links */}
          <div className="my-4 flex justify-center gap-6 mb-12 mt-12 opacity-0 animate-fade-in-delay-2">
            <a
              href="https://www.linkedin.com/in/steve-saju/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/stevesajustephen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.png" alt="GitHub" className="w-10 h-10" />
            </a>
            <a
              href="https://leetcode.com/u/stevesajustephen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/leetcode.png" alt="Leetcode" className="w-10 h-10" />
            </a>
          </div>
          <hr className="border-t border-gray-300 w-1/2 mx-auto" />

          <div className="mb-12 pt-4 opacity-0 animate-fade-in-delay-2">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
};
