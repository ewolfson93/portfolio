/* ----------------------------------------------------------------------------
   DEMO DATA: entirely fictional. No real students, emails, or figures.
   Simulates a scaled tutoring + mentorship practice so the dashboard can be
   shown publicly without exposing any private data.
---------------------------------------------------------------------------- */

export type StudentStatus = "active" | "onboarding" | "paused" | "completed";

export type DemoStudent = {
  name: string;
  course: string;
  track: "HS chemistry" | "University chemistry" | "Mentorship";
  status: StudentStatus;
  sessionsUsed: number;
  sessionsPaid: number;
  nextSession: string | null;
  flags: number;
  rate: number;
};

export const demoStudents: DemoStudent[] = [
  { name: "Maya Castellano", course: "Organic Chemistry I", track: "University chemistry", status: "active", sessionsUsed: 7, sessionsPaid: 10, nextSession: "Today, 4:00 PM", flags: 0, rate: 100 },
  { name: "Devon Pryce", course: "General Chemistry I", track: "University chemistry", status: "active", sessionsUsed: 3, sessionsPaid: 5, nextSession: "Today, 6:30 PM", flags: 1, rate: 100 },
  { name: "Priya Raghunathan", course: "MCAT: Gen/Orgo", track: "Mentorship", status: "active", sessionsUsed: 12, sessionsPaid: 50, nextSession: "Tomorrow, 11:00 AM", flags: 0, rate: 80 },
  { name: "Jonah Feldman", course: "AP Chemistry", track: "HS chemistry", status: "active", sessionsUsed: 4, sessionsPaid: 5, nextSession: "Today, 5:15 PM", flags: 0, rate: 120 },
  { name: "Sofia Marchetti", course: "Biochemistry", track: "University chemistry", status: "active", sessionsUsed: 9, sessionsPaid: 10, nextSession: "Wed, 3:00 PM", flags: 2, rate: 100 },
  { name: "Andre Okafor", course: "Organic Chemistry II", track: "University chemistry", status: "active", sessionsUsed: 6, sessionsPaid: 10, nextSession: "Thu, 7:00 PM", flags: 0, rate: 100 },
  { name: "Hannah Liu", course: "Pre-med mentorship", track: "Mentorship", status: "active", sessionsUsed: 18, sessionsPaid: 50, nextSession: "Fri, 1:00 PM", flags: 0, rate: 80 },
  { name: "Caleb Whitman", course: "General Chemistry II", track: "University chemistry", status: "active", sessionsUsed: 2, sessionsPaid: 5, nextSession: "Tomorrow, 4:30 PM", flags: 1, rate: 100 },
  { name: "Isabella Romero", course: "Organic Chemistry I", track: "University chemistry", status: "onboarding", sessionsUsed: 0, sessionsPaid: 5, nextSession: "Consult Thu, 2:00 PM", flags: 0, rate: 100 },
  { name: "Marcus Bellamy", course: "AP Chemistry", track: "HS chemistry", status: "active", sessionsUsed: 5, sessionsPaid: 5, nextSession: "Wed, 5:00 PM", flags: 0, rate: 120 },
  { name: "Yuki Tanaka", course: "Biochemistry", track: "University chemistry", status: "paused", sessionsUsed: 8, sessionsPaid: 10, nextSession: null, flags: 1, rate: 100 },
  { name: "Grace Donnelly", course: "Pre-health mentorship", track: "Mentorship", status: "active", sessionsUsed: 22, sessionsPaid: 50, nextSession: "Fri, 4:00 PM", flags: 0, rate: 80 },
  { name: "Elias Navarro", course: "General Chemistry I", track: "University chemistry", status: "active", sessionsUsed: 1, sessionsPaid: 5, nextSession: "Today, 7:45 PM", flags: 0, rate: 100 },
  { name: "Amara Johnson", course: "Organic Chemistry II", track: "University chemistry", status: "active", sessionsUsed: 10, sessionsPaid: 10, nextSession: "Mon, 6:00 PM", flags: 0, rate: 100 },
  { name: "Tobias Reinhardt", course: "AP Chemistry", track: "HS chemistry", status: "completed", sessionsUsed: 12, sessionsPaid: 12, nextSession: null, flags: 0, rate: 120 },
  { name: "Lena Petrova", course: "MCAT: Gen/Orgo", track: "Mentorship", status: "active", sessionsUsed: 15, sessionsPaid: 50, nextSession: "Thu, 12:00 PM", flags: 1, rate: 80 },
  { name: "Wesley Chamberlain", course: "General Chemistry II", track: "University chemistry", status: "active", sessionsUsed: 4, sessionsPaid: 5, nextSession: "Tomorrow, 5:30 PM", flags: 0, rate: 100 },
  { name: "Naomi Adeyemi", course: "Biochemistry", track: "University chemistry", status: "onboarding", sessionsUsed: 0, sessionsPaid: 10, nextSession: "Consult Fri, 10:00 AM", flags: 0, rate: 100 },
  { name: "Ravi Mehta", course: "Organic Chemistry I", track: "University chemistry", status: "active", sessionsUsed: 8, sessionsPaid: 10, nextSession: "Wed, 8:00 PM", flags: 0, rate: 100 },
  { name: "Charlotte Beaumont", course: "Pre-med mentorship", track: "Mentorship", status: "active", sessionsUsed: 27, sessionsPaid: 50, nextSession: "Mon, 2:30 PM", flags: 0, rate: 80 },
  { name: "Damien Fournier", course: "General Chemistry I", track: "University chemistry", status: "paused", sessionsUsed: 3, sessionsPaid: 5, nextSession: null, flags: 1, rate: 100 },
  { name: "Aaliyah Carter", course: "AP Chemistry", track: "HS chemistry", status: "active", sessionsUsed: 2, sessionsPaid: 5, nextSession: "Thu, 4:00 PM", flags: 0, rate: 120 },
];

