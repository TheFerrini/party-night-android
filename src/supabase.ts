import { createClient } from '@supabase/supabase-js';

// Public project URL and publishable key. Row Level Security protects user data.
export const supabase = createClient(
  'https://irgviqsrdfipkadcjezy.supabase.co',
  'sb_publishable_shVMSZkt5uB5HrkqL-J3Bg_uzzDYQul',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  }
);
