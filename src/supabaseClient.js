import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project credentials
const supabaseUrl = "https://bkumsbdoxzktbipfoxem.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrdW1zYmRveHprdGJpcGZveGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MzE3NjgsImV4cCI6MjA3MzEwNzc2OH0.w7vHLBYnvNebr6-MTl00nVZl05cQYIkMYD43Mht2brE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
