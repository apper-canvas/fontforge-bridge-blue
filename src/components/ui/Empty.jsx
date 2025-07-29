import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No fonts available", 
  description = "Start typing to see your text in beautiful calligraphy fonts",
  actionLabel = "Get Started",
  onAction
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
          <ApperIcon 
            name="Type" 
            size={48} 
            className="text-white"
          />
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-red-400 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
          >
            <ApperIcon name="Sparkles" size={16} className="text-white" />
          </motion.div>
        </div>
      </motion.div>
      
      <div className="space-y-3 max-w-md">
        <motion.h3
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>

      {onAction && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={onAction}
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ApperIcon name="Sparkles" size={20} className="mr-2" />
            {actionLabel}
          </Button>
        </motion.div>
      )}

      <motion.div
        className="grid grid-cols-3 gap-4 mt-8 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.6 }}
      >
        {["Aa", "Bb", "Cc"].map((letter, index) => (
          <div
            key={letter}
            className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-2xl font-bold text-gray-400"
            style={{ fontFamily: index === 0 ? "Dancing Script" : index === 1 ? "Great Vibes" : "Pacifico" }}
          >
            {letter}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Empty;