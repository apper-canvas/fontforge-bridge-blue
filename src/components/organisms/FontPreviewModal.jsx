import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { toast } from "react-toastify";

const FontPreviewModal = ({ 
  font, 
  text, 
  fontSize, 
  color, 
  isOpen, 
  onClose 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopyCSS = () => {
    const cssCode = `font-family: "${font.family}", ${font.category};
font-size: ${fontSize}px;
color: ${color};`;
    
    navigator.clipboard.writeText(cssCode);
    toast.success(`CSS code copied for ${font.name}!`);
  };

  const handleDownload = async () => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      // Set canvas size for high quality
      canvas.width = 1200;
      canvas.height = 600;
      
      // Set background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font properties
      ctx.font = `${fontSize * 2}px "${font.family}"`;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Draw text
      const maxWidth = canvas.width - 100;
      const lines = [];
      const words = (text || "Sample Text").split(" ");
      let currentLine = "";
      
      for (const word of words) {
        const testLine = currentLine + word + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine !== "") {
          lines.push(currentLine);
          currentLine = word + " ";
        } else {
          currentLine = testLine;
        }
      }
      lines.push(currentLine);
      
      const lineHeight = fontSize * 2.4;
      const startY = (canvas.height - (lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, index) => {
        ctx.fillText(line.trim(), canvas.width / 2, startY + index * lineHeight);
      });
      
      // Download
      const link = document.createElement("a");
      link.download = `${font.name.replace(/\s+/g, "-").toLowerCase()}-preview.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success(`High-quality preview downloaded for ${font.name}!`);
    } catch (error) {
      toast.error("Failed to download preview");
    }
  };

  if (!font) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <ApperIcon name="Type" size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text">{font.name}</h2>
                  <p className="text-gray-600">
                    {font.category} • Font Family: {font.family}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="rounded-full w-10 h-10 p-0"
              >
                <ApperIcon name="X" size={20} />
              </Button>
            </div>

            {/* Preview Area */}
            <div className="p-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                <p
                  className="text-center leading-relaxed break-words max-w-full"
                  style={{
                    fontFamily: font.family,
                    fontSize: Math.min(fontSize * 1.5, 64),
                    color: color,
                    wordWrap: "break-word",
                    textAlign: "center"
                  }}
                >
                  {text || "Beautiful calligraphy typography preview"}
                </p>
              </div>

              {/* Font Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Font Size</p>
                  <p className="text-xl font-bold text-primary">{fontSize}px</p>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Text Color</p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <div 
                      className="w-6 h-6 rounded border-2 border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-sm font-mono font-bold text-secondary">
                      {color.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="text-lg font-bold text-accent capitalize">{font.category}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCopyCSS}
                  className="flex-1"
                >
                  <ApperIcon name="Copy" size={20} className="mr-2" />
                  Copy CSS Code
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleDownload}
                  className="flex-1"
                >
                  <ApperIcon name="Download" size={20} className="mr-2" />
                  Download Preview
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FontPreviewModal;