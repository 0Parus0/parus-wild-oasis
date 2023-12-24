import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://twwhjwwybdbmjfrcefpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3d2hqd3d5YmRibWpmcmNlZnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1Mzc4OTgsImV4cCI6MjAxMDExMzg5OH0.s-po3G8NfFKJ6_YX_0Qbda-EAnaHWRQQub-p5V30b4I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
