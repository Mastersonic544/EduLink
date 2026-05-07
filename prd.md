EduLink
Bridging the Education Gap, One Post at a Time

Document Type: Startup Requirements & Pitch Reference Doc
Version: 1.0 — Pre-Seed Stage
Stack: React · Tailwind CSS · Node.js · Supabase · Vercel · Render



1. Problem Statement
The Global Education Inequality Crisis
Education quality today is not determined by a student's potential — it is determined by their postal code and their institution's budget.

A student at Oxford accesses world-class lecture materials, curated reading lists, and internationally respected teaching methodologies.
A student at an underfunded public university in a developing nation, or one living through political instability or conflict, accesses whatever their individual teacher could scrape together.

This disparity is not new. What is new is that the rise of AI has made it worse in a way nobody predicted:

Students now have unlimited access to information — but zero reliable way to verify its quality, origin, or pedagogical soundness.

AI tools generate confident, plausible-sounding educational content that may be factually wrong, culturally biased, or methodologically outdated. Students are drowning in noise with no trusted signal.
Meanwhile, teachers have no shared professional space. The craft of teaching — the methodology, the creative session designs, the failed experiments, the breakthroughs — lives in isolation. A brilliant professor in Tunis and a brilliant professor in Toronto have no structured way to learn from each other.
The Three Compounding Problems
ProblemWho It HurtsCurrent Workaround (and why it fails)Course material quality varies wildly by institutionStudents at underfunded or crisis-affected universitiesGoogling + AI → unreliable, unverifiedTeaching methodology is siloed by institutionTeachers everywhereLinkedIn posts → no structured content layer, no student accessNo trusted layer between raw AI output and academic materialBoth students and teachersManual fact-checking → slow, inconsistent, unsustainable

2. Solution Statement
EduLink: The First Professional Network Built Around How Teachers Teach
EduLink is a centralized, social-media-style platform where:

Teachers share not just their course materials, but their entire teaching approach — methodologies, session designs, creative experiments, peer discussions, and professional experiences
Students access a curated, teacher-verified feed of real academic content from real educators, downloadable and structured by subject and institution level
Administrators monitor platform health, content quality, and growth metrics through a dedicated analytics dashboard

EduLink does not try to replace universities. It bridges the gap between them — giving every student, regardless of institution, access to the collective intelligence of a global teacher network.

The core insight: There are thousands of platforms for finished courses. Nobody owns the space where teachers figure out how to teach them. That's EduLink's white space.


3. Product Overview
Platform Identity
AttributeDetailTypeSocial-professional network with content distribution layerPrimary UsersUniversity-level teachers and students globallyCore ActionTeachers post → Students discover and downloadMonetizationFreemium (download limits for students, visibility tiers for teachers)DifferentiatorPedagogy-first content layer + teacher community + student access in one platform
The Three-Actor Model
┌─────────────────────────────────────────────────────────┐
│                        EDULINK                          │
│                                                         │
│   👩‍🏫 TEACHER          👨‍🎓 STUDENT          🛡️ ADMIN    │
│   Professional         Content               Platform   │
│   Network              Consumer              Controller  │
│   + Content            + Downloader                     │
│   Creator                                               │
└─────────────────────────────────────────────────────────┘

4. Core Features by Actor
👩‍🏫 Teacher
Profile & Verification

Sign up via institutional email (cross-referenced against a verified institutions database)
Manual verification fallback: submit employment letter + ID (for teachers at institutions without standardized email domains — critical for conflict-affected regions)
Public profile showing: name, institution, subject area, XP level, post count, download count, follower count

Content Creation

Post types: Course material (slides, PDFs, quizzes), Teaching methodology post, Experience/reflection post, Resource link
Tag system per post (subject, level, topic, language)
Post limit: 50 posts/month (free) — resets monthly
Premium: Unlimited posts + featured placement in feed

Community

Follow other teachers / be followed
Send friend requests for DM access
Premium: DM teachers who haven't accepted a request (InMail-style)
Create and join teacher groups (by subject, region, methodology)
Comment on posts — discuss teaching approaches
Algorithmic feed based on subject tags + engagement

XP & Visibility System

XP earned per: post published (+10), download received (+5), like received (+3), share received (+4), comment received (+2)
Higher XP = higher algorithmic feed ranking
XP levels displayed on profile (creates status incentive without cash)
Premium teachers: Base feed boost regardless of XP

