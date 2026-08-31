
import { Link } from "react-router-dom";
import { ExternalLink, Zap, User, BookOpen, Heart, Activity } from "lucide-react";
import MatrixBackground from "../components/MatrixBackground";
import CRTOverlay from "../components/CRTOverlay";
import PixelAvatar from "../components/PixelAvatar";


const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <MatrixBackground />
      <CRTOverlay />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Avatar Section */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <PixelAvatar />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-mono font-bold text-cyan-400 mb-4 glitch">
                vitorux<span className="text-green-400 animate-pulse">_</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-400 font-mono mb-2">
                UX Research
              </p>
              <p className="text-sm text-gray-400 font-mono">
                {">"} Bridging user behavior, data science, and AI to drive product growth_
              </p>
            </div>
            
            {/* Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Cases Card */}
              <a 
                href="https://github.com/users/tavares-portfolio/projects/4/views/1?filterQuery=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-card group"
              >
                <div className="card-content">
                  <ExternalLink className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-mono font-bold text-cyan-400 mb-2">Cases</h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Explore my research methodologies and strategic frameworks
                  </p>
                  <div className="pixel-border mt-4"></div>
                </div>
              </a>
              
              {/* Product Discovery Agent Card */}
              <Link to="/product-discovery" className="retro-card agent-card-premium group">
                <div className="card-content">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <div className="flex items-center gap-2 px-2 py-1 rounded border border-green-500/30 bg-green-500/10">
                      <Activity className="w-3 h-3 text-green-400" />
                      <span className="text-[10px] font-mono font-bold text-green-400 uppercase tracking-wider">Active</span>
                      <span className="status-dot"></span>
                    </div>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-purple-400 mb-2">BU Discovery Agent</h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Live AI assistant for strategic product discovery and research synthesis.
                  </p>
                  <div className="pixel-border mt-4"></div>
                </div>
              </Link>
              
              {/* About Me Card */}
              <Link to="/about" className="retro-card group">
                <div className="card-content">
                  <User className="w-8 h-8 text-green-400 mb-4 group-hover:text-green-300 transition-colors" />
                  <h3 className="text-xl font-mono font-bold text-green-400 mb-2">About Me</h3>
                  <p className="text-sm text-gray-400 font-mono mb-4">
                    Deeply technical in data & AI — but powered by human empathy and deep user understanding.
                  </p>
                  <div className="human-center-badge">
                    <Heart className="w-3 h-3 text-cyan-300" />
                    <span>Human-Centered Research & Facilitation</span>
                  </div>
                  <div className="pixel-border mt-4"></div>
                </div>
              </Link>
              
              {/* Talks & Writing Card */}
              <Link to="/talks-writing" className="retro-card group">
                <div className="card-content">
                  <BookOpen className="w-8 h-8 text-orange-400 mb-4 group-hover:text-orange-300 transition-colors" />
                  <h3 className="text-xl font-mono font-bold text-orange-400 mb-2">Talks & Writing</h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Publications, workshops and talks
                  </p>
                  <div className="pixel-border mt-4"></div>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
        
        
        {/* Footer */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-600 font-mono">
          {">"} System initialized | Ready for discovery_
        </div>
      </div>
    </div>
  );
};

export default Index;
