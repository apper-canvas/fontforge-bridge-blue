import { motion } from "framer-motion";
import Input from "@/components/atoms/Input";
import Slider from "@/components/atoms/Slider";
import ColorPicker from "@/components/molecules/ColorPicker";
import ApperIcon from "@/components/ApperIcon";

const FontControlPanel = ({
  text,
  setText,
  fontSize,
  setFontSize,
  color,
  setColor
}) => {
  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog",
    "Beautiful calligraphy font testing",
    "Typography is the craft of endowing human language",
    "Design is not just what it looks like",
    "Creativity is intelligence having fun"
  ];

  return (
    <motion.div
      className="glass-effect rounded-xl p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <ApperIcon name="Settings" size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold gradient-text">Font Controls</h2>
          <p className="text-gray-600 text-sm">Customize your text preview</p>
        </div>
      </div>

      {/* Text Input */}
      <div className="space-y-3">
        <Input
          label="Your Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="text-lg"
        />
        
        {/* Sample text suggestions */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-500">Quick samples:</p>
          <div className="flex flex-wrap gap-2">
            {sampleTexts.map((sample, index) => (
              <motion.button
                key={index}
                onClick={() => setText(sample)}
                className="text-xs bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-full transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sample.length > 30 ? sample.substring(0, 30) + "..." : sample}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Font Size Slider */}
      <Slider
        label="Font Size"
        value={fontSize}
        onChange={setFontSize}
        min={8}
        max={72}
        step={1}
      />

      {/* Color Picker */}
      <ColorPicker
        label="Text Color"
        value={color}
        onChange={setColor}
      />

      {/* Preview stats */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Characters:</span>
          <span className="font-semibold text-primary">{text.length}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Words:</span>
          <span className="font-semibold text-primary">
            {text.trim() ? text.trim().split(/\s+/).length : 0}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Font Size:</span>
          <span className="font-semibold text-primary">{fontSize}px</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FontControlPanel;