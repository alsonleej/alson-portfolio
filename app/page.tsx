
'use client'

import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter'
import { ContactCard } from "@/components/ContactCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import ReactMarkdown from 'react-markdown';
import { Header } from "@/components/Header";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import my from "@/data/my";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FileText, Github } from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    // Listen for theme changes
    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem('theme');
      setIsDark(currentTheme === 'dark');
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for theme toggle events
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme');
      setIsDark(currentTheme === 'dark');
    };

    // Create a custom event listener for theme changes
    window.addEventListener('themeChanged', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main className="relative min-h-screen overflow-hidden pt-16">
        {/* 👇 Moving Background Texture */}
        <div className={`fixed inset-0 -z-20 bg-repeat opacity-60 animate-move-bg ${
          isDark 
            ? "bg-[url('/dark-backg-texture.png')]" 
            : "bg-[url('/light-backg-texture.png')]"
        }`} />
        
        {/* 👇 Hero Section */}
        <section id="home" className="flex items-center justify-center min-h-screen px-22 py-20">
          
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
            {/* 👇 Text Content*/}
            <div className="flex-1 text-center md:text-left text-3xl order-2 md:order-1">
              Hello, I&apos;m
              <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                Alson Lee
              </h1>
              <span className="text-primary">
                and I  
                <Typewriter
                  words={my.titles.split('\n').map(title => ' ' + title)}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>

              <div className="mt-8 flex flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" variant="default" className="cursor-pointer">
                  <Link href={`/${my.resume}`} className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Resume
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="cursor-pointer">
                  <Link href="https://github.com/alsonleej" className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    Github
                  </Link>
                </Button>
              </div>
            </div>

            {/* 👇 Profile Picture*/}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <Image 
                    src="/profile_pic.png" 
                    alt="Alson Lee" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 👇 Decorative ring around profile picture */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-300/30 animate-pulse"></div>
              </div>
            </div>
          </div>


        </section>



        {/* 👇 I'VE BUILT Section */}
        <Section id="projects" index={1} title="I'VE BUILT....">
          <ProjectsCarousel projects={my.projects} />
        </Section>

        {/* 👇 I KNOW Section */}
        <Section id="skills" index={2} title="I KNOW...">
          <div className="overflow-hidden">
            <LogoMarquee />
          </div>
        </Section>

        {/* 👇 I DID STUFF AT Section */}
        <Section id="experience" index={3} title="I DID STUFF AT...">
          <Timeline experiences={my.experiences} />
        </Section>

        {/* 👇 I AM Section */}
        <Section id="about" index={4} title="I AM...">
          <div className="px-5 text-lg leading-relaxed text-center prose prose-lg max-w-none">
            <ReactMarkdown>
              {my.desc}
            </ReactMarkdown>
          </div>
        </Section>

        {/* 👇 I'M ON Section */}
        <Section id="contact" index={5} title="I'M ON...">

          <div className="flex justify-center gap-8 md:grid grid-cols-3">
            <ContactCard linkto="https://github.com/alsonleej" title="GitHub" subtitle="@alsonleej" logo="devicon-github-original colored" />
            <ContactCard linkto="https://www.linkedin.com/in/alson-lee-286881227/?originalSubdomain=sg" title="LinkedIn" subtitle="Alson Lee" logo="devicon-linkedin-plain colored" />
            <ContactCard linkto="mailto:alsonleej@gmail.com" title="Email" subtitle="alsonleej@gmail.com" img="https://img.icons8.com/ios-glyphs/60/000000/gmail.png" />
          </div>

        </Section>
      </main>
    </div>
  );
}