Dashboard (Profile Page)

Total downloads, likes, shares, comments per post
Monthly post performance chart
Follower growth over time
XP breakdown
Most downloaded material


👨‍🎓 Student
Profile

Sign up with any valid email (no institutional requirement)
Profile shows: name, institution (optional), subjects of interest, download history

Discovery

Feed shows only teacher posts — no student-generated content visible in main feed
Filter by: subject, institution level (undergrad/postgrad/professional), language, post type, teacher XP tier
Search by keyword, teacher name, institution, tag

Content Access

Preview any post
Download attached files (PDF, PPT, DOCX, ZIP)
Free tier: 50 downloads/month
Premium tier: 150 downloads/month ($5/month)
Download counter tracked in Supabase per user_id + month — tamper-proof
Founding Member badge: First 1,000 students get 100 downloads/month permanently

Engagement

Like and comment on teacher posts
Share posts externally
Save posts to personal collections


🛡️ Admin
User Management

Total users (all time + monthly active)
Teachers vs students breakdown
Manual teacher verification queue
Flag and review reported posts/users

Content Oversight

Total posts published
Most downloaded materials (quality signal)
Flagged content queue

Platform KPIs Dashboard

Bar chart: Posting-to-downloading ratio over time (content supply vs demand health)
Pie chart: Free vs Premium users (monetization health)
Line chart: Monthly active users (growth health)
Funnel chart: Registered → Active → Premium conversion
Heatmap: Activity by subject/region

Subscription Management

Adjust free tier download limits globally (without redeployment — via dashboard toggle)
View MRR, churn rate, new subscribers per month


