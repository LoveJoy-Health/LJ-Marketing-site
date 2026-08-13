export type BlogCategory = {
  slug: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  /** Card / H1 title */
  title: string;
  /** ~50–60 char document title (layout appends | LoveJoy Health) */
  seoTitle: string;
  /** ~140–160 char meta description */
  metaDescription: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
  author: string;
  /** Lightweight markdown: paragraphs, ## headings, lists, [links](/path) */
  content: string;
};

/** Fixed topic filters — slug used in `/blog?category=` */
export const BLOG_CATEGORIES: readonly BlogCategory[] = [
  { slug: "care-journeys", label: "Care journeys" },
  { slug: "providers", label: "For providers" },
  { slug: "organizations", label: "For organizations" },
  { slug: "product", label: "Product" },
  { slug: "company", label: "Company" },
  { slug: "mental-health", label: "Mental health" },
] as const;

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "between-behavioral-health-appointments",
    title: "What happens between behavioral health appointments",
    seoTitle: "What Happens Between Behavioral Health Visits",
    metaDescription:
      "Most of recovery happens between sessions. Learn why continuity, check-ins, and clear next steps matter — and how connected care fills the gaps.",
    excerpt:
      "Sessions matter. So does everything that happens afterward. Why the stretch between visits shapes progress — and how connected support helps.",
    date: "2026-07-22",
    dateLabel: "Jul 22, 2026",
    category: "care-journeys",
    author: "LoveJoy Health",
    content: `A therapy hour, a medication visit, or a care-plan meeting can feel like the whole story of behavioral healthcare. In practice, those appointments are milestones. The rest of life — sleep, stress, relationships, work, transportation, and motivation — unfolds in the days and weeks between them.

That in-between time is where progress is reinforced or quietly unravels. Understanding it is the first step toward care that actually stays with someone.

## Why the gaps matter

Behavioral health is not a single event. It is a journey: finding the right support, building trust, practicing skills, adjusting treatment, and navigating setbacks. Between visits, people often face the hardest parts alone — a tough weekend, a missed dose, a cancelled ride, or the simple question of what to do next.

When the only touchpoint is the next scheduled appointment, small problems can compound. Someone may forget what was discussed, lose momentum on a homework skill, or decide not to return after a rocky first visit. Care teams may only learn about those struggles weeks later — if they learn at all.

Continuity does not mean constant clinical contact. It means the person does not feel abandoned between visits, and the care team has a clearer line of sight into what is happening along the way.

## What “between visits” can look like

The stretch between appointments is rarely empty. It may include:

- Practicing coping skills introduced in session
- Managing medication routines and side effects
- Coordinating childcare, transportation, or time off work
- Following up on referrals to other services
- Waiting for insurance, intake paperwork, or a callback
- Deciding whether a setback is “normal” or a reason to reach out

Each of those moments is a potential drop-off point. A digital front door and shared care journey can make next steps clearer without turning everyday life into another clinic visit.

## Continuity without more appointments

People do not always need more sessions. They need reliable ways to stay oriented: reminders that respect their schedule, a place to ask a non-urgent question, visibility into who is on their care team, and encouragement that fits how they actually live.

For [individuals seeking support](/for-individuals), that might mean finding a provider, staying engaged after the first visit, and having tools that make follow-through easier. For care teams, it means fewer surprises and less chasing information across disconnected systems.

LoveJoy is built around this idea: care should remain connected across people, providers, navigators, and organizations — not reset every time someone walks out of an office or ends a video call.

## Navigation as part of the journey

Not every gap is clinical. Many are logistical or social. Someone may need help scheduling, understanding benefits, or connecting to community resources. That is where [care navigators](/for-navigators) often close the loop — following up, coordinating, and keeping momentum when life gets in the way.

When navigation and clinical care share context, the person is less likely to fall through the cracks between “I was referred” and “I am actually supported.”

## What good between-visit support feels like

From the person’s perspective, helpful continuity tends to feel calm and practical:

- Clear next steps after each visit
- Easy ways to re-engage if something slips
- Messages and check-ins that feel supportive, not overwhelming
- A sense that their care team is working from the same story

From the care team’s perspective, it means fewer blind spots and less time reconstructing what happened last week. Shared visibility supports better conversations in the next session — and better decisions when someone needs a nudge sooner.

## Building journeys, not just visits

If your organization designs programs around appointments alone, drop-offs will keep looking mysterious. If you design around the full journey — access, engagement, follow-up, and outcomes — you start closing the gaps people actually experience.

Explore how LoveJoy supports [connected care for individuals](/for-individuals), [providers](/for-providers), and [organizations](/for-organizations) — or [download the app](/download) to see how continuous support can look day to day.`,
  },
  {
    slug: "how-navigators-close-the-gap",
    title: "How care navigators close the gap between visits",
    seoTitle: "How Care Navigators Close Gaps Between Visits",
    metaDescription:
      "Care navigators keep people moving when life gets in the way. See how follow-ups, coordination, and shared context strengthen behavioral health journeys.",
    excerpt:
      "From follow-ups to social needs, navigators keep people moving forward — with a workspace designed around coordination, not more inbox chaos.",
    date: "2026-06-10",
    dateLabel: "Jun 10, 2026",
    category: "care-journeys",
    author: "LoveJoy Health",
    content: `In behavioral healthcare, the clinical visit is only one chapter. The pages in between — scheduling, transportation, benefits questions, follow-ups after a missed appointment — often determine whether someone stays engaged.

Care navigators work in that in-between space. Their job is not to replace therapy or psychiatry. It is to help people keep moving when systems are confusing and life is heavy.

## The coordination problem

Referrals can stall. Phone trees can exhaust people who already feel overwhelmed. A provider may assume a follow-up happened; a patient may assume someone would call. Without a clear owner for the next step, good intentions dissolve into silence.

Navigators create ownership. They track what still needs to happen, check in at the right moments, and connect people to resources that sit outside a single clinic’s walls — housing support, peer communities, transportation, or simply a clearer explanation of what comes next.

## Why shared context matters

Navigation works best when it is not a parallel universe. If a navigator only sees a spreadsheet, and a clinician only sees a chart note, the person experiences care as fragmented — even when everyone is trying hard.

A shared care journey helps navigators see where someone is in their path: recently matched, waiting on intake, between visits, or needing a re-engagement touch. Providers and organizations gain visibility without turning every update into another meeting.

That is the idea behind LoveJoy’s approach for [care navigators](/for-navigators): a workspace built around caseloads, follow-ups, and coordination — so the human work of helping people stay connected has the right structure behind it.

## Between-visit follow-through

Much of navigation is quiet, practical persistence:

- Confirming that a first appointment was kept
- Helping someone reschedule without starting over
- Clarifying insurance or paperwork blockers
- Connecting clinical recommendations to community resources
- Noticing when outreach has gone unanswered and trying again thoughtfully

These actions rarely show up as dramatic “interventions,” yet they protect continuity. They also free clinicians to focus on clinical care instead of chasing logistics across email and voicemail.

## Supporting people without adding pressure

Good navigation respects dignity. Check-ins should feel helpful, not punitive. Timing matters. So does language. Someone who missed a visit may need a soft re-entry path more than a reminder that they “failed” to show up.

When navigators, providers, and organizations share the same platform story, outreach can stay aligned with the person’s care plan and preferences — rather than bouncing between disconnected tools.

## Building programs that include navigation

Organizations that invest in navigation often see engagement improve because someone is accountable for the journey, not only the visit. Pairing that human role with a connected platform helps scale the work without losing the personal touch.

If you support people through behavioral health programs, learn more about [LoveJoy for navigators](/for-navigators) and [organizations](/for-organizations) — or [talk with our team](/about/contact) about how continuous care can look in your setting.`,
  },
  {
    slug: "connected-care-between-visits-providers",
    title: "Connected care between visits for behavioral health providers",
    seoTitle: "Connected Care Between Visits for Providers",
    metaDescription:
      "Stay informed between sessions without more admin. How connected platforms help behavioral health providers support continuity and clearer clinical context.",
    excerpt:
      "Clinical context should travel with the person — not live in another inbox. How LoveJoy helps providers stay in the loop between visits.",
    date: "2026-04-18",
    dateLabel: "Apr 18, 2026",
    category: "providers",
    author: "LoveJoy Health",
    content: `Behavioral health providers already carry a full clinical load. Adding another portal, another inbox, or another set of admin tasks is rarely the answer. What most clinicians want between visits is clearer signal — not more noise.

Connected care is about making the right context available at the right time: who the person is working with, what happened after the last session, and whether engagement is slipping before the next appointment arrives.

## The between-visit blind spot

In many practices, the story of a patient’s week lives outside the chart. A missed appointment may only surface as an empty slot. A navigator’s outreach may never reach the clinician. A patient’s attempt to ask a simple question may land in a generic mailbox no one owns.

That fragmentation is not a failure of caring. It is a systems problem. When tools do not talk to each other, providers are asked to reconstruct continuity from memory and incomplete notes.

## Continuity that respects clinical time

Between-visit engagement should reduce friction for the care team, not invent new chores. Useful signals tend to be concise and actionable: a follow-up completed, a reschedule requested, a care journey milestone reached, or a flag that someone may need a warmer re-engagement path.

LoveJoy is designed so [providers](/for-providers) can participate in a connected network where patients, navigators, and organizations share a coherent care story — without turning the clinician into the full-time coordinator.

## Staying in the loop without living in email

Email and text threads are flexible, but they scatter context. A connected platform keeps journey updates closer to the care relationship: who is involved, what was agreed, and what still needs attention.

That shared visibility supports better sessions. Instead of spending the first ten minutes reconstructing logistics, providers can focus on clinical work — while still knowing that navigation and follow-through are happening in parallel.

## Matching people to the right support

Access is part of continuity. When people can find appropriate providers more easily, first visits are more likely to stick. When providers can join a network with clear participation expectations, matching becomes more reliable for everyone involved.

If you are exploring how to participate, start with LoveJoy’s [provider overview](/for-providers), then review [platform](/for-providers/platform), [participation](/for-providers/participation), and [onboarding](/for-providers/onboarding) details. Ready to practice day to day? [Download the provider app](/download/provider).

## Outcomes beyond the appointment

Providers care about progress — symptom change, functioning, and whether someone remains engaged long enough for treatment to work. Continuity tools will not replace clinical judgment, but they can reduce preventable drop-offs and make it easier to intervene earlier when someone is drifting away.

Connected care is not about more messages. It is about fewer surprises, clearer collaboration, and a care experience that feels coherent to the person receiving it.

## A quieter kind of support for care teams

The best technology in behavioral health often disappears into the background. It removes dead ends, shortens handoffs, and keeps the human relationship at the center.

That is the standard we aim for at LoveJoy: help providers stay connected to the people they serve — and to the navigators and organizations working alongside them — so care can continue with less fragmentation and less wasted effort.`,
  },
  {
    slug: "digital-front-door-behavioral-health",
    title: "Building a digital front door for behavioral health",
    seoTitle: "A Digital Front Door for Behavioral Health",
    metaDescription:
      "Help people find, enter, and stay in behavioral health care. Why organizations need a digital front door — and how connected journeys improve engagement.",
    excerpt:
      "Access is only the first step. A true digital front door helps people enter care and stay connected across programs, providers, and navigation.",
    date: "2026-05-01",
    dateLabel: "May 1, 2026",
    category: "organizations",
    author: "LoveJoy Health",
    content: `For many organizations, “digital access” still means a brochure website, a phone number, and a PDF intake form. That may satisfy a checklist. It does not guide someone through the real journey of finding help, starting care, and staying engaged.

A digital front door for behavioral health is different. It is the entry point and the path — helping people understand options, connect to the right support, and remain visible to the teams responsible for outcomes.

## Why a front door is more than a website

People seeking behavioral health support often arrive uncertain, tired, or under time pressure. If the first digital experience is confusing, they leave. If intake is slow, they stall. If no one follows up after a missed appointment, they disappear from the program’s view even though their needs remain.

Organizations feel this as low engagement, incomplete referrals, and reporting that cannot explain why people fall off. The issue is rarely a single broken form field. It is the absence of an end-to-end journey.

## What a connected front door enables

A strong digital front door typically supports:

- Clear pathways for individuals, families, or referred members
- Matching to appropriate providers or programs
- Navigation support when logistics get in the way
- Visibility into where people are in their care journey
- Reporting that reflects engagement, not only enrollment counts

LoveJoy approaches this as a platform for [organizations](/for-organizations): access, navigation, and insight on one connected foundation — so programs can measure what matters and support people longer.

## From access to continuity

Getting someone through the door is necessary but not sufficient. Behavioral health outcomes depend on continuity: attending visits, following through on plans, and re-engaging after interruptions.

That is why front-door design should include between-visit support and navigation — not only search and scheduling. When [providers](/for-providers), [navigators](/for-navigators), and program teams share context, the organization can respond earlier and with less manual chase-work.

## Insights that programs can use

Leaders need more than vanity metrics. Useful insight answers practical questions: Where do people drop off? Which pathways convert to first visits? Where does navigation make the biggest difference? Which populations need a warmer handoff?

LoveJoy’s organizational tools are built to support that kind of visibility — including journeys across [platform](/for-organizations/platform), [navigation](/for-organizations/navigation), [insights](/for-organizations/insights), and [implementation](/for-organizations/implementation) considerations.

## Designing for real-world complexity

Behavioral health programs operate across clinics, community partners, benefits rules, and uneven digital literacy. A front door must be welcoming without being simplistic, and structured without being rigid.

The goal is not to digitize every human interaction. It is to remove avoidable friction — repeated data entry, dead-end referrals, invisible wait states — so staff and members can focus on the relationships that create change.

## Starting where you are

Organizations do not need to reinvent every workflow overnight. Many begin by clarifying the entry experience, then connecting navigation and reporting so the journey stays coherent after the first click.

If you are building or modernizing behavioral health access for a health plan, employer, health system, or community program, explore [LoveJoy for organizations](/for-organizations) or [contact our team](/about/contact) to talk through what a connected front door could look like in your environment.`,
  },
  {
    slug: "care-connected-across-roles",
    title: "How LoveJoy keeps care connected across roles",
    seoTitle: "How LoveJoy Keeps Care Connected Across Roles",
    metaDescription:
      "Patients, providers, navigators, and organizations each need different tools — and a shared story. How LoveJoy connects roles without adding more silos.",
    excerpt:
      "Different roles, one care journey. A look at how LoveJoy connects people, clinicians, navigators, and organizations without fragmenting the experience.",
    date: "2026-04-02",
    dateLabel: "Apr 2, 2026",
    category: "product",
    author: "LoveJoy Product",
    content: `Behavioral healthcare fails in the handoffs. A person finds a provider in one system, completes intake in another, gets a navigator call from a third, and receives reminders from somewhere else entirely. Each tool may be “working,” yet the experience feels broken.

LoveJoy’s product bet is simple: keep the care journey connected across roles — so everyone works from a shared story, even when their day-to-day tools differ.

## One journey, many perspectives

An individual needs a clear path to support and a way to stay engaged between visits. A provider needs clinical context without drowning in admin. A navigator needs caseload clarity and follow-up structure. An organization needs visibility into access, engagement, and outcomes across populations.

Those needs are not identical — which is why separate portals and apps exist. What should not be separate is the underlying journey: who the person is, where they are in care, and what still needs to happen next.

## Designed for the moments between visits

Much of LoveJoy’s product thinking starts between appointments. That is where people lose momentum and where teams lose signal. Features that support check-ins, coordination, and journey visibility are not extras; they are core to continuous care.

We aim for tools that feel quieter for busy clinicians, clearer for navigators, and more human for the people receiving care. The best product moments are the ones that remove a dead end someone used to hit every week.

## Role-specific experiences, shared foundation

LoveJoy connects:

- [Individuals](/for-individuals) seeking and staying in care
- [Providers](/for-providers) participating in a connected network
- [Care navigators](/for-navigators) coordinating follow-through
- [Organizations](/for-organizations) managing programs and insight

Each audience gets an experience suited to their work. Underneath, the platform is built so context can travel with the person instead of getting trapped in a single inbox.

## Product principles we keep returning to

A few principles guide what we ship:

- Continuity over one-off transactions
- Clarity over feature sprawl
- Collaboration without forcing everyone into the same UI
- Respect for clinical and personal boundaries
- Practical next steps people can actually complete

Those principles show up in how we think about matching, engagement, navigation workflows, and organizational reporting. They also shape what we choose not to build — because more screens are not the same as better care.

## What “connected” should feel like

For a person, connected care feels like they are not starting over every time they talk to someone new. For a provider, it feels like fewer blind spots. For a navigator, it feels like a caseload they can actually work. For an organization, it feels like a front door that leads somewhere measurable.

That is the product standard: connected enough to be useful, simple enough to be used.

## Where to go next

If you want to see how the pieces fit together, start with the audience pages above, explore [about LoveJoy](/about), or [download an app](/download) for the experience closest to your role. For partnership conversations, [reach out to the team](/about/contact).

We will keep building for the spaces between visits — because that is where connected care either holds or falls apart.`,
  },
  {
    slug: "why-lovejoy-exists",
    title: "Why LoveJoy exists",
    seoTitle: "Why LoveJoy Exists: Connected Behavioral Care",
    metaDescription:
      "Behavioral healthcare is fragmented by design. LoveJoy exists to make care easier to find, easier to navigate, and easier to stay connected to over time.",
    excerpt:
      "Behavioral healthcare is fragmented by design. Our mission is connected care — for people, providers, navigators, and organizations.",
    date: "2026-03-12",
    dateLabel: "Mar 12, 2026",
    category: "company",
    author: "LoveJoy Health",
    content: `LoveJoy exists because behavioral healthcare too often asks people to do the hardest work alone — find help, stay engaged, and rebuild momentum after every handoff — while the systems around them remain disconnected.

We believe support should be easier to find, easier to navigate, and easier to stay connected to. That belief shapes our product, our partnerships, and the way we talk about care.

## The problem we kept seeing

Across clinics, communities, and organizations, the pattern repeats. Someone is ready to seek help, then faces a maze of directories, waitlists, and unclear next steps. They attend a first visit, then life intervenes. A referral is made, then never completed. A care team cares deeply, then loses visibility between appointments.

None of this is mysterious. It is what happens when access, clinical care, navigation, and program oversight live in separate lanes.

## Connected care as a mission, not a slogan

“Connected care” can sound abstract until you translate it into daily experience:

- A person knows what to do next after a visit
- A provider is not reconstructing the week from scraps
- A navigator can follow through without hunting across tools
- An organization can see where journeys stall and improve the path

LoveJoy builds toward that reality — one platform spanning [individuals](/for-individuals), [providers](/for-providers), [navigators](/for-navigators), and [organizations](/for-organizations).

## People at the center

Technology does not heal anyone by itself. Relationships do. Our role is to reduce friction around those relationships: finding the right support, staying engaged between visits, and coordinating the practical help that makes clinical work possible.

That is why we invest in continuous care experiences — including tools people can carry with them — rather than treating behavioral health as a series of isolated appointments. See [download options](/download) for how that shows up in daily life.

## Building with partners, not in isolation

Meaningful change in behavioral health requires clinics, community programs, employers, plans, and care teams working together. LoveJoy is designed as infrastructure for that collaboration: a digital front door, shared journeys, and clearer insight for the organizations responsible for population outcomes.

We care about implementation realities — onboarding, participation expectations, reporting needs — because mission without operational fit does not last.

## What we are not claiming

We do not pretend that a platform alone solves stigma, workforce shortages, or every barrier to care. We do believe that when people and teams share a coherent journey, more of the care that already exists can actually reach the people who need it.

Honesty matters in healthcare marketing. Continuity, engagement, and navigation are levers we can build for. Clinical outcomes still depend on people, practice, and context.

## Looking forward

LoveJoy’s story is still being written with every partner and every person who uses the platform. What will not change is the reason we started: behavioral healthcare should not fall apart in the gaps.

Learn more [about LoveJoy](/about), meet the [team](/about/team), or [get in touch](/about/contact). If you are ready to explore connected care for your role, the audience pages above are the best next step.`,
  },
  {
    slug: "finding-mental-health-support-that-fits",
    title: "Finding mental health support that fits your life",
    seoTitle: "Finding Mental Health Support That Fits Life",
    metaDescription:
      "Looking for mental health support that fits your schedule and comfort level? Practical guidance on access, first steps, and staying engaged between visits.",
    excerpt:
      "Support should meet you where you are — without stigma or a maze of dead ends. Practical ways to find care and keep momentum in daily life.",
    date: "2026-02-20",
    dateLabel: "Feb 20, 2026",
    category: "mental-health",
    author: "LoveJoy Health",
    content: `Looking for mental health support can feel like a second job. You may not know where to start, what kind of help fits, or how to keep going once life gets busy again. You are not alone in that — and you should not have to navigate it without a clearer path.

This guide focuses on practical next steps: finding support that fits your life, reducing unnecessary friction, and staying connected between appointments.

## Start with what you need right now

People seek support for many reasons — stress, mood changes, relationship strain, substance concerns, parenting pressure, or a sense that something has been harder for too long. You do not need a perfect label before you take a first step.

It can help to name what would feel useful:

- Someone to talk with regularly
- Help evaluating medication options with a clinician
- Support managing day-to-day routines
- Guidance connecting to community or peer spaces
- Help figuring out insurance, scheduling, or referrals

Clarity about the next conversation is more important than having every answer beforehand.

## Access without the maze

A good starting point is a digital front door that helps you explore options without cold-calling every office. LoveJoy is built to help [individuals find support](/for-individuals) and stay connected to care over time — including [app download](/download/patient) when you are ready for tools that travel with you.

If you already have a provider relationship, ask what between-visit support looks like. If you are starting fresh, look for pathways that explain next steps in plain language.

## Stigma-light, dignity-first language

Seeking mental health support is a practical decision, not a character judgment. You deserve tools and conversations that respect that. Prefer experiences that talk about care, continuity, and real life — not fear, shame, or oversimplified promises.

It is also okay if your first match is not perfect. Switching providers or adjusting a plan is part of many care journeys. Continuity means you are not abandoned while you figure that out.

## Make the first visit easier to keep

First appointments often collide with work, childcare, transportation, or nerves. A few practical habits help:

- Put the visit on your calendar with travel or login time included
- Write down two or three goals or questions beforehand
- Know how to reschedule without losing your place in line
- Ask what happens after the visit — homework, follow-up, or check-ins

If something goes wrong and you miss a visit, reach out sooner rather than disappearing. Many teams would rather help you rebook than assume you are done.

## Between visits: where progress lives

Most of your week is not spent in session. Sleep, stress, relationships, and routines shape how you feel. Between-visit tools — reminders, messages, navigation support, or simple check-ins — can help you stay oriented without turning every day into clinical work.

If your care involves multiple people (a therapist, a prescriber, a navigator, or a program), shared context helps. You should not have to retell your entire story at every handoff.

## When community support helps

Clinical care is one path. Peer and community spaces can complement it — especially when you want connection without a formal appointment. LoveJoy’s community experience, [The Porch](/the-porch), is one place people explore supportive connection alongside care journeys.

Choose communities that feel safe and well-moderated. You get to set boundaries about what you share.

## Your next step

If you are ready to explore options, start at [for individuals](/for-individuals) or [download the patient app](/download/patient). If you are helping someone else find care — as a family member, navigator, or organization partner — see how LoveJoy supports [navigators](/for-navigators) and [organizations](/for-organizations).

Support that fits your life is support you can actually keep. Connected care is about making that continuity easier — from the first search to the weeks between visits.`,
  },
] as const;

export function getCategoryLabel(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function isValidCategorySlug(slug: string | undefined | null): boolean {
  if (!slug) return false;
  return BLOG_CATEGORIES.some((c) => c.slug === slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
