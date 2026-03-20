
import { Link } from "react-router-dom";
import { ArrowLeft, Download, BarChart, Users, Search, Map, Target, Zap, Database, TestTube } from "lucide-react";
import MatrixBackground from "../components/MatrixBackground";
import CRTOverlay from "../components/CRTOverlay";

const About = () => {
  const skills = [
    { name: "User Interviews", icon: Users, color: "text-cyan-400" },
    { name: "Usability Testing", icon: TestTube, color: "text-purple-400" },
    { name: "Survey Research", icon: BarChart, color: "text-green-400" },
    { name: "Statistical Analysis", icon: Database, color: "text-orange-400" },
    { name: "Card Sorting", icon: Target, color: "text-yellow-400" },
    { name: "Behavioral Analytics", icon: Search, color: "text-pink-400" },
    { name: "MaxDiff Analysis", icon: Zap, color: "text-red-400" },
    { name: "Discovery Maps", icon: Map, color: "text-blue-400" }
  ];

  const achievements = [
    {
      title: "Data-Driven Insights Engine",
      description: "Built a cross-source analytics engine to transform raw product data into strategic insights. Integrated large-scale survey datasets, BI dashboards, code analytics, and AI-driven pattern recognition to surface actionable opportunities. Automated correlation between sentiment data and behavioral usage patterns, enabling the product team to validate hypotheses and reprioritize roadmap initiatives. Developed custom scripts for insight synthesis and stakeholder-facing data visualizations, significantly improving decision quality and accelerating time-to-insight across the discovery cycle."
    },
    {
      title: "From Stories to Strategies",
      description: "Implemented a process of regular user interviews to gather stories about needs, problems, and opportunities in a bi-weekly basis along Search and Discovery domain (Car parts aftermarket). These findings are synthesized into snapshots, which are used monthly to calibrate the Opportunity Solution Tree."
    },
    {
      title: "Agile Exploration",
      description: "Collaborated on the product discovery for a new B2C service in France, contributing research insights during its MVP phase. Initially brought in to test the prototype usability, I advocated for expanding the scope to include fake door testing and contextual inquiry to add more evidence based to the product discovery bucket. This lean, evidence-driven approach helped identify which e-commerce entry points generated more user engagement and conversions, enabling the team to make informed decisions before scaling investment that with the results suggested pivot the first mvp implementation to refine the scope."
    },
    {
      title: "Dynamic Competitive Research Hub",
      description: "I established a continuous competitive research process, creating a hub where new market datas are added in a bi-weekly basis from global e-commerces and marketplaces benchmarks."
    },
    {
      title: "Accelerated Usability Testing Framework",
      description: "Optimized the moderated usability testing workflow for a major public-sector client at the engineering consultancy. Designed a streamlined system—including fast recruitment, backups, and pilot protocols—that enabled 7 usability tests per Sprint across 11 Sprint cycles. This process accelerated delivery while ensuring consistent, high-quality usability validation across multiple projects."
    },
    {
      title: "Streamlining UX Research in Jira",
      description: "Streamlined UX Research operations at Frete.com by collaborating with the Agile team to integrate research activities into Jira. Created a dedicated Kanban board and defined key ticket attributes to improve task tracking, visibility, and alignment. The new system enabled better prioritization, workload management, and accountability across squads, while providing measurable insights into research progress and team capacity."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <MatrixBackground />
      <CRTOverlay />
      
      <div className="relative z-10 min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-mono">Back to Terminal</span>
            </Link>
          </div>
          
          {/* Intro Section */}
          <div className="mb-12">
            <div className="border border-gray-700 p-6 bg-gray-900/30 mb-8">
              <p className="text-lg text-gray-300 font-mono leading-relaxed">
                In 2014, I embarked on a journey as an unseasoned student of Product Design, uncertain of where my path would lead. The road was fraught with challenges, from grasping the intricacies of design to mastering the art of user research. Along the way, I faced the dragons of ambiguity and doubt, discovering my true calling. ‍ Guided by mentors and shaped by experiences, I evolved from a novice into a seasoned professional. From the very start. I was immersed in projects that went beyond <a href="https://www.ifsc.edu.br/conteudo-aberto/-/asset_publisher/1UWKZAkiOauK/content/id/821060/m%C3%B3veis-projetados-por-alunos-de-design-de-produto-s%C3%A3o-lan%C3%A7ados-em-feira-nacional" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">mere academic exercises</a>. These projects demanded that we <a href="https://www.behance.net/gallery/46496573/TOM-Transporte-e-Organizacao-de-Medicamentos" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">identified real-world opportunities</a> and develop products that <a href="https://www.behance.net/gallery/41797647/Design-Universal-Proposta-de-um-ambiente-acessivel" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">addressed those needs effectively</a>. This hands-on experience in outcome-driven development was invaluable, as it trained me to think critically and creatively about product design from an opportunity-oriented perspective.
              </p>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-mono font-bold text-cyan-400 mb-6">Vitor Tavares</h1>
            <div className="pixel-divider mb-6"></div>
            <p className="text-lg text-gray-300 font-mono leading-relaxed mb-4 text-center">
              {">"} UX Researcher with 7 years of experience across B2C and B2B contexts, including cybersecurity (freemium apps), engineering consultancy (public services), logistics (SaaS platforms), and international e-commerce (20+ markets). Skilled in applying research strategies across diverse business models and product domains. - Led research across the product lifecycle, from generative discovery to post-launch iteration, using qualitative and quantitative methods: semi-structured interviews, usability testing (remote/in-person), large-scale surveys (Qualtrics), A/B testing, and behavioral analysis. Core Competencies Product Strategy, User Experience (UX), Data Management, Statistical Analysis, Quantitative Research, Qualitative Research, Story Telling.
            </p>
            
            {/* Centered Download Resume Button */}
            <div className="flex justify-center my-8">
              <a 
                href="https://drive.google.com/file/d/170C1OXDHRhKkt2BVpCXakVefJ5S7OeOI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all font-mono text-lg"
              >
                <Download className="w-5 h-5" />
                <span>Full Resume</span>
              </a>
            </div>
          </div>
          
          {/* Teaching & Community Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-mono font-bold text-orange-400 mb-6">Teaching & Community</h2>
            <div className="space-y-6">
              <div className="border border-gray-700 p-6 bg-gray-900/30">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src="/lovable-uploads/a042aedf-4164-462f-b11d-b16c58a9fce1.png" 
                    alt="The Starter Logo" 
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-mono font-bold text-cyan-400">Instructor at The Starter</h3>
                    <a 
                      href="https://www.thestarter.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline font-mono text-sm"
                    >
                      thestarter.io
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  Contributing as an instructor in the Product Discovery discipline, sharing practical knowledge and methodologies with the next generation of product professionals. Collaborating in curriculum development and hands-on workshops to bridge the gap between academic theory and real-world product discovery practices.
                </p>
              </div>
              
              <div className="border border-gray-700 p-6 bg-gray-900/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold text-cyan-400">Content Creator on TikTok</h3>
                    <a 
                      href="https://www.tiktok.com/@vt.curator?_t=ZM-8wym1kgLgOM&_r=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline font-mono text-sm"
                    >
                      @vt.curator
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  I apply my research skills to explore the intersection of data, fashion, and culture through content creation on TikTok. I transform internet data into actionable insights for the fashion industry using methods such as web scraping, search volume analysis, and trend research. With over 50,000 views, this side project reflects my passion for making research accessible and engaging, while applying methodology to emerging topics in fashion and digital culture.
                </p>
              </div>
            </div>
          </div>
          
          {/* Achievements Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-mono font-bold text-purple-400 mb-6">Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-gray-700 p-4 bg-gray-900/30">
                  <h3 className="text-lg font-mono font-bold text-cyan-400 mb-3">{achievement.title}</h3>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-mono font-bold text-green-400 mb-6">Core Research Capabilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card group">
                  <skill.icon className={`w-6 h-6 ${skill.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-mono text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
