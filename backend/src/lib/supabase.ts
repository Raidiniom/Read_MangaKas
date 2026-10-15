import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseURL || !serviceRoleKey) {
    throw new Error("Missing ENV Vars");
}

export const supabase = createClient(supabaseURL, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});