import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dvmcbeouwyfercqjetee.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bWNiZW91d3lmZXJjcWpldGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5ODE5OTksImV4cCI6MjA2MjU1Nzk5OX0.eI3zNlArlSqgl5zSTbZ73LxMA8zD1oaXbFQ6udioKXE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
