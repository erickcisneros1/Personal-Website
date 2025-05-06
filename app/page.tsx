import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  GraduationCap,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  Download,
  AlertTriangle,
  Search,
  FileText,
  Terminal,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-float"></div>
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/30 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
                  Cybersecurity Professional
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="gradient-text">Erick Cisneros Ruballos </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">Securing Digital Landscapes</h2>
              </div>

              <p className="text-lg text-foreground/70 max-w-lg">
                Specializing in vulnerability management and security operations with a passion for tackling complex
                cybersecurity challenges through hands-on projects.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/30 rounded-full">
                  Vulnerability Management
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/30 rounded-full">
                  Security Operations
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/30 rounded-full">
                  Threat Hunting
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/30 rounded-full">
                  PowerShell
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-full px-6">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href="/Erick_Cisneros_Ruballos_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 animate-pulse-slow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
                  <img
                    src="/profile_pic.png" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading">About Me</h2>

          <div className="modern-card glass">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate cybersecurity professional with expertise in vulnerability management and security
              operations. From vulnerability assessments to threat hunting, I'm dedicated to enhancing security
              operations and processes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a href="mailto:erick.cisneros2@proton.me" className="hover:text-primary transition-colors">
                      erick.cisneros2@proton.me
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <a href="tel:8455072057" className="hover:text-primary transition-colors">
                      845-507-2057
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href="https://erickcisneros.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      erickcisneros.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Languages</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>English</span>
                    <div className="flex items-center">
                      <span className="text-foreground/70 mr-2">Native</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Spanish</span>
                    <div className="flex items-center">
                      <span className="text-foreground/70 mr-2">Native</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>French</span>
                    <div className="flex items-center">
                      <span className="text-foreground/70 mr-2">Elementary</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Connect With Me</h3>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <a
                    href="https://github.com/erickcisneros1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <a
                    href="https://www.linkedin.com/in/erickcr1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading">Professional Experience</h2>

          <div className="space-y-10">
            {/* Log(N) Pacific */}
            <div className="modern-card glass">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-2 text-sm font-medium">
                    Current Position
                  </div>
                  <h3 className="text-2xl font-bold">Cyber Security Support Analyst</h3>
                  <p className="text-primary mt-1">Log(N) Pacific</p>
                </div>
                <div className="text-foreground/70 mt-2 md:mt-0 px-4 py-2 rounded-full glass text-sm">
                  February 2025 - Present
                </div>
              </div>

              <Tabs defaultValue="vm" className="mt-6">
                <TabsList className="grid w-full grid-cols-2 rounded-full p-1">
                  <TabsTrigger value="vm" className="rounded-full data-[state=active]:bg-primary/20">
                    Vulnerability Management
                  </TabsTrigger>
                  <TabsTrigger value="secops" className="rounded-full data-[state=active]:bg-primary/20">
                    Security Operations
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="vm" className="mt-6 space-y-4">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Conducted vulnerability scans, provided detailed reports, and implemented PowerShell-based
                        remediations, contributing to a 100% reduction in critical, 90% in high, and 76% in medium
                        vulnerabilities for the server team.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Performed vulnerability assessments and risk prioritization using Tenable across Windows and
                        Linux environments.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Executed secure configurations and compliance audits (DISA STIG) with Tenable to meet industry
                        standards.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Automated remediation processes and STIG implementations using PowerShell to address critical
                        vulnerabilities.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Deep understanding of the "soft" side of Vulnerability Management: rapport, trust, transparency,
                        and business need.
                      </span>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="secops" className="mt-6 space-y-4">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Performed threat hunting with EDR, detecting IoCs from brute force attacks, data exfiltration,
                        and ransomware.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Designed, tested, and published advanced threat hunting scenarios for incident response tabletop
                        exercises.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Developed custom detection rules in Microsoft Defender for Endpoint to automate isolation and
                        investigation of compromised systems.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Reduced brute force incidents by 100% by implementing inbound NSG/firewall rules to limit
                        Internet exposure.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Created Microsoft Sentinel dashboards to monitor logon failures and malicious traffic using
                        threat intelligence.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="leading-relaxed">
                        Experienced with KQL (similar to SQL/SPL) which I used to query logs within the SIEM and EDR
                        platform.
                      </span>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            {/* Apple */}
            <div className="modern-card glass">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Technical Expert | Technical Specialist | Sales Specialist</h3>
                  <p className="text-primary mt-1">Apple</p>
                </div>
                <div className="text-foreground/70 mt-2 md:mt-0 px-4 py-2 rounded-full glass text-sm">
                  August 2021 - Present
                </div>
              </div>

              <ul className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="leading-relaxed">
                    Troubleshoot, diagnose, repair, and resolve service concerns for select Apple hardware and software.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="leading-relaxed">
                    Use extensive knowledge of hardware and software components to identify where technical issues may
                    originate from and educate others on the team.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="leading-relaxed">
                    Delivered tailored product recommendations and solutions to Apple customers, leveraging in-depth
                    knowledge of devices and services to drive sales and customer satisfaction.
                  </span>
                </li>
              </ul>
            </div>

            {/* Computuners */}
            <div className="modern-card glass">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Repair Technician</h3>
                  <p className="text-primary mt-1">Computuners</p>
                </div>
                <div className="text-foreground/70 mt-2 md:mt-0 px-4 py-2 rounded-full glass text-sm">
                  October 2020 - March 2021
                </div>
              </div>

              <ul className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="leading-relaxed">
                    Completed partial or full dismantling of equipment to quickly repair or replace defective components
                    and restore functionality.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-min mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="leading-relaxed">
                    Use extensive knowledge of hardware and software components to identify where technical issues may
                    originate from and educate others on the team.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="modern-card glass group">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="bg-primary/10 border-primary/30 rounded-full">
                  Vulnerability Management
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                Vulnerability Management Program
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Implemented a complete vulnerability management program using Tenable for scanning, assessment, and
                remediation tracking across Windows and Linux environments.
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    Tenable
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    PowerShell
                  </Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                >
                  <a
                    href="https://github.com/erickcisneros1/vulnerability-management-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="modern-card glass group">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Search className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="bg-primary/10 border-primary/30 rounded-full">
                  Threat Hunting
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                Threat Hunting Scenario (Tor Browser)
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Developed a threat hunting scenario to detect unauthorized Tor browser usage within an organization,
                including detection rules and response procedures.
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    Microsoft Defender
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    KQL
                  </Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                >
                  <a
                    href="https://github.com/erickcisneros1/Threat-Hunting-Scenario-Tor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="modern-card glass group">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="bg-primary/10 border-primary/30 rounded-full">
                  Automation
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                PowerShell Vulnerability Remediation
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Created a collection of PowerShell scripts to automate the remediation of common vulnerabilities across
                Windows servers and workstations.
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    PowerShell
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Windows
                  </Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                >
                  <a
                    href="https://github.com/erickcisneros1/PowerShell-Remediation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Project 4 */}
            <div className="modern-card glass group">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="bg-primary/10 border-primary/30 rounded-full">
                  Compliance
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                DISA STIG Implementation
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Implemented DISA STIGs (Security Technical Implementation Guides) for Windows Server environments to
                ensure compliance with security standards.
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    STIG
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Compliance
                  </Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                >
                  <a
                    href="https://github.com/erickcisneros1/STIG-Implementation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading">Skills & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card glass">
              <h3 className="text-xl font-bold mb-6 gradient-text">Technical Skills</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-4">
                  <h4 className="font-medium mb-3 text-primary">Security Operations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-full">Endpoint Detection & Response</Badge>
                    <Badge className="rounded-full">Threat Hunting</Badge>
                    <Badge className="rounded-full">SIEM</Badge>
                    <Badge className="rounded-full">Incident Response</Badge>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <h4 className="font-medium mb-3 text-primary">Vulnerability Management</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-full">Tenable</Badge>
                    <Badge className="rounded-full">CVE/CWE Management</Badge>
                    <Badge className="rounded-full">CVSS Scoring</Badge>
                    <Badge className="rounded-full">Risk Prioritization</Badge>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <h4 className="font-medium mb-3 text-primary">Scripting & Automation</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-full">PowerShell</Badge>
                    <Badge className="rounded-full">Bash</Badge>
                    <Badge className="rounded-full">KQL</Badge>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <h4 className="font-medium mb-3 text-primary">Compliance & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-full">NIST CSF</Badge>
                    <Badge className="rounded-full">NIST 800-53</Badge>
                    <Badge className="rounded-full">DISA STIG</Badge>
                    <Badge className="rounded-full">PCI-DSS</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-card glass">
              <h3 className="text-xl font-bold mb-6 gradient-text">Certifications & Education</h3>

              <div className="space-y-8">
                <div className="glass rounded-xl p-4">
                  <h4 className="font-medium mb-3 text-primary">Certifications</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <span>CompTIA Security+</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <span>ISC2 CC Entry-Level Cybersecurity</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <span>Google Cybersecurity Professional</span>
                    </li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4">
                  <h4 className="font-medium mb-3 text-primary">Education</h4>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Bachelor of Science in Computer Science and Information Security
                          </p>
                          <p className="text-sm text-foreground/70">John Jay College of Criminal Justice, 2021</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Associate of Science in Computer Information Systems</p>
                          <p className="text-sm text-foreground/70">Rockland Community College, 2018</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading">Contact Me</h2>

          <div className="modern-card glass">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-6 gradient-text">Get In Touch</h3>
                <p className="mb-8 leading-relaxed">
                  I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
                </p>

                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Email</p>
                      <a
                        href="mailto:erick.cisneros2@proton.me"
                        className="hover:text-primary transition-colors text-lg"
                      >
                        erick.cisneros2@proton.me
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Phone</p>
                      <a href="tel:8455072057" className="hover:text-primary transition-colors text-lg">
                        845-507-2057
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/erickcr1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-lg"
                      >
                        linkedin.com/in/erickcr1
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">GitHub</p>
                      <a
                        href="https://github.com/erickcisneros1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-lg"
                      >
                        github.com/erickcisneros1
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 gradient-text">Resume</h3>
                <p className="mb-8 leading-relaxed">
                  Download my resume for a comprehensive overview of my skills, experience, and qualifications.
                </p>

                <div className="glass rounded-xl p-8 flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 animate-pulse-slow"></div>
                    <div className="relative bg-primary/10 p-4 rounded-full">
                      <FileText className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium mb-2">Erick Cisneros - Resume</h4>
                  <p className="text-sm text-foreground/70 mb-6">PDF Format</p>
                  <Button asChild className="rounded-full px-6">
                    <a href="/Erick_Cisneros_Ruballos_Resume.pdf" download className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-muted/10 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative mr-3">
                <Shield className="h-6 w-6 text-primary" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm -z-10"></div>
              </div>
              <span className="font-bold text-lg gradient-text">Erick Cisneros Ruballos</span>
            </div>

            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <a
                href="https://github.com/erickcisneros1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/erickcr1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:erick.cisneros2@proton.me"
                aria-label="Email"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} Erick Cisneros. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