5. MVP vs V2 Feature Map
🟢 MVP — Launch Blockers (Without These It's Not a Product)

 Teacher signup with institutional email verification
 Student signup
 Post creation (file upload + tags)
 Student feed (teacher posts only, tag filtering)
 File download with monthly counter
 Teacher public profile with basic stats
 Like and comment system
 Admin dashboard (users, posts, basic charts)
 Freemium gate (50 downloads → upgrade prompt)
 Stripe integration for student premium subscription

🟡 V2 — Important But Not Day One

 XP system and algorithmic feed ranking
 Teacher groups
 DM system (free + premium)
 Teacher dashboard (downloads/likes/shares analytics)
 Friend request system
 Teacher premium subscription (featured + DM + unlimited posts)
 Founding Member badge logic
 Manual verification fallback (employment letter)
 Post save/collections feature
 Notification system

🔴 Cut For Now

 Mobile app (web-first, optimize for mobile browser)
 Live sessions / webinars
 AI content verification layer (great vision, premature for MVP)
 Institutional partnerships / B2B tier
 Multilingual UI


6. Competitive Landscape
Direct & Indirect Competitors
PlatformSegmentWhat They DoCritical GapLinkedInProfessional networkTeachers post tips, career updatesNo course material layer, no student feed, feed is noisy and generalAcademia.eduAcademic sharingShare research papersResearch-only, no teaching methodology, no student-first UXResearchGateAcademic networkCitation tracking, paper sharingResearchers only, no pedagogy, no files for course deliveryTeachers Pay TeachersK-12 marketplaceBuy/sell K-12 worksheetsTransactional only, no community, university-level gapMIT/Oxford OpenCourseWareCourse publishingPost finished courses publiclyOne-way broadcast, no teacher network, no student interactionGoogle Classroom / MoodleLMSManage a classroomClosed per-institution, not a network, no discoveryRate My ProfessorTeacher reviewsStudents rate teachersZero content sharing, adversarial dynamic
EduLink's Unique Position
                    COMMUNITY-FOCUSED
                           │
                     EduLink ★
                           │
   COURSE          ────────┼────────    METHODOLOGY
   CONTENT                 │            FOCUSED
   (MIT OCW)               │           (LinkedIn)
                           │
                    INDIVIDUAL-USE

EduLink is the only platform at the intersection of: teacher-to-teacher professional community + methodology sharing + student-accessible content distribution.


7. Business Model Canvas
BlockDetailCustomer SegmentsPrimary: University teachers globally. Secondary: University students globally. Tertiary (V3): Educational institutions seeking curriculum benchmarkingValue PropositionsTeachers: Professional community + visibility + career growth through XP. Students: Access to quality, teacher-verified course materials regardless of institution qualityChannelsOrganic social (Twitter/X, LinkedIn), university campus ambassador program, direct outreach to progressive educators, SEO for course material keywordsCustomer RelationshipsCommunity-led (teachers help teachers), algorithm-driven content discovery, gamification (XP) for retentionRevenue Streams1. Student Premium: $5/month for 150 downloads. 2. Teacher Premium: $12/month for featured placement + DM access + unlimited postsKey ResourcesVerified institutions database, file storage infrastructure (Supabase), content moderation system, XP algorithmKey ActivitiesTeacher verification, content moderation, algorithm tuning, community management, payment processingKey PartnershipsSupabase (infrastructure), Stripe (payments), university student unions (distribution), education NGOs in conflict regions (credibility + access)Cost StructureInfrastructure (Supabase, Vercel, Render), payment processing fees (Stripe ~2.9%), moderation (initially manual), marketing, development

8. Financial Projections
Market Sizing
Total Addressable Market (TAM)
Global EdTech market (2025): $340 Billion
Relevant sub-segment — digital professional learning for educators + course content distribution: ~$48 Billion
Serviceable Addressable Market (SAM)
University-level teachers + students globally who use digital tools actively:

~235 million university students worldwide
~15 million university-level teachers worldwide
At $5–12/month average: SAM ≈ $8.2 Billion/year

Serviceable Obtainable Market (SOM)
MENA + Sub-Saharan Africa + Southeast Asia (primary launch regions, highest unmet need):

~28 million students + ~1.8 million teachers in target regions
Realistic 5-year capture at 0.4%: SOM ≈ $120 Million/year


Unit Economics
Student Tier
ARPU (Average Revenue Per User) = $5/month
Churn Rate (estimated) = 5%/month
LTV = ARPU ÷ Churn Rate
LTV = $5 ÷ 0.05 = $100

CAC (Customer Acquisition Cost) = $2 (organic-first, campus ambassador model)
LTV:CAC Ratio = $100 ÷ $2 = 50x ✅
Teacher Tier
ARPU = $12/month
Churn Rate (estimated) = 3%/month (higher stickiness — professional identity)
LTV = $12 ÷ 0.03 = $400

CAC = $15 (targeted outreach, LinkedIn ads, edu conferences)
LTV:CAC Ratio = $400 ÷ $15 = 26.7x ✅

Monthly Recurring Revenue Projections
Formula:
MRR = (Students_Premium × $5) + (Teachers_Premium × $12)
ARR = MRR × 12
Conversion Rate (Students) = Premium Students ÷ Total Students
Conversion Rate (Teachers) = Premium Teachers ÷ Total Teachers
MetricYear 1Year 2Year 3Total Students12,000120,000600,000Student Conversion Rate4%8%11%Premium Students4809,60066,000Total Teachers2,50018,00065,000Teacher Conversion Rate3%5%8%Premium Teachers759005,200MRR (End of Year)$3,300$58,800$392,400ARR$39,600$705,600$4,708,800

Cost Structure Projections
Cost ItemYear 1Year 2Year 3Infrastructure (Supabase/Vercel/Render)$1,200$8,400$36,000Stripe Processing Fees (2.9% of revenue)$1,148$20,462$136,555Development (part-time contractor)$12,000$36,000$72,000Marketing & Acquisition$8,000$40,000$120,000Moderation & Operations$3,600$18,000$48,000Legal & Compliance$2,500$5,000$8,000Total Costs$28,448$127,862$420,555Net Profit / (Loss)(−$28,848)$577,738$4,288,245

Note: Year 1 operates at a planned loss — standard for marketplace/network products requiring critical mass before monetization activates. Break-even is projected at Month 18–22 depending on teacher acquisition velocity.


Break-Even Formula
Break-Even MRR = Total Monthly Fixed Costs ÷ (1 - Variable Cost Ratio)
Monthly Fixed Costs (Y1 avg) = $2,371
Variable Cost Ratio = Stripe fee % = 2.9% = 0.029
Break-Even MRR = $2,371 ÷ (1 - 0.029) = $2,441/month

Break-Even Users Needed:
Students: $2,441 ÷ $5 = 489 premium students
OR combined: ~350 premium students + 50 premium teachers

9. Go-to-Market Strategy
Phase 1 — Seeding (Months 1–3)
Goal: 500 teachers, 2,000 students. Prove the feed works.

Direct cold outreach to 200 progressive educators identified on LinkedIn and Twitter/X
Partner with 3–5 university student unions in MENA for student acquisition
"Founding Member" campaign: First 1,000 students get permanent 100 downloads/month
Launch in one subject vertical only (suggest: Computer Science or Engineering — highest digital tool adoption among teachers)

Phase 2 — Traction (Months 4–9)
Goal: 5,000 teachers, 30,000 students. First revenue.

Activate XP system — create visible leaderboards to drive teacher competition
Campus ambassador program: pay students in premium credits to recruit peers
SEO strategy: optimize teacher profile pages and post pages for Google indexing of course material searches
PR push: position EduLink as the "LinkedIn for Teachers" in EdTech media

Phase 3 — Scale (Months 10–18)
Goal: 20,000 teachers, 150,000 students. Path to break-even.

Open teacher premium subscriptions
Expand to second and third subject verticals
Launch in Southeast Asia (Indonesia, Philippines — massive student populations, underfunded public universities)
Begin conversations with education NGOs and UNESCO-affiliated bodies for credibility


10. Tech Stack & Architecture
┌─────────────────────────────────────┐
│           FRONTEND                  │
│     React + Tailwind CSS            │
│         (Vercel)                    │
└──────────────┬──────────────────────┘
               │ REST API / Supabase Realtime
┌──────────────▼──────────────────────┐
│           BACKEND                   │
│        Node.js + Express            │
│           (Render)                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          DATABASE & STORAGE         │
│             Supabase                │
│  PostgreSQL · Auth · Storage · RT   │
└─────────────────────────────────────┘
Key Database Tables
sqlusers           -- id, email, role (teacher/student/admin), xp, tier, created_at
institutions    -- id, name, domain, country, verified
posts           -- id, teacher_id, type, tags[], file_url, likes, shares, created_at
downloads       -- id, student_id, post_id, file_id, downloaded_at, month_bucket
subscriptions   -- id, user_id, plan, stripe_customer_id, status, renews_at
comments        -- id, user_id, post_id, content, created_at
follows         -- follower_id, following_id, created_at
xp_log          -- id, user_id, action_type, points, post_id, created_at
Download Limit Logic
javascript// Check before allowing download
const { count } = await supabase
  .from('downloads')
  .select('*', { count: 'exact' })
  .eq('student_id', userId)
  .eq('month_bucket', currentMonthKey); // e.g. "2025-09"

const limit = user.tier === 'premium' ? 150 : 
              user.founding_member ? 100 : 50;

if (count >= limit) return res.status(403).json({ 
  error: 'Download limit reached', 
  upgrade_prompt: true 
});

11. The Ask
Pre-Seed Round: $250,000
Use of Funds
CategoryAllocationAmountProduct Development40%$100,000Marketing & User Acquisition28%$70,000Operations & Legal18%$45,000Reserve / Contingency14%$35,000
What this gets us:

18 months of runway
MVP live within 3 months of funding
Target: 5,000 teachers + 30,000 students by Month 12
First MRR milestone ($10,000/month) by Month 14
Series A readiness by Month 18 with full growth metrics

What we're offering:

10% equity at $2.5M post-money valuation
Advisor seats available for strategic EdTech / MENA market investors

Why now:

AI-generated content crisis in education is peaking — trust in digital sources is at an all-time low
Post-COVID normalization of digital learning created a permanent behavior shift
No funded competitor owns this exact position
Founding team is deeply embedded in the target market (students who lived this problem)


12. Roadmap
Q1 2025 ──── MVP Build (Auth, Feed, Posts, Downloads, Basic Admin)
    │
Q2 2025 ──── Closed Beta (500 teachers, 2,000 students, MENA focus)
    │
Q3 2025 ──── Public Launch + Founding Member Campaign
    │         XP System + Teacher Dashboard
    │
Q4 2025 ──── Teacher Premium Launch + DM System
    │         Groups + Notifications
    │
Q1 2026 ──── SEO Growth Push + Campus Ambassador Program
    │         Southeast Asia Expansion
    │
Q2 2026 ──── Series A Preparation
              B2B Institutional Tier (V3 exploration)

13. Build Prompts — Antigravity

Instructions: Feed these prompts one screen at a time. Complete each screen before moving to the next. Reference the EduLink brand: clean, academic-professional, trust-forward. Primary color: deep navy #0F1F3D. Accent: vibrant teal #00BFA6. Font: Sora or DM Sans.