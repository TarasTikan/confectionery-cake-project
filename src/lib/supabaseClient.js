import { createClient } from "@supabase/supabase-js/dist/index.cjs";

export const superbase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);