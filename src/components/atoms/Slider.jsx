import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Slider = forwardRef(({ 
  className,
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...props 
}, ref) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
          <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
            {value}
          </span>
        </div>
      )}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className={cn(
            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider",
            className
          )}
          style={{
            background: `linear-gradient(to right, #2C3E50 0%, #2C3E50 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
          ref={ref}
          {...props}
        />
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2C3E50, #E74C3C);
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(44, 62, 80, 0.3);
            transition: all 0.2s ease;
          }
          .slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(44, 62, 80, 0.4);
          }
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2C3E50, #E74C3C);
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 8px rgba(44, 62, 80, 0.3);
            transition: all 0.2s ease;
          }
          .slider::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(44, 62, 80, 0.4);
          }
        `}</style>
      </div>
    </div>
  );
});

Slider.displayName = "Slider";

export default Slider;