import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { toast } from "react-toastify";

const FontCard = ({ font, text, fontSize, color, onPreview }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopyCSS = () => {
    const cssCode = `font-family: "${font.family}", ${font.category};
font-size: ${fontSize}px;
color: ${color};`;
    
    navigator.clipboard.writeText(cssCode);
    toast.success(`CSS copied for ${font.name}!`);
  };

  const handleDownload = async () => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      // Set canvas size
      canvas.width = 800;
      canvas.height = 400;
      
      // Set background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font properties
      ctx.font = `${fontSize}px "${font.family}"`;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Draw text
      ctx.fillText(text || "Sample Text", canvas.width / 2, canvas.height / 2);
      
      // Download
      const link = document.createElement("a");
      link.download = `${font.name.replace(/\s+/g, "-").toLowerCase()}-preview.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success(`Preview downloaded for ${font.name}!`);
    } catch (error) {
      toast.error("Failed to download preview");
    }
  };

  return (
    <motion.div
      className="glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -4, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onPreview(font)}
    >
      <div className="space-y-4">
        {/* Font name */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {font.name}
          </h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {font.category}
          </span>
        </div>

        {/* Font preview */}
        <div className="relative bg-surface rounded-lg p-4 border border-gray-100 min-h-[80px] flex items-center justify-center">
          <p
            className="text-center leading-relaxed break-words"
            style={{
              fontFamily: font.family,
              fontSize: Math.min(fontSize, 32),
              color: color,
              maxWidth: "100%",
              wordWrap: "break-word"
            }}
          >
            {text || "Sample calligraphy text"}
          </p>
        </div>

        {/* Action buttons */}
        <motion.div
          className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleCopyCSS();
            }}
            className="flex-1 text-xs"
          >
            <ApperIcon name="Copy" size={14} className="mr-1" />
            Copy CSS
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="text-xs"
          >
            <ApperIcon name="Download" size={14} />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FontCard;