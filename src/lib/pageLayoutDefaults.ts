/**
 * Default Section Layout Definitions for Ishan Pharmacy Vision
 * Synced with backend DEFAULT_PHARMACY_LAYOUTS in routes/pageLayouts.js
 */

export const DEFAULT_PHARMACY_LAYOUT_ORDERS: Record<string, string[]> = {
  homepage: [
    "hero",
    "stats",
    "about",
    "programs",
    "why_us",
    "placements",
    "faculty",
    "campus",
    "news",
    "testimonials",
    "faqs",
    "cta"
  ],
  about_us: [
    "header",
    "banner_image",
    "story",
    "gallery",
    "milestones",
    "differentiators",
    "cta"
  ],
  principal_message: [
    "header",
    "message",
    "cta"
  ],
  mission_vision: [
    "header",
    "banner_image",
    "vision",
    "mission",
    "core_values",
    "cta"
  ],
  why_choose_us: [
    "header",
    "overview",
    "cta"
  ],
  approvals: [
    "header",
    "approvals_grid"
  ],
  mandatory_disclosure: [
    "header",
    "compliance_statement",
    "documents_table"
  ],
  code_of_conduct: [
    "header",
    "code_content",
    "guidelines"
  ],
  faqs: [
    "header",
    "category_tabs",
    "faq_accordion",
    "cta"
  ],
  education_overview: [
    "header",
    "curriculum_standards",
    "b_pharm_highlight",
    "d_pharm_highlight",
    "cta"
  ],
  admissions: [
    "header",
    "alert_banner",
    "steps",
    "eligibility",
    "documents",
    "cta"
  ],
  admissions_enquiry: [
    "header",
    "info",
    "counselling",
    "portal_info",
    "form"
  ],
  scholarships: [
    "header",
    "guidelines",
    "merit_scholarships",
    "cta"
  ],
  certificate_programs: [
    "header",
    "certification_partners",
    "programs_grid",
    "cta"
  ],
  consultation: [
    "header",
    "counselors_info",
    "consultation_form",
    "cta"
  ],
  fee_payment: [
    "header",
    "fee_schedule",
    "online_payment_gateway",
    "helpdesk",
    "cta"
  ],
  faculty: [
    "header",
    "search_filter",
    "faculty_grid",
    "cta"
  ],
  visiting_faculty: [
    "header",
    "academic_collaborators",
    "experts_grid",
    "cta"
  ],
  pharmaceutical_chemistry: [
    "header",
    "overview",
    "equipment_specs",
    "gallery",
    "cta"
  ],
  pharmaceutics: [
    "header",
    "overview",
    "formulation_equipment",
    "gallery",
    "cta"
  ],
  pharmacognosy: [
    "header",
    "overview",
    "crude_drugs_collection",
    "gallery",
    "cta"
  ],
  pharmacology: [
    "header",
    "overview",
    "screening_units",
    "gallery",
    "cta"
  ],
  pharmacy_practice: [
    "header",
    "overview",
    "clinical_setup",
    "gallery",
    "cta"
  ],
  human_anatomy: [
    "header",
    "overview",
    "anatomical_models",
    "gallery",
    "cta"
  ],
  herbal_garden: [
    "header",
    "overview",
    "medicinal_plant_species",
    "gallery",
    "cta"
  ],
  machine_room: [
    "header",
    "overview",
    "industrial_machinery",
    "gallery",
    "cta"
  ],
  museum_computer_lab: [
    "header",
    "overview",
    "museum_exhibits",
    "gallery",
    "cta"
  ],
  infrastructure: [
    "header",
    "amenities_overview",
    "facilities_grid",
    "gallery",
    "cta"
  ],
  library: [
    "header",
    "overview",
    "e_journals_books",
    "gallery",
    "cta"
  ],
  hostel: [
    "header",
    "overview",
    "rooms_amenities",
    "gallery",
    "cta"
  ],
  auditorium_sports: [
    "header",
    "overview",
    "facilities_grid",
    "gallery",
    "cta"
  ],
  news_events: [
    "header",
    "featured_news",
    "events_list",
    "cta"
  ],
  events_calendar: [
    "header",
    "calendar_schedule",
    "upcoming_workshops",
    "cta"
  ],
  guest_lectures: [
    "header",
    "distinguished_speakers",
    "lecture_archive",
    "cta"
  ],
  industrial_visits: [
    "header",
    "pharma_plants_visited",
    "visit_reports",
    "gallery",
    "cta"
  ],
  photo_gallery: [
    "header",
    "category_tabs",
    "photo_grid",
    "cta"
  ],
  video_gallery: [
    "header",
    "video_grid",
    "campus_tours",
    "cta"
  ],
  press_coverage: [
    "header",
    "media_articles",
    "press_clippings",
    "cta"
  ],
  downloads: [
    "header",
    "overview",
    "forms_brochures",
    "cta"
  ],
  past_papers: [
    "header",
    "year_tabs",
    "question_paper_catalog",
    "cta"
  ],
  student_portal: [
    "header",
    "portal_links",
    "academic_resources",
    "cta"
  ],
  placements: [
    "header",
    "placement_stats",
    "top_pharma_recruiters",
    "process",
    "success_stories",
    "cta"
  ],
  research_projects: [
    "header",
    "ongoing_research",
    "grants_collaborations",
    "cta"
  ],
  research_journal: [
    "header",
    "overview",
    "editorial_board",
    "cta"
  ],
  publications: [
    "header",
    "faculty_papers",
    "patents_published",
    "cta"
  ],
  alumni_network: [
    "header",
    "alumni_directory",
    "testimonials",
    "registration_form",
    "cta"
  ],
  contact: [
    "header",
    "contact_cards",
    "inquiry_form",
    "campus_map",
    "emergency_contacts"
  ],
  careers: [
    "header",
    "job_openings",
    "cv_submission_form",
    "cta"
  ],
  feedback: [
    "header",
    "feedback_form",
    "cta"
  ],
  thank_you: [
    "confirmation_card",
    "explore_links"
  ],
  anti_ragging: [
    "header",
    "policy_content",
    "helpline",
    "cta"
  ],
  grievance_redressal: [
    "header",
    "grievance_content",
    "contact_form"
  ],
  privacy_policy: [
    "header",
    "policy_content"
  ]
};

export function getDefaultPharmacyOrder(pageId: string): string[] {
  if (!pageId) return [];
  const normalized = pageId.toLowerCase().replace(/-/g, "_");
  if (DEFAULT_PHARMACY_LAYOUT_ORDERS[normalized]) {
    return DEFAULT_PHARMACY_LAYOUT_ORDERS[normalized];
  }
  const dashed = pageId.toLowerCase().replace(/_/g, "-");
  if (DEFAULT_PHARMACY_LAYOUT_ORDERS[dashed]) {
    return DEFAULT_PHARMACY_LAYOUT_ORDERS[dashed];
  }
  return [];
}
