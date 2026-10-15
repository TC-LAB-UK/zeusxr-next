/**
 * Local product image fallbacks.
 * Used when Supabase cover_image_url is null or a stale external URL.
 * Keys match the product slug stored in Supabase.
 */
export const PRODUCTS_DATA: Record<string, { cover_image_url: string }> = {
  // Spray Booths — Electric
  'zeus-xr':                  { cover_image_url: '/media/zeus-xr-card.jpg' },
  'zeus-8000':                { cover_image_url: '/media/zeus-8000.jpg' },
  'zeus-8000-series':         { cover_image_url: '/media/zeus-8000.jpg' },

  // Spray Booths — Gas
  'poseidon':                 { cover_image_url: '/media/poseidon.jpg' },
  'poseidon-4000':            { cover_image_url: '/media/poseidon.jpg' },
  'poseidon-4000-series':     { cover_image_url: '/media/poseidon.jpg' },
  'olympian-1000':            { cover_image_url: '/media/olympian-1000/IMG_2011.jpg' },
  'olympian-1000-series':     { cover_image_url: '/media/olympian-1000/IMG_2011.jpg' },
  'spartan-2000':             { cover_image_url: '/media/spartan.jpg' },
  'spartan-2000-series':      { cover_image_url: '/media/spartan.jpg' },
  'titan-cv':                 { cover_image_url: '/media/titan.jpg' },
  'titan-cv-series':          { cover_image_url: '/media/titan.jpg' },
  'hercules':                 { cover_image_url: '/media/hercules/IMG_4847.jpg' },
  'hercules-6000':            { cover_image_url: '/media/hercules/IMG_4847.jpg' },
  'hercules-6000-series':     { cover_image_url: '/media/hercules/IMG_4847.jpg' },
  'hermes':                   { cover_image_url: '/media/hermes-hero.jpg' },
  'hermes-3000':              { cover_image_url: '/media/hermes-hero.jpg' },
  'nemesis-facility':         { cover_image_url: '/media/nemesis-facility/card.jpg' },

  // Preparation Rooms
  'hades-prep-bay':           { cover_image_url: '/media/hades-prep-bay/card.jpg' },
  'worky-dust-extraction':    { cover_image_url: '/media/products/worky/hero.png' },

  // Paint Mixing
  'paint-mixing-room':        { cover_image_url: '/media/paint-mixing-room/card.jpg' },
  'smart-mixing':             { cover_image_url: '/media/products/smart-mixing/hero.jpg' },
  'smart-mixing-station':     { cover_image_url: '/media/products/smart-mixing/hero.jpg' },

  // Smart Repairs
  'nemesis-smart-repair':     { cover_image_url: '/media/products/nemesis/hero.jpg' },
  'apollo-wheelcabin':        { cover_image_url: '/media/products/apollo-wheelcabin/hero.jpg' },

  // Accessories
  'wall-protection-system':   { cover_image_url: '/media/wall-protection.jpg' },
  'zeus-electric-upgrade':    { cover_image_url: '/media/zeus-8000.jpg' },
  'nitrotherm':               { cover_image_url: '/media/isolated-booth.jpg' },
  'pg-90e':                   { cover_image_url: '/media/pg-90e/P1180787.JPG' },

  // Robotics / Greentech
  'greentech':                { cover_image_url: '/media/greener-future.jpg' },
  'greentech-e6':             { cover_image_url: '/media/greener-future.jpg' },
  'robot':                    { cover_image_url: '/media/robot-image.jpg' },
}
