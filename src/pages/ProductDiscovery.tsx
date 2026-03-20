
import { Link } from "react-router-dom";
import { ArrowLeft, Terminal, Zap, Code, Lightbulb, Cog, Palette } from "lucide-react";
import MatrixBackground from "../components/MatrixBackground";
import CRTOverlay from "../components/CRTOverlay";
import AIAgentEmbed from "../components/AIAgentEmbed";

const ProductDiscovery = () => {
  const examplePrompts = [
    "I would like to do a complete assessment of my company's Product Discovery maturity",
    "How do I start discovery in a complex B2B domain?",
    "What's the best way to align stakeholders on research findings?",
    "How do you validate assumptions in early-stage products?",
    "What metrics matter most in UX research for SaaS platforms?",
    "How do you structure user interviews for maximum insight?",
    "What's your approach to generative vs evaluative research?",
    "How do you handle stakeholder resistance to research findings?"
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <MatrixBackground />
      <CRTOverlay />
      
      <div className="relative z-10 min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-mono">Back to Terminal</span>
            </Link>
            
            <div className="flex items-center space-x-2 text-purple-400">
              <Terminal className="w-5 h-5" />
              <span className="font-mono text-sm">BU Discovery Agent v2.0</span>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Context & Prompts */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Context Block */}
              <div className="agent-context-card">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-mono font-bold text-purple-400">Agent Context</h2>
                </div>
                <div className="pixel-border mb-4"></div>
                <p className="text-sm text-gray-300 font-mono leading-relaxed mb-4">
                  This Agent is designed to simulate strategic UX conversations. Ask about product discovery, research methods, stakeholder alignment, or prototyping assumptions.
                </p>
                <div className="mt-4 flex items-center text-xs text-cyan-400 font-mono">
                  <span className="animate-pulse">{">"}</span>
                  <span className="ml-2">Agent ready for input</span>
                  <span className="animate-pulse ml-1">|</span>
                </div>
              </div>
              
              {/* Example Prompts */}
              <div className="agent-prompts-card">
                <h3 className="text-lg font-mono font-bold text-green-400 mb-4">Example Queries</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-cyan-400">
                  {examplePrompts.map((prompt, index) => (
                    <div 
                      key={index}
                      className="w-full text-left p-3 text-sm font-mono text-gray-400 hover:text-cyan-400 hover:bg-gray-900 transition-all border border-gray-700 hover:border-cyan-400 cursor-pointer"
                    >
                      {">"} {prompt}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
            
            {/* Right Column - AI Agent Embed */}
            <div className="lg:col-span-2">
              <div className="retro-terminal-frame h-96 lg:h-[600px]">
                <div className="terminal-header">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-xs font-mono text-gray-400">
                      vitorux@discovery:~$ dialogflow_agent_init
                    </span>
                  </div>
                </div>
                <div className="terminal-content h-full overflow-hidden">
                  <AIAgentEmbed />
                </div>
              </div>
            </div>
            
          </div>
          
          {/* How I Designed the BU Agent Section */}
          <div className="mt-12">
            <div className="border border-gray-700 bg-gray-900/30 p-6">
              <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-6">How I Designed the BU Agent</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-mono font-bold text-purple-400 mb-4">Design Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Palette className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-cyan-400 font-mono font-bold">User Experience:</span>
                      <p className="text-gray-300 font-mono text-sm mt-1">The focus was to create a simple, accessible chat interface integrated with the website, using Dialogflow Messenger with customized colors, fonts and positioning to ensure contrast and readability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Cog className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-purple-400 font-mono font-bold">Conversational Structure:</span>
                      <p className="text-gray-300 font-mono text-sm mt-1">I modeled the agent flow in five central pillars (Environment & Culture, Business Strategy, Experimentation & Evaluation, Available Resources and Results & Impacts), each with objective questions and maturity scale.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Code className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-green-400 font-mono font-bold">Prompt Engineering:</span>
                      <p className="text-gray-300 font-mono text-sm mt-1">I developed clear and objective prompts, guiding the agent to always generate complete reports, in natural Portuguese, with practical and personalized recommendations for each user.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Terminal className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-orange-400 font-mono font-bold">Backend & Integration:</span>
                      <p className="text-gray-300 font-mono text-sm mt-1">I implemented a Python backend (Flask) to receive data, process reports and send them by email using SendGrid, ensuring that all collected information reached the recipient in an organized manner.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-yellow-400 font-mono font-bold">Visual Design:</span>
                      <p className="text-gray-300 font-mono text-sm mt-1">I customized the chat to match the page's visual identity, adjusting colors (like the dark background #101623), rounded borders and fixed position for a modern and discrete experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-mono font-bold text-green-400 mb-4">Technologies Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-600 p-3 bg-gray-800/50">
                    <h4 className="text-cyan-400 font-mono font-bold text-sm mb-2">Frontend</h4>
                    <p className="text-gray-300 font-mono text-xs">HTML, CSS customized, Dialogflow Messenger (JavaScript)</p>
                  </div>
                  <div className="border border-gray-600 p-3 bg-gray-800/50">
                    <h4 className="text-purple-400 font-mono font-bold text-sm mb-2">Backend</h4>
                    <p className="text-gray-300 font-mono text-xs">Python (Flask), SendGrid API</p>
                  </div>
                  <div className="border border-gray-600 p-3 bg-gray-800/50">
                    <h4 className="text-green-400 font-mono font-bold text-sm mb-2">AI & Prompting</h4>
                    <p className="text-gray-300 font-mono text-xs">Vertex AI Agent Builder, GoogleWebSearch, prompt engineering for detailed reports</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-mono font-bold text-orange-400 mb-4">Key Learnings</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400 font-mono text-xs mt-1">{">"}</span>
                    <p className="text-gray-300 font-mono text-xs leading-relaxed">Detailed prompts are essential for useful and personalized reports.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400 font-mono text-xs mt-1">{">"}</span>
                    <p className="text-gray-300 font-mono text-xs leading-relaxed">Iterative testing and user feedback help refine the conversational experience.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400 font-mono text-xs mt-1">{">"}</span>
                    <p className="text-gray-300 font-mono text-xs leading-relaxed">Integration between visual design and conversational flow increases engagement and clarity of recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDiscovery;
