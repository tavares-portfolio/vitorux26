import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, GraduationCap, Pencil } from "lucide-react";
import MatrixBackground from "../components/MatrixBackground";
import CRTOverlay from "../components/CRTOverlay";
import workshopPhoto from "../assets/talks-writing-workshop.png.asset.json";

const talksAndWriting = [
  {
    type: "Article",
    title: "Stop treating UX research and experiments like rival religions",
    source: "LinkedIn",
    url: "https://www.linkedin.com/pulse/stop-treating-ux-research-experiments-like-rival-vitor-tavares-aiqxf/",
    icon: Pencil,
    color: "text-cyan-400",
    date: "2024"
  },
  {
    type: "Article",
    title: "Balancing UX and Functionality in Product Engineering",
    source: "LinkedIn",
    url: "https://www.linkedin.com/advice/1/how-do-you-prioritize-user-experience-without-hkmif",
    icon: Pencil,
    color: "text-cyan-400",
    date: "2024"
  },
  {
    type: "Workshop",
    title: "Product Discovery — The Starter",
    source: "The Starter",
    url: "https://www.figma.com/slides/gAWUTU2jbkl7Bj6Qh9vk3g/Product-Discovery---Ther-Starter?node-id=1-42&t=HL5RCb9lRqUXb3AU-0",
    icon: GraduationCap,
    color: "text-purple-400",
    date: "2024",
    image: workshopPhoto.url
  },
  {
    type: "Talk",
    title: "Design da Informação — Universidad de Palermo (Encuentro)",
    source: "Universidad de Palermo",
    url: "https://www.linkedin.com/posts/vitortavaresdossantos_vou-apresentar-meu-projeto-de-pesquisa-que-activity-6548951429837574144-go9j",
    icon: BookOpen,
    color: "text-green-400",
    date: "2023"
  }
];

const TalksWriting = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <MatrixBackground />
      <CRTOverlay />

      <div className="relative z-10 min-h-screen p-4 py-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-mono">Back to Terminal</span>
            </Link>
          </div>

          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-mono font-bold text-orange-400 mb-6">Talks &amp; Writing</h1>
            <div className="pixel-divider mb-6"></div>
            <p className="text-sm text-gray-400 font-mono">
              {">"} Publications, workshops and talks — sharing research beyond the product._
            </p>
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {talksAndWriting.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-card group flex flex-col overflow-hidden"
              >
                {item.image && (
                  <div className="relative h-32 w-full overflow-hidden border-b border-cyan-900/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>
                )}
                <div className="flex items-start space-x-4 p-4">
                  <item.icon className={`w-6 h-6 ${item.color} mt-1 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`text-xs font-mono ${item.color} uppercase tracking-wider`}>{item.type}</span>
                      <span className="text-xs font-mono text-gray-600">·</span>
                      <span className="text-xs font-mono text-gray-500">{item.source}</span>
                      <span className="text-xs font-mono text-gray-600 ml-auto">{item.date}</span>
                    </div>
                    <h2 className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {item.title}
                    </h2>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-600 font-mono mt-8 text-center">
            {">"} More publications coming soon — links updating_
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalksWriting;
