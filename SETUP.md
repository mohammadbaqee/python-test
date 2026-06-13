# Python Placement Exam — Setup Guide

## Step 1: Deploy to GitHub Pages (Free Hosting)

1. Go to https://github.com and create a free account (if you don't have one)
2. Click **New repository** → name it `python-exam` → make it **Public** → click Create
3. Upload all files from this folder (`index.html`, `style.css`, `app.js`, `questions.js`, `q_section1.js` ... `q_section10.js`)
   - Click **Add file → Upload files** → drag and drop all files → Commit
4. Go to **Settings → Pages → Source → main branch → / (root)** → Save
5. Your link will be: `https://YOUR_USERNAME.github.io/python-exam`

---

## Step 2: Set Up EmailJS (So You Get the Report)

1. Go to https://www.emailjs.com → Sign up free
2. **Add Email Service:**
   - Go to Email Services → Add New Service → Gmail (or any provider)
   - Connect your email account
   - Copy the **Service ID** (looks like `service_xxxxxx`)

3. **Create Email Template:**
   - Go to Email Templates → Create New Template
   - Fill in the template like this:

   **Subject:** Python Exam Report — {{candidate_name}}

   **Body:**
   ```
   Candidate: {{candidate_name}}
   Date: {{exam_date}}
   Overall Score: {{overall_score}}
   Performance: {{performance}}

   Section Breakdown:
   {{breakdown}}
   ```

   - In **To Email** field, put: `{{to_email}}`
   - Save the template → Copy the **Template ID** (looks like `template_xxxxxx`)

4. Go to **Account → General** → Copy your **Public Key**

5. Open `app.js` in this folder and replace at the top:
   ```
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // paste here
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // paste here
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // paste here
   ```

6. Re-upload `app.js` to GitHub → done!

---

## Step 3: Share With Your Sister

Send her the link: `https://YOUR_USERNAME.github.io/python-exam`

She opens it in any browser (Chrome recommended), fills in her name and YOUR email address, takes the exam, and when she clicks **Email Report** — the report goes straight to your inbox.

---

## Questions Covered (500+ total)

| Section | Topics | Questions |
|---------|---------|-----------|
| 1. Python Basics | Variables, types, operators, strings | 55 |
| 2. Control Flow | if/else, loops, break/continue | 50 |
| 3. Functions | *args/**kwargs, lambda, decorators, closures | 50 |
| 4. Data Structures | List, tuple, dict, set, comprehensions | 55 |
| 5. OOP | Classes, inheritance, polymorphism, dunder methods | 55 |
| 6. File Handling | open(), csv, json, os.path | 35 |
| 7. Exception Handling | try/except/finally, custom exceptions | 35 |
| 8. Modules & Libraries | os, sys, math, datetime, collections | 40 |
| 9. Advanced Python | Generators, decorators, closures, map/filter | 40 |
| 10. Interview & Placement | Tricky output Qs, DSA, classic interview Qs | 70 |
| **Total** | | **~485** |

All questions are placement-focused — the type asked in TCS, Infosys, Wipro, Cognizant, Accenture, Amazon, Flipkart campus placements.
