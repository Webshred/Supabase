const supabaseUrl = 'https://vpjpkswheenjhykhwqto.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwanBrc3doZWVuamh5a2h3cXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODAxNjIsImV4cCI6MjA2OTM1NjE2Mn0.7R_hujwzq0u1_QFnva2KIhbZ2mlZiQw2NawEuaOQrJM';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


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























document.querySelector("#create").addEventListener("click", ()=>{

async function create() {
    
const { data, error } = await supabase
  .storage
  .createBucket('avatars', {
    public: false,
    allowedMimeTypes: ['image/png'],
    fileSizeLimit: '10mb'
    });

    if (error) {
      console.error("Error creating bucket:", error);
    } else {
      console.log("Bucket created:", data);
    }
  }
  create();
});


  








document.querySelector('#fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) uploadFile(file);
});

// Upload function
async function uploadFile(file) {
  const { data, error } = await supabase
    .storage
    .from('avatars') 
    .upload(`public/${file.name}`, file, {
      cacheControl: '3600',
      upsert: false 
    });   
  if (error) {
    console.error('Upload error:', error.message);
  } else {
    console.log('File uploaded successfully:', data);
  }
}

const { data } = supabase
  .storage
  .from('avatars') 
  .getPublicUrl('public/fro.PNG'); 


  
const img = document.createElement('img');
img.src = data.publicUrl;
img.alt = 'Uploaded Image';
img.style.maxWidth = '300px'; 

document.body.appendChild(img);