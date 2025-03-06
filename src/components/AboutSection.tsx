
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const AboutSection = () => {
  const { ref: sectionRef, isInView: isSectionInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  const { ref: bioRef, isInView: isBioInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  const { ref: imageRef, isInView: isImageInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={isSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-purple/10">
            About Me
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isBioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Santhosh</h3>
              <p className="text-gray-300 mb-4">
                UI/UX Designer — AI & Data Science Enthusiast — Innovator
              </p>
              <p className="text-gray-400 mb-6">
                I'm a creative UI/UX designer passionate about creating intuitive digital experiences. 
                Currently pursuing B.Tech in AI & Data Science, I blend design principles with 
                technical knowledge to create solutions that are both beautiful and functional.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-neon-purple/20 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-neon-purple">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">iyappansanthosh2004@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-neon-purple/20 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-neon-purple">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">+91-87782 94438</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-neon-purple/20 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-neon-purple">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2 text-neon-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </h3>
              <div className="border-l-2 border-neon-blue/30 pl-4 ml-2">
                <div className="relative pb-6">
                  <div className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-neon-blue"></div>
                  <h4 className="text-white font-medium">St. Joseph's Institute of Technology</h4>
                  <p className="text-gray-400 text-sm">B.Tech in Artificial Intelligence & Data Science (Expected 2026)</p>
                  <p className="text-neon-blue mt-1">GPA: 9.21/10</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-full rounded-lg overflow-hidden glass-card p-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 z-0"></div>
              <div className="relative z-10 p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-lg flex items-center justify-center p-4 ${
                        i % 3 === 0 
                          ? 'neon-border-blue bg-neon-blue/5' 
                          : i % 3 === 1 
                            ? 'neon-border-purple bg-neon-purple/5' 
                            : 'neon-border-pink bg-neon-pink/5'
                      }`}
                    >
                      <div className={`animate-float ${
                        i % 2 === 0 ? 'animation-delay-200' : ''
                      }`}>
                        {i === 1 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neon-purple">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neon-pink">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                          </svg>
                        )}
                        {i === 3 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neon-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                          </svg>
                        )}
                        {i === 4 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neon-purple">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                          </svg>
                        )}
                        {i === 5 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neon-pink">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                          </svg>
                        )}
                        {i === 6 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neon-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <span className="text-sm text-gray-400">AI & Data Science Student</span>
                  <div className="mt-2 flex justify-center space-x-4">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neon-blue/20 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neon-purple/20 text-neon-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neon-pink/20 text-neon-pink">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Geometric shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-blue opacity-20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
