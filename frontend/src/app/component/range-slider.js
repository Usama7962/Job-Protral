import React from "react";
import Slider from "rc-slider";
import { cn } from "rizzui";
import "rc-slider/assets/index.css";

const rangeStyles = {
  base: "relative [&>.rc-slider-rail]:bg-gray-200 [&>.rc-slider-handle]:opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4",
  size: {
    sm: "[&>.rc-slider-rail]:h-0.5 [&>.rc-slider-track]:h-0.5 [&>.rc-slider-handle]:h-3 [&>.rc-slider-handle]:w-3 [&>.rc-slider-handle]:border-[3px]",
    md: "[&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5",
    lg: "[&>.rc-slider-rail]:h-2 [&>.rc-slider-track]:h-2 [&>.rc-slider-handle]:h-5 [&>.rc-slider-handle]:w-5 [&>.rc-slider-handle]:border-[5px] [&>.rc-slider-handle]:-mt-1.5",
    xl: "[&>.rc-slider-rail]:h-3 [&>.rc-slider-track]:h-3 [&>.rc-slider-handle]:h-6 [&>.rc-slider-handle]:w-6 [&>.rc-slider-handle]:border-[6px] [&>.rc-slider-handle]:-mt-1.5",
  },
  styles: `
    .rc-slider-track {
      background-color: var(--slider-color) !important;
    }
    .rc-slider-handle {
      background-color: white !important;
      border-color: var(--slider-color) !important;
    }
    .rc-slider-handle:hover {
      border-color: var(--slider-color) !important;
    }
    .rc-slider-handle-dragging {
      border-color: var(--slider-color) !important;
      box-shadow: 0 0 0 5px var(--slider-color-alpha) !important;
    }
  `
};

/**
 * @typedef {Object} RangeSliderProps
 * @extends {SliderProps}
 * @property {keyof typeof rangeStyles.size} [size]
 * @property {string} [color] - Custom color in hex, rgb, or named format
 */

/**
 * @param {RangeSliderProps} props
 */
export default function RangeSlider({
  size = "md",
  color = "#309689",
  className,
  ...props
}) {
  const style = {
    '--slider-color': color,
    '--slider-color-alpha': `${color}20`,
  };

  return (
    <>
      <style>{rangeStyles.styles}</style>
      <Slider
        className={cn(
          rangeStyles.base,
          rangeStyles.size[size],
          className
        )}
        style={style}
        {...props}
      />
    </>
)}

RangeSlider.displayName = "RangeSlider";