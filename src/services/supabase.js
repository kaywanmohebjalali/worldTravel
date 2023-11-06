import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vfqoifipoiaepoqutccf.supabase.co'
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcW9pZmlwb2lhZXBvcXV0Y2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMjU1MzIsImV4cCI6MjAxMzkwMTUzMn0.BzVnv5hZ4-TpyoLlar_lpgCTlQtqv6K-QsrUY31GSgQ"

const supabase = createClient(supabaseUrl, supabaseKey)
export {supabase, supabaseUrl}