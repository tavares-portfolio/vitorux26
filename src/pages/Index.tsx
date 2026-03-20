
import { Link } from "react-router-dom";
import { ExternalLink, Zap, User } from "lucide-react";
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
                {">"} Transforming data into strategic insights_
              </p>
            </div>
            
            {/* Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
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
              <Link to="/product-discovery" className="retro-card group">
                <div className="card-content">
                  <Zap className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                  <h3 className="text-xl font-mono font-bold text-purple-400 mb-2">BU Discovery Agent</h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Interactive AI for strategic UX conversations
                  </p>
                  <div className="pixel-border mt-4"></div>
                </div>
              </Link>
              
              {/* About Me Card */}
              <Link to="/about" className="retro-card group">
                <div className="card-content">
                  <User className="w-8 h-8 text-green-400 mb-4 group-hover:text-green-300 transition-colors" />
                  <h3 className="text-xl font-mono font-bold text-green-400 mb-2">About Me</h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Journey through B2B, SaaS & e-commerce research
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
