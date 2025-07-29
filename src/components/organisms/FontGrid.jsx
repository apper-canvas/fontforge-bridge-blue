import { motion } from "framer-motion";
import FontCard from "@/components/molecules/FontCard";
import Empty from "@/components/ui/Empty";

const FontGrid = ({ fonts, text, fontSize, color, onPreview }) => {
  if (!fonts || fonts.length === 0) {
    return (
      <Empty
        title="No fonts to display"
        description="We're having trouble loading the calligraphy fonts. Please try refreshing the page."
        actionLabel="Refresh Page"
        onAction={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="space-y-6">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2 className="text-2xl font-bold gradient-text">Font Preview Gallery</h2>
          <p className="text-gray-600">
            {fonts.length} beautiful calligraphy fonts • Click any font to see detailed preview
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {fonts.map((font, index) => (
          <motion.div
            key={font.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <FontCard
              font={font}
              text={text}
              fontSize={fontSize}
              color={color}
              onPreview={onPreview}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FontGrid;