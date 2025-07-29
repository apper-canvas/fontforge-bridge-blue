import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Header skeleton */}
      <div className="space-y-3">
        <motion.div
          className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
            backgroundSize: "200% 100%"
          }}
        />
        <motion.div
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
          style={{
            background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
            backgroundSize: "200% 100%"
          }}
        />
      </div>

      {/* Control panel skeleton */}
      <div className="glass-effect rounded-xl p-6 space-y-4">
        <motion.div
          className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/4"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.3 }}
          style={{
            background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
            backgroundSize: "200% 100%"
          }}
        />
        <motion.div
          className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.4 }}
          style={{
            background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
            backgroundSize: "200% 100%"
          }}
        />
        <div className="flex gap-4">
          <motion.div
            className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded flex-1"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            style={{
              background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
              backgroundSize: "200% 100%"
            }}
          />
          <motion.div
            className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-24"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }}
            style={{
              background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
              backgroundSize: "200% 100%"
            }}
          />
        </div>
      </div>

      {/* Font grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="glass-effect rounded-xl p-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4"
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.7 + index * 0.1 }}
              style={{
                background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
                backgroundSize: "200% 100%"
              }}
            />
            <motion.div
              className="h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.8 + index * 0.1 }}
              style={{
                background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
                backgroundSize: "200% 100%"
              }}
            />
            <div className="flex gap-2">
              <motion.div
                className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded flex-1"
                animate={{ x: [-100, 100, -100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.9 + index * 0.1 }}
                style={{
                  background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
                  backgroundSize: "200% 100%"
                }}
              />
              <motion.div
                className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-16"
                animate={{ x: [-100, 100, -100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 + index * 0.1 }}
                style={{
                  background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
                  backgroundSize: "200% 100%"
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loading;