
const CRTOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)',
          animation: 'crt-flicker 0.15s linear infinite'
        }}
      />
      
      {/* Screen curvature effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 70%, rgba(0, 0, 0, 0.2) 100%)',
        }}
      />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.4"/%3E%3C/svg%3E")',
          animation: 'noise 0.2s steps(8, end) infinite'
        }}
      />
    </div>
  );
};

export default CRTOverlay;
