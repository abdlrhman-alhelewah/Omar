# Omar Mohamed ElBasstawisy – Professional Media Buyer & Digital Marketer Portfolio

A modern, high-performance, responsive personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

- **Live URL**: Configured for instant deployment to **GitHub Pages**, **Vercel**, or **Netlify**.
- **Role**: Media Buyer & Digital Marketer (B2B & B2C Paid Acquisition).
- **Core Channels**: Meta Ads (Facebook & Instagram), TikTok Ads Manager, Snapchat Ads, LinkedIn Campaign Manager.
- **Audited Metrics**: 4,485+ verified conversions, 98.2M+ views, 622 qualified leads @ $2.53 CPL, 7+ scaled brands across Egypt, the Gulf (Saudi Arabia & UAE), and Europe.

---

## 🚀 How to Publish on GitHub (خطوات الرفع على جيت هب)

### الخطوة 1: تهيئة المستودع ورفعه على GitHub (Push to GitHub)

افتح موجه الأوامر (Terminal أو Git Bash) داخل مجلد المشروع ونفذ الأوامر التالية:

```bash
# 1. تهيئة مستودع Git
git init

# 2. إضافة جميع الملفات
git add .

# 3. حفظ أول Commit
git commit -m "feat: initial commit of Omar ElBasstawisy professional portfolio"

# 4. إعادة تسمية الفرع إلى main
git branch -M main

# 5. ربط المشروع بمستودعك الجديد على GitHub (استبدل YOUR_USERNAME و YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 6. رفع الملفات إلى GitHub
git push -u origin main
```

---

### الخطوة 2: تفعيل الاستضافة المجانية GitHub Pages (Enable GitHub Pages)

المشروع مجهز مسبقاً بملف **GitHub Actions** تلقائي (`.github/workflows/deploy.yml`):

1. افتح صفحة المستودع على **GitHub**.
2. اذهب إلى علامة التبويب **Settings** (الإعدادات).
3. من القائمة الجانبية اليسرى اختر **Pages**.
4. تحت قسم **Build and deployment**:
   - في خيار **Source** اختر: **GitHub Actions**.
5. بمجرد اختيار GitHub Actions، سيبدأ الـ Workflow تلقائياً في بناء المشروع ونشره خلال أقل من دقيقة.
6. سيظهر لك رابط الموقع المباشر في نفس الصفحة بالأعلى بصيغة:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

> **ملاحظة تقنية هامة تم حلها مسبقاً**:
> تم ضبط `base: './'` في `vite.config.ts` وربط جميع مسارات الصور والشعارات بمحول `getAssetUrl` ليعمل الموقع تلقائياً وبكفاءة 100% دون أي أخطاء في مسارات الصور (404) على GitHub Pages أو أي دومين فرعي.

---

### بديل إضافي فوري (Vercel أو Netlify)
يمكنك أيضاً نشر الموقع في 30 ثانية مجاناً عبر:
1. الدخول على [vercel.com](https://vercel.com) أو [netlify.com](https://netlify.com).
2. اختيار **Add New Project** والربط مع مستودع الـ GitHub.
3. الضغط على **Deploy** مباشرة (الإعدادات الافتراضية مضبوطة مسبقاً: Build Command هو `npm run build` ومجلد الإخراج هو `dist`).

---

## 🛠️ Development & Local Run (التشغيل المحلي)

```bash
# تثبيت الحزم
npm install

# تشغيل بيئة التطوير المحلية
npm run dev

# فحص كود TypeScript
npm run lint

# بناء نسخة الإنتاج النهائية
npm run build

# معاينة نسخة الإنتاج
npm run preview
```

---

## 📁 Project Architecture (هيكل المشروع)

```
├── public/                 # Static assets (High-Res portraits, Client Logos, Audited Proofs, CV PDF)
│   ├── assets/             # Original high-res uploaded photo & CV
│   ├── logos/              # Transparent client brand logos (IHF, CS, UGT, etc.)
│   └── portfolio_slides/   # Ad manager proof screenshots
├── src/
│   ├── components/         # Modular light-mode React components
│   │   ├── Navbar.tsx             # Fixed nav + dynamic scroll progress bar + LinkedIn & WhatsApp
│   │   ├── HeroSection.tsx        # High-impact value proposition + 3K photo frame + primary CTAs
│   │   ├── BrandMarquee.tsx       # 7 scaled client logos
│   │   ├── ProjectsSection.tsx    # Filterable B2B/B2C case studies + inspect proof modal
│   │   ├── CampaignPerformance.tsx# Platform dashboards (Meta, TikTok, Snapchat, LinkedIn)
│   │   ├── ExperienceTimeline.tsx # Chronological career history from CV
│   │   ├── EducationSkills.tsx    # B.Sc. A+ grade, diplomas & verified competencies
│   │   ├── ContactSection.tsx     # Direct phone, WhatsApp, LinkedIn card & inquiry form
│   │   ├── FloatingBackToTop.tsx  # Pinned back to top button with circular scroll ring
│   │   ├── Footer.tsx             # Verified contacts, copyright & navigation
│   │   ├── CvModal.tsx            # Full interactive resume + ATS text copy + PDF download
│   │   └── ImageLightbox.tsx      # Modal lightbox for inspecting ad manager proofs
│   ├── data/
│   │   └── portfolioData.ts       # 100% authentic data from CV & Portfolio documents
│   ├── utils/
│   │   └── assetUrl.ts            # Dynamic asset resolver for GitHub Pages sub-paths
│   ├── App.tsx                    # Main single-page application layout
│   └── main.tsx                   # React root entry
├── .github/workflows/
│   └── deploy.yml          # Automated CI/CD pipeline for GitHub Pages
├── vite.config.ts          # Vite build config with base: './'
└── package.json            # Scripts & modern dependencies
```
