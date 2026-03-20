
const PixelAvatar = () => {
  return (
    <div className="pixel-avatar-frame relative">
      <div className="pixel-avatar-container">
        {/* Placeholder for actual avatar - can be replaced with real image */}
        <div className="pixel-avatar-placeholder">
          <div className="text-4xl font-mono text-cyan-400 font-bold">V</div>
        </div>
        
        {/* Pixel border decoration */}
        <div className="absolute -inset-2 pixel-frame-border"></div>
        
        {/* Animated corners */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400 animate-pulse"></div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-1 text-xs font-mono text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default PixelAvatar;
