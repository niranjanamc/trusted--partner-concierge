# EmailJS + Titan Email Setup Guide
## Connecting VoyageMonk Contact Forms to info@voyagemonk.com

This guide walks you through every step to get your contact and booking forms delivering real emails to your Titan inbox.

---

## Overview

Your website uses **EmailJS** — a service that lets your React frontend send emails without a backend server. EmailJS connects to your Titan email account via SMTP and forwards form submissions directly to `info@voyagemonk.com`.

You will need:
1. A free EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Your Titan email SMTP credentials (from GoDaddy)
3. About 20 minutes

---

## Step 1 — Get Your Titan SMTP Credentials

Your Titan email (hosted via GoDaddy) uses these standard SMTP settings:

| Setting | Value |
|---------|-------|
| SMTP Host | `smtp.titan.email` |
| SMTP Port | `587` (TLS) or `465` (SSL) |
| Email address | `info@voyagemonk.com` |
| Username | `info@voyagemonk.com` |
| Password | *(your Titan email password)* |

> **Where to find your Titan password:** Log in at https://secureserver.titan.email/mail/ — if you've forgotten it, reset it at https://dashboard.godaddy.com/venture/email

---

## Step 2 — Create Your EmailJS Account

1. Go to **https://www.emailjs.com** and click **Sign Up Free**
2. Register with any email (you can use `info@voyagemonk.com` itself)
3. Confirm your email and log in to the EmailJS dashboard

---

## Step 3 — Create an Email Service (Connect Titan SMTP)

1. In the EmailJS dashboard, click **Email Services** in the left sidebar
2. Click **Add New Service**
3. Select **SMTP** (scroll down in the service list)
4. Fill in the form:

   | Field | Value |
   |-------|-------|
   | Service ID | `voyagemonk_service` *(you can choose any ID — note it down)* |
   | Name | `VoyageMonk Titan Mail` |
   | SMTP Host | `smtp.titan.email` |
   | SMTP Port | `587` |
   | Username | `info@voyagemonk.com` |
   | Password | *(your Titan email password)* |
   | Secure | Enable TLS |

5. Click **Test Service** — you should receive a test email at `info@voyagemonk.com`
6. If the test passes, click **Add Service** to save
7. **Copy the Service ID** — you'll need it for the `.env` file

---

## Step 4 — Create an Email Template

The template tells EmailJS what your email should look like when it arrives.

1. Click **Email Templates** in the sidebar
2. Click **Create New Template**
3. Set the following:

   **Template Name:** `VoyageMonk Contact Form`

   **To Email:** `info@voyagemonk.com`

   **From Name:** `{{from_name}}`

   **Reply To:** `{{reply_to}}`

   **Subject:**
   ```
   New Enquiry from {{from_name}} — VoyageMonk Website
   ```

   **Body (HTML):**
   ```html
   <p>You have received a new enquiry via the VoyageMonk website.</p>

   <hr>

   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{reply_to}}</p>
   <p><strong>Phone:</strong> {{phone}}</p>
   <p><strong>Service:</strong> {{service_type}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>

   <hr>
   <p style="color:#888; font-size:12px;">
     This message was sent via the contact form at voyagemonk.com
   </p>
   ```

4. Click **Save** at the top
5. **Copy the Template ID** — you'll need it for the `.env` file

---

## Step 5 — Get Your Public Key

1. In the EmailJS dashboard, click your **account name / avatar** (top right)
2. Go to **Account → API Keys**
3. Copy the **Public Key** (it looks like a random alphanumeric string)

---

## Step 6 — Update Your `.env` File

Open the file `.env` in the root of your website project and replace the placeholders:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_from_step3
VITE_EMAILJS_TEMPLATE_ID=your_template_id_from_step4
VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_step5
```

**Example (with real-looking values):**
```env
VITE_EMAILJS_SERVICE_ID=service_abc12345
VITE_EMAILJS_TEMPLATE_ID=template_xyz67890
VITE_EMAILJS_PUBLIC_KEY=Abc123XyzPublicKey
```

> ⚠️ **Important:** The `.env` file is listed in `.gitignore` and will **not** be committed to GitHub. This is correct — it keeps your credentials secure.

---

## Step 7 — Verify the Contact Form Code

Check that the contact form in your website is using the correct variable names. The form in `src/pages/Contact.jsx` should be sending these template variables:

```js
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    reply_to: formData.email,
    phone: formData.phone,
    service_type: formData.serviceType,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

The variable names in the template body (`{{from_name}}`, `{{reply_to}}`, etc.) must match these keys exactly. Adjust the template or the code to match if they differ.

---

## Step 8 — Test End-to-End

1. Run your website locally: `npm run dev`
2. Navigate to the Contact page
3. Fill in the form with your own details
4. Submit the form
5. Check `info@voyagemonk.com` — the email should arrive within seconds

If the email doesn't arrive:
- Check the **EmailJS dashboard → Logs** tab for error details
- Double-check your Titan SMTP credentials in the Service settings
- Ensure the Service ID, Template ID, and Public Key in `.env` match exactly what EmailJS shows

---

## Free Plan Limits

The EmailJS free plan allows **200 emails per month**. For a growing business, this is typically sufficient for enquiry forms. If you exceed this:
- Personal plan: 1,000 emails/month at $15/month
- Professional plan: 5,000 emails/month at $25/month

---

## Deployment Note

When you deploy to GitHub Pages (`npm run deploy`), the `.env` file is **not uploaded** to GitHub. Instead:

1. Set the environment variables in your GitHub repository:
   - Go to your repo → **Settings → Secrets and variables → Actions**
   - Add three secrets: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

Alternatively, since you're using `npm run deploy` (gh-pages) rather than GitHub Actions CI/CD, the built files are generated locally (where your `.env` exists) and then pushed. This means your **local `.env` values are already baked into the built JS bundle** during `npm run deploy` — so the form will work on the live site as long as you run the deploy command from your machine where the `.env` file exists.

---

*Questions? Contact Anthropic's Claude via the Cowork app, or write to EmailJS support at support@emailjs.com.*
