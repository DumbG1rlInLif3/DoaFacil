import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbsjoohgfxgdmfvqohfk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ic2pvb2hnZnhnZG1mdnFvaGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MzYwMTEsImV4cCI6MjA5NzMxMjAxMX0.pnngoytdbVJ5l6jh3MRcnJDGYVTcBW9eR_o5wVx1abI";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);