✅ Fresh Google OAuth Setup for Supabase

Open the Correct URL
Go directly to this page: https://console.cloud.google.com/apis/credentials

Select or Create a Project
Top nav bar → click the project dropdown → click "New Project" if needed
Name it Supabase Auth or similar
Hit Create and select it

Enable OAuth APIs
Go to: https://console.cloud.google.com/apis/library/oauth2.googleapis.com
Click Enable
That’s the actual OAuth 2.0 API, not Firebase stuff.

Configure OAuth Consent Screen
Left sidebar → "OAuth consent screen"
Choose External
Fill:
App name: anything
User support email: your own Gmail
Developer email: same Gmail
Skip scopes for now → Save

Create OAuth 2.0 Credentials
Now go here: https://console.cloud.google.com/apis/credentials
Click “+ Create Credentials” → OAuth Client ID
Application type: Web Application
Name: Supabase Web
Under Authorized redirect URIs, add:
bash
Copy
Edit
https://pmtrzwrarfpazfhjmpgo.supabase.co/auth/v1/callback
(Replace with your Supabase project URL if different.)
Add other URIs like http://localhost:5500 if testing locally.

Copy Client ID and Secret
Once created, you’ll get:
Client ID
Client Secret
Save these.

Plug into Supabase
Go to your Supabase Dashboard
Auth > Providers > Google
Paste in:
Client ID
Client Secret
Click Save
That’s it. You’re now officially Google-login-ready with Supabase.