export const demoKpis = [
  { label: "Active students", value: "18", delta: "+3 this month", trend: "up" as const },
  { label: "Sessions this week", value: "31", delta: "+5 vs last week", trend: "up" as const },
  { label: "Monthly recurring", value: "$9.4k", delta: "+12% MoM", trend: "up" as const },
  { label: "Drafts pending review", value: "4", delta: "2 due today", trend: "flat" as const },
];

export type ScheduleItem = {
  time: string;
  student: string;
  topic: string;
  kind: "session" | "consult" | "mentorship";
};

export const demoSchedule: ScheduleItem[] = [
  { time: "4:00 PM", student: "Maya Castellano", topic: "Organic I: substitution vs elimination", kind: "session" },
  { time: "5:15 PM", student: "Jonah Feldman", topic: "AP Chem: thermochemistry review", kind: "session" },
  { time: "6:30 PM", student: "Devon Pryce", topic: "Gen Chem I: stoichiometry", kind: "session" },
  { time: "7:45 PM", student: "Elias Navarro", topic: "Gen Chem I: first session, intake", kind: "session" },
];

export type Activity = {
  skill: string;
  detail: string;
  status: "ok" | "warn";
  when: string;
  ms: string;
};

export const demoActivity: Activity[] = [
  { skill: "daily-brief", detail: "6 tabs refreshed · 4 prep cards", status: "ok", when: "6:02 AM", ms: "4.1s" },
  { skill: "vault-ingest", detail: "3 new sessions routed", status: "ok", when: "6:00 AM", ms: "11.7s" },
  { skill: "session-followup", detail: "Maya C.: recap PDF + email draft", status: "ok", when: "5:58 AM", ms: "6.3s" },
  { skill: "news-digest", detail: "10 articles, 8 high-relevance", status: "ok", when: "6:15 AM", ms: "38.2s" },
  { skill: "outreach-scout", detail: "2 opportunities queued for review", status: "ok", when: "6:18 AM", ms: "22.0s" },
  { skill: "bounce-monitor", detail: "1 soft bounce re-addressed", status: "warn", when: "6:20 AM", ms: "3.4s" },
];

export type RevenuePoint = { month: string; value: number };

export const demoRevenue: RevenuePoint[] = [
  { month: "Dec", value: 5.2 },
  { month: "Jan", value: 6.1 },
  { month: "Feb", value: 6.8 },
  { month: "Mar", value: 7.4 },
  { month: "Apr", value: 8.4 },
  { month: "May", value: 9.4 },
];

export const demoFinance = {
  pipeline: "$14.2k",
  outstanding: "$2,100",
  collectedYtd: "$38.6k",
  packageMix: [
    { label: "Single session", pct: 14 },
    { label: "5-session package", pct: 38 },
    { label: "50-session package", pct: 33 },
    { label: "Mentorship (VIP)", pct: 15 },
  ],
};
