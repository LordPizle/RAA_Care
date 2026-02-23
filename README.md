# RAA Home Support & Recruitment Ltd Website

Professional website for **RAA Home Support & Recruitment Ltd**, providing high-quality, person-centred domiciliary care and recruitment services.

## Contents

- **Home** (`index.html`) – Hero, services overview (domiciliary care, companionship, recruitment), why choose us, testimonials, call to action
- **Services** (`services.html`) – Domiciliary care, emotional support & companionship, recruitment service, and how we work
- **About Us** (`about.html`) – Aims and objectives, commitment, team, and FAQ
- **Contact** (`contact.html`) – Contact details and enquiry form

## Running the site

Open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying the site

The site is static (HTML, CSS, JS, images). You can host it for free on any of these:

### Option 1: Netlify (easiest)

1. Go to [netlify.com](https://www.netlify.com) and sign up (free).
2. Drag and drop your **entire project folder** (the one containing `index.html`, `css/`, `js/`, `assets/`) onto the Netlify “Deploy manually” area.
3. Netlify will give you a live URL (e.g. `random-name-123.netlify.app`).
4. **Use your domain:** In **Site settings → Domain management**, add **raahomesupportandrecruitment.co.uk**. Netlify will show you the DNS records to add at your domain registrar (where you bought the domain). Once DNS propagates, your live site will replace the current “Launching Soon” page.

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up.
2. Install the Vercel CLI: `npm i -g vercel`
3. In your project folder run: `vercel` and follow the prompts (use current directory as root).
4. You’ll get a live URL; you can add a custom domain in the dashboard.

### Option 3: GitHub Pages

1. Create a GitHub repo and push your project.
2. Go to **Settings → Pages**.
3. Under “Source” choose **Deploy from a branch**.
4. Select the branch (e.g. `main`) and folder **/ (root)**, then Save.
5. The site will be at `https://yourusername.github.io/repo-name/`.

**Using your domain (raahomesupportandrecruitment.co.uk)**  
Your domain is already live with a “Launching Soon” placeholder. To point it at this site: deploy to Netlify or Vercel, then in the host’s dashboard add **raahomesupportandrecruitment.co.uk** as a custom domain. They’ll give you DNS instructions (usually an A record or CNAME). Update those at your domain registrar; after propagation (often 5–30 minutes), https://raahomesupportandrecruitment.co.uk will show this site.

**Note:** For the contact form to actually send emails, add a form backend (e.g. [Formspree](https://formspree.io) or Netlify Forms) and point the form `action` to it.

## Customisation

- **Phone:** 07858 293166 | **Email:** info@raahomesupportandrecruitment.co.uk
- **Address** – Update the address on `contact.html` if you want a physical address shown.
- **Contact form** – The form currently shows a thank-you message only. To receive submissions, connect it to a backend (e.g. Formspree, Netlify Forms, or your own server).

## Structure

```
RAA_care/
├── index.html
├── services.html
├── about.html
├── contact.html
├── assets/
│   └── logo.png
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Browser support

Works in modern browsers. Uses semantic HTML, responsive layout, and minimal JavaScript (mobile menu and form feedback).
