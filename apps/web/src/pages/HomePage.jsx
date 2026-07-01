import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, CheckCircle2, Cloud, Code, Brain, Settings, Briefcase, Stethoscope, Landmark, ShoppingCart, Factory, HeartPulse, GraduationCap, Smartphone, Cpu, LayoutGrid, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InfinityLoopDiagram from '@/components/InfinityLoopDiagram.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import TimelineStep from '@/components/TimelineStep.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import HeroVisual from '@/components/HeroVisual.jsx';

function HomePage() {
  const scrollTo = href => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const features = [{
    icon: ShieldCheck,
    title: "Quality First",
    desc: "Rigorous testing protocols ensuring zero-defect deliverables."
  }, {
    icon: Zap,
    title: "Agile & Fast",
    desc: "Rapid iterations to accelerate your time-to-market."
  }, {
    icon: Cloud,
    title: "Cloud Native",
    desc: "Scalable architectures built for modern cloud ecosystems."
  }, {
    icon: Globe,
    title: "Global Delivery",
    desc: "24/7 operations via our distributed global talent pool."
  }];
  const services = [{
    icon: ShieldCheck,
    title: "Quality Engineering",
    description: "Comprehensive testing to ensure your software is robust, secure, and performs flawlessly under any load.",
    subServices: ["Test Automation", "Performance Testing", "Security Audits", "Continuous Testing"]
  }, {
    icon: Code,
    title: "Software Development",
    description: "End-to-end custom software development leveraging modern stacks to build scalable, resilient applications.",
    subServices: ["Web & Mobile Apps", "API Development", "Legacy Modernization", "Microservices"]
  }, {
    icon: Settings,
    title: "DevOps & Cloud",
    description: "Streamline your delivery pipeline and optimize infrastructure with our advanced DevOps and Cloud capabilities.",
    subServices: ["CI/CD Pipelines", "Infrastructure as Code", "Cloud Migration", "Site Reliability Engineering"]
  }, {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Maximize your cloud ROI with tailored architecture, deployment, and management across major providers.",
    subServices: ["AWS/Azure/GCP", "Serverless Computing", "Cloud Security", "Cost Optimization"]
  }, {
    icon: Brain,
    title: "AI & Automation",
    description: "Unlock operational efficiency and new insights by integrating intelligent automation and machine learning.",
    subServices: ["Machine Learning", "RPA", "Predictive Analytics", "NLP Solutions"]
  }, {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic guidance to align your technology investments with your long-term business objectives.",
    subServices: ["Digital Transformation", "IT Strategy", "Enterprise Architecture", "Vendor Selection"]
  }];
  const heroBadges = [{
    icon: CheckCircle2,
    title: "Trusted by enterprises",
    position: "top-6 left-6"
  }, {
    icon: Globe,
    title: "Global delivery network",
    position: "top-20 right-10"
  }, {
    icon: ShieldCheck,
    title: "Secure cloud platforms",
    position: "bottom-10 left-16"
  }, {
    icon: Zap,
    title: "Fast time-to-market",
    position: "bottom-6 right-8"
  }];
  const techIcons = [{
    name: "AWS",
    logo: "/assets/tech-logos/aws.svg"
  }, {
    name: "Azure",
    logo: "/assets/tech-logos/azure.svg"
  }, {
    name: "GCP",
    logo: "/assets/tech-logos/gcp.svg"
  }, {
    name: "Docker",
    logo: "/assets/tech-logos/docker.svg"
  }, {
    name: "Kubernetes",
    logo: "/assets/tech-logos/kubernetes.svg"
  }, {
    name: "Terraform",
    logo: "/assets/tech-logos/terraform.svg"
  }, {
    name: "Jenkins",
    logo: "/assets/tech-logos/jenkins.svg"
  }, {
    name: "GitHub Actions",
    logo: "/assets/tech-logos/github-actions.svg"
  }, {
    name: "React",
    logo: "/assets/tech-logos/react.svg"
  }, {
    name: "Angular",
    logo: "/assets/tech-logos/angular.svg"
  }, {
    name: "Node.js",
    logo: "/assets/tech-logos/nodejs.svg"
  }, {
    name: "Java",
    logo: "/assets/tech-logos/java.svg"
  }, {
    name: "Python",
    logo: "/assets/tech-logos/python.svg"
  }, {
    name: "Spring Boot",
    logo: "/assets/tech-logos/spring.svg"
  }, {
    name: ".NET",
    logo: "/assets/tech-logos/dotnet.svg"
  }, {
    name: "Playwright",
    logo: "/assets/tech-logos/playwright.svg"
  }, {
    name: "Selenium",
    logo: "/assets/tech-logos/selenium.svg"
  }, {
    name: "Cypress",
    logo: "/assets/tech-logos/cypress.svg"
  }, {
    name: "Postman",
    logo: "/assets/tech-logos/postman.svg"
  }, {
    name: "JMeter",
    logo: "/assets/tech-logos/jmeter.svg"
  }];
  const industries = [{
    icon: Stethoscope,
    name: "Healthcare",
    desc: "HIPAA-compliant platforms and telemedicine solutions."
  }, {
    icon: Landmark,
    name: "Banking & Finance",
    desc: "Secure, high-frequency trading and banking systems."
  }, {
    icon: ShoppingCart,
    name: "Retail & E-Commerce",
    desc: "Omnichannel platforms maximizing user conversion."
  }, {
    icon: Factory,
    name: "Manufacturing",
    desc: "IoT integration and supply chain automation."
  }, {
    icon: HeartPulse,
    name: "Insurance",
    desc: "Claims processing automation and risk modeling."
  }, {
    icon: GraduationCap,
    name: "Education",
    desc: "Scalable EdTech and learning management systems."
  }, {
    icon: Cpu,
    name: "Technology",
    desc: "R&D acceleration for SaaS and tech product companies."
  }, {
    icon: Smartphone,
    name: "Telecommunications",
    desc: "OSS/BSS modernization and 5G integrations."
  }];
  const deliverySteps = [{
    step: "1",
    title: "Discover",
    icon: Globe
  }, {
    step: "2",
    title: "Plan",
    icon: Briefcase
  }, {
    step: "3",
    title: "Design",
    icon: LayoutGrid
  }, {
    step: "4",
    title: "Develop",
    icon: Code
  }, {
    step: "5",
    title: "Test",
    icon: ShieldCheck
  }, {
    step: "6",
    title: "Deploy",
    icon: Cloud
  }, {
    step: "7",
    title: "Support",
    icon: Settings
  }];
  return <div className="dark flex flex-col min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-dvh flex items-center pt-20 overflow-hidden bg-[#07142D]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(0,102,255,0.22),transparent_34%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07142D] via-[#07142D]/80 to-[#07142D]/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07142D]/25 via-transparent to-[#07142D]" />
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 z-0 animate-particles pointer-events-none">
            {[...Array(6)].map((_, i) => <div key={i} className="particle" />)}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Global IT Consulting
                </div>
                
                <h1 className="text-white mb-6">
                  Engineering Excellence.<br />
                  <span className="text-primary">Delivering Impact.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
                  Enriva partners with enterprises to accelerate digital transformation. Through quality-first software engineering and cloud-native solutions, we build systems that scale your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => scrollTo('#services')} size="lg" className="h-14 px-8 rounded-xl bg-blue-600 text-white hover:bg-blue-500 font-semibold text-base shadow-lg shadow-blue-600/20">
                    Explore Services
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 1,
              delay: 0.2
            }} className="hidden lg:flex justify-center items-center">
                <div className="w-full max-w-[660px]">
                  <HeroVisual />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-[#07142D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                Our Services
              </span>
              <h2 className="text-white mb-6">End-to-End Technology Services to Accelerate Your Business</h2>
              <p className="text-gray-300 text-lg">
                We deliver robust, scalable, and innovative solutions tailored to your unique enterprise challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc, idx) => <ServiceCard key={idx} {...svc} delay={idx * 0.1} />)}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section id="technologies" className="py-24 bg-[#07142D] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-white mb-6">Technologies We Use</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We leverage a modern, enterprise-grade technology stack to build solutions that are secure, scalable, and future-proof.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techIcons.map((tech, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: idx % 5 * 0.05
            }} className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="py-24 bg-[#0A1935] relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                  Industries We Serve
                </span>
                <h2 className="text-white">Domain Expertise Across Verticals</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, idx) => (
                <IndustryCard key={idx} {...industry} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* WHY ENRIVA SECTION */}
        <section id="why-enriva" className="py-24 bg-white text-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-6">Why Businesses Choose Enriva</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We don't just deliver code. We deliver commitments, quality, and measurable value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[{
              title: "Experienced Engineers",
              desc: "Top 1% talent pool with deep domain knowledge and specialized certifications."
            }, {
              title: "Quality Engineering Excellence",
              desc: "Shift-left testing strategy ensuring defects are caught before they reach production."
            }, {
              title: "Agile Delivery",
              desc: "Transparent, iterative processes that adapt to your changing business needs."
            }, {
              title: "Global Delivery Model",
              desc: "Seamless cross-shore collaboration providing 24/7 productivity and cost efficiency."
            }].map((reason, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              x: idx % 2 === 0 ? -20 : 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* DELIVERY PROCESS SECTION */}
        <section id="process" className="py-24 bg-gray-50 overflow-visible">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                Delivery Process
              </span>
              <h2 className="text-gray-900">How We Ensure Success</h2>
            </div>

            <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory lg:justify-center px-4">
              {deliverySteps.map((step, idx) => <div key={idx} className="snap-center shrink-0">
                  <TimelineStep {...step} isLast={idx === deliverySteps.length - 1} delay={idx * 0.1} />
                </div>)}
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#0047b3] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard value="50+" label="Projects Delivered" icon={Briefcase} delay={0.1} />
              <StatCard value="95%" label="Customer Satisfaction" icon={HeartPulse} delay={0.2} />
              <StatCard value="20+" label="Technologies Mastered" icon={Cpu} delay={0.3} />
              <StatCard value="24/7" label="Global Support" icon={Globe} delay={0.4} />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-[#07142D] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-5xl mx-auto glass rounded-3xl p-10 md:p-16 border border-white/20">
              <ContactForm />
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>;
}
export default HomePage;
