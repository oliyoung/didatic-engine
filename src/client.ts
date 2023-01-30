import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ""
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ""
console.log(import.meta.env)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)