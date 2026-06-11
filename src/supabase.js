import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://atxqgldnntddyjuxgkny.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eHFnbGRubnRkZHlqdXhna255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwOTc3MjYsImV4cCI6MjA5NjY3MzcyNn0.hqqSzgnZ1lA6Kg9EzAJ2q2_y-6KAcmSibqPwQduNfoo'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)