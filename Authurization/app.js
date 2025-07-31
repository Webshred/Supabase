import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.5/+esm'

const supabaseUrl = 'https://pmtrzwrarfpazfhjmpgo.supabase.co'   ///auth/v1/callback
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdHJ6d3JhcmZwYXpmaGptcGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MjQ4NDksImV4cCI6MjA2OTMwMDg0OX0.Z2MJEO1ap-V3wrJ3Sgp0i_WCwyz6uat1RaAozPTvwQ4'

const supabase = createClient(supabaseUrl, supabaseKey)

document.querySelector('#signup-btn').addEventListener('click' , async () => {
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    const { data, error } = await supabase.auth.signUp({ email, password });
    console.log(error || data);
});

document.querySelector('#login-btn').addEventListener('click', async () => {
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log(error || data);
});

document.querySelector('#google-btn').addEventListener('click', async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:5500/', 
        },
    });
    console.log(error || data);
});