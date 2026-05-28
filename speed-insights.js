/**
 * Vercel Speed Insights initialization
 * This script imports and initializes Vercel Speed Insights for performance tracking
 */
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false // Set to true for development debugging
});
