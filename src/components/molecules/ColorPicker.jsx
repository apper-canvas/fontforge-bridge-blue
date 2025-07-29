import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ColorPicker = ({ value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const presetColors = [
    "#000000", "#2C3E50", "#34495E", "#7F8C8D",
    "#E74C3C", "#E67E22", "#F39C12", "#F1C40F",
    "#27AE60", "#2ECC71", "#16A085", "#1ABC9C",
    "#3498DB", "#2980B9", "#9B59B6", "#8E44AD",
    "#95A5A6", "#BDC3C7", "#ECF0F1", "#FFFFFF"
  ];

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full p-3 border border-gray-300 rounded-lg hover:border-primary transition-all duration-200 bg-white"
      >
        <div 
          className="w-6 h-6 rounded border-2 border-gray-300 shadow-sm"
          style={{ backgroundColor: value }}
        />
        <span className="font-mono text-sm text-gray-700 flex-1 text-left">
          {value.toUpperCase()}
        </span>
        <ApperIcon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-gray-500"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 p-4 bg-white rounded-xl shadow-2xl border border-gray-200 w-full"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2">
                {presetColors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => {
                      onChange(color);
                      setIsOpen(false);
                    }}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-primary transition-all duration-200 relative group"
                    style={{ backgroundColor: color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {value === color && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <ApperIcon 
                          name="Check" 
                          size={16} 
                          className={color === "#FFFFFF" || color === "#ECF0F1" ? "text-gray-800" : "text-white"}
                        />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="pt-3 border-t border-gray-200">
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  Custom Color
                </label>
                <input
                  type="color"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;