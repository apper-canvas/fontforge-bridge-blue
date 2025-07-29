import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="glass-effect border-b border-gray-200 sticky top-0 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <ApperIcon name="PenTool" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">FontForge</h1>
                <p className="text-xs text-gray-500">Calligraphy Font Testing</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center gap-6">
              <motion.a
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Features
              </motion.a>
              <motion.a
                href="#fonts"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Fonts
              </motion.a>
              <motion.a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                About
              </motion.a>
            </nav>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <ApperIcon name="Sparkles" size={16} className="text-accent" />
                <span>20+ Premium Fonts</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-primary to-secondary text-white mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <ApperIcon name="PenTool" size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold">FontForge</p>
                <p className="text-sm text-white/80">Beautiful typography testing</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/80">
                © 2024 FontForge • Built with React & Tailwind
              </span>
              <div className="flex items-center gap-3">
                <ApperIcon name="Heart" size={16} className="text-accent" />
                <span className="text-white/90">Made for designers</span>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;