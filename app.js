const supabaseUrl = 'https://vpjpkswheenjhykhwqto.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwanBrc3doZWVuamh5a2h3cXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODAxNjIsImV4cCI6MjA2OTM1NjE2Mn0.7R_hujwzq0u1_QFnva2KIhbZ2mlZiQw2NawEuaOQrJM';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Upload function
async function uploadFile(file) {
  const { data, error } = await supabase
    .storage
    .from('uploads') 
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



// Example usage with an HTML input element
document.querySelector('#fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) uploadFile(file);
});








//get Public URL
const { data } = supabase
  .storage
  .from('uploads') 
  .getPublicUrl('public/fro.PNG'); 









const img = document.createElement('img');
img.src = data.publicUrl;
img.alt = 'Uploaded Image';
img.style.maxWidth = '300px'; 

document.body.appendChild(img);