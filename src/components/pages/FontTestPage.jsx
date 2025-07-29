import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FontControlPanel from "@/components/organisms/FontControlPanel";
import FontGrid from "@/components/organisms/FontGrid";
import FontPreviewModal from "@/components/organisms/FontPreviewModal";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { getFonts } from "@/services/api/fontService";

const FontTestPage = () => {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [text, setText] = useState("Beautiful Calligraphy");
  const [fontSize, setFontSize] = useState(32);
  const [color, setColor] = useState("#2C3E50");
  const [selectedFont, setSelectedFont] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadFonts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getFonts();
      setFonts(data);
    } catch (err) {
      setError("Failed to load calligraphy fonts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const handlePreview = (font) => {
    setSelectedFont(font);
    setShowModal(true);
  };

  if (loading) {
    return <Loading />;
  }

  if (error && fonts.length === 0) {
    return <Error message={error} onRetry={loadFonts} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Test Beautiful Calligraphy Fonts
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover and test over 20 stunning calligraphy fonts in real-time. 
          Type your text, adjust the styling, and find the perfect typography for your project.
        </p>
        
        <motion.div
          className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Live Preview</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-info rounded-full"></div>
            <span>Copy CSS Code</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Download Images</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Control Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <FontControlPanel
              text={text}
              setText={setText}
              fontSize={fontSize}
              setFontSize={setFontSize}
              color={color}
              setColor={setColor}
            />
          </div>
        </div>

        {/* Font Grid */}
        <div className="lg:col-span-3">
          <FontGrid
            fonts={fonts}
            text={text}
            fontSize={fontSize}
            color={color}
            onPreview={handlePreview}
          />
        </div>
      </div>

      {/* Preview Modal */}
      <FontPreviewModal
        font={selectedFont}
        text={text}
        fontSize={fontSize}
        color={color}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default FontTestPage;