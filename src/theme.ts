// theme.ts
import { createTheme } from "@mantine/core";

const theme = createTheme({
    // Color palette
    colors: {
        // Custom brand colors
        brand: [
            "#f0f9ff", // Lightest
            "#e0f2fe",
            "#bae6fd",
            "#7dd3fc",
            "#38bdf8",
            "#0ea5e9", // Primary color
            "#0284c7",
            "#0369a1",
            "#075985",
            "#0c4a6e", // Darkest
        ],
        primary: [
            "#f0f9ff", // Lightest shade
            "#e0f2fe",
            "#bae6fd",
            "#7dd3fc",
            "#38bdf8",
            "#0ea5e9", // Main primary color
            "#0284c7",
            "#0369a1",
            "#075985",
            "#0c4a6e", // Darkest shade
        ],
        secondary: [
            "#f0f0f0", // Lightest shade
            "#d9d9d9",
            "#b3b3b3",
            "#8c8c8c",
            "#666666",
            "#404040", // Main secondary color
            "#333333",
            "#262626",
            "#1a1a1a",
            "#0d0d0d", // Darkest shade
        ],
        success: [
            "#f0fff4",
            "#dcffe4",
            "#bbf7d0",
            "#86efac",
            "#4ade80",
            "#22c55e",
            "#16a34a",
            "#15803d",
            "#166534",
            "#14532d",
        ],
        danger: [
            "#fff5f5",
            "#ffe4e4",
            "#fecaca",
            "#fca5a5",
            "#f87171",
            "#ef4444",
            "#dc2626",
            "#b91c1c",
            "#991b1b",
            "#7f1d1d",
        ],
        warning: [
            "#fffbeb",
            "#feebc8",
            "#fcd34d",
            "#fbbf24",
            "#f59e0b",
            "#d97706",
            "#b45309",
            "#92400e",
            "#78350f",
            "#4515",
        ],
        info: [
            // Define shades for info color here
            // Example:
            "#eff6ff",
            "#dbEafe",
            "#bfdbfe",
            "#93C5FD",
            "#60A5FA",
            "#3B82F6",
            "#2563EB",
            "#1D4ED8",
            "#1E40AF",
            "#1E3A8A",
        ],
        light: [
            // Define shades for light color here
            "#F9FAFB",
            "#F3F4F6",
            "#E5E7EB",
            "#D1D5DB",
            "#9CA3AF",
            "#6B7280",
            "#4B5563",
            "#374151",
            "#1F2937",
            "#111827",
        ],
        dark: [
            // Define shades for dark color here
            "#111827",
            "#1F2937",
            "#374151",
            "#4B5563",
            "#6B7280",
            "#9CA3AF",
            "#D1D5DB",
            "#E5E7EB",
            "#F3F4F6",
            "#F9FAFB",
        ],
    },

    // Global font settings
    fontFamily: "Inter, sans-serif",
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
    },

    // Spacing settings (for margins and paddings)
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
    },

    // Breakpoints for responsive design
    breakpoints: {
        xs: "480px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
    },
});

export default theme;
