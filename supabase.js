const { createClient } = supabase;
const supabaseUrl = 'https://XYZ.supabase.co';
const supabaseKey = 'public-anon-key';
const supabaseClient = createClient(supabaseUrl, supabaseKey);
