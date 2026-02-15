// config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://bxpckdhinspiyrflxvje.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2MUWApDC5ZZ77yPThF913w_W21wOlAq';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


