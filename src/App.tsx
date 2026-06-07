import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect, Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: any, errorInfo: any) { console.error("Uncaught error:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-navy text-white rounded-lg"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const About = lazy(() => import("./pages/About"));
const PrincipalMessage = lazy(() => import("./pages/PrincipalMessage"));
const MissionVision = lazy(() => import("./pages/MissionVision"));
const Approvals = lazy(() => import("./pages/Approvals"));
const MandatoryDisclosure = lazy(() => import("./pages/MandatoryDisclosure"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const FAQs = lazy(() => import("./pages/FAQs"));

const DynamicCourse = lazy(() => import("./pages/DynamicCourse"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const CertificatePrograms = lazy(() => import("./pages/CertificatePrograms"));

const Faculty = lazy(() => import("./pages/Faculty"));
const VisitingFaculty = lazy(() => import("./pages/VisitingFaculty"));

const PharmaceuticalChemistry = lazy(() => import("./pages/PharmaceuticalChemistry"));
const Pharmaceutics = lazy(() => import("./pages/Pharmaceutics"));
const Pharmacognosy = lazy(() => import("./pages/Pharmacognosy"));
const PharmacyPractice = lazy(() => import("./pages/PharmacyPractice"));
const HumanAnatomy = lazy(() => import("./pages/HumanAnatomy"));
const Pharmacology = lazy(() => import("./pages/Pharmacology"));
const HerbalGarden = lazy(() => import("./pages/HerbalGarden"));
const MachineRoom = lazy(() => import("./pages/MachineRoom"));
const MuseumComputerLab = lazy(() => import("./pages/MuseumComputerLab"));

const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const Library = lazy(() => import("./pages/Library"));
const Hostel = lazy(() => import("./pages/Hostel"));
const AuditoriumSports = lazy(() => import("./pages/AuditoriumSports"));

const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const EventsCalendar = lazy(() => import("./pages/EventsCalendar"));
const PhotoGallery = lazy(() => import("./pages/PhotoGallery"));
const VideoGallery = lazy(() => import("./pages/VideoGallery"));
const PressCoverage = lazy(() => import("./pages/PressCoverage"));
const GuestLectures = lazy(() => import("./pages/GuestLectures"));
const IndustrialVisits = lazy(() => import("./pages/IndustrialVisits"));

const Downloads = lazy(() => import("./pages/Downloads"));
const PastPapers = lazy(() => import("./pages/PastPapers"));
const FeePayment = lazy(() => import("./pages/FeePayment"));
const StudentPortal = lazy(() => import("./pages/StudentPortal"));

const Publications = lazy(() => import("./pages/Publications"));
const ResearchProjects = lazy(() => import("./pages/ResearchProjects"));
const AlumniNetwork = lazy(() => import("./pages/AlumniNetwork"));
const Placements = lazy(() => import("./pages/Placements"));

const Contact = lazy(() => import("./pages/Contact"));
const Feedback = lazy(() => import("./pages/Feedback"));
const Careers = lazy(() => import("./pages/Careers"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const Consultation = lazy(() => import("./pages/Consultation"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-[hsl(var(--gold))] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Intercepts clicks to course/admissions pages for the pop-under consultation flow
import { useNavigate } from "react-router-dom";
function GlobalClickInterceptor() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Check if it's a course or admissions link
      if (href.startsWith('/courses/') || href === '/admissions' || href === '/admissions-education') {
        // Prevent default navigation
        e.preventDefault();
        
        // Open the target (Course/Admissions) in a NEW tab
        window.open(href, '_blank');
        
        // Redirect the CURRENT tab to the consultation page
        navigate('/consultation');
      }
    };

    // Use capture phase to intercept before normal link behavior
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [navigate]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <GlobalClickInterceptor />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
            {/* 301 Redirects Requested */}
            <Route path="/code-of-conduct" element={<Navigate to="/code-of-conduct-discipline" replace />} />
            <Route path="/discipline" element={<Navigate to="/code-of-conduct-discipline" replace />} />
            <Route path="/museum" element={<Navigate to="/museum-computer-lab" replace />} />
            <Route path="/computer-lab" element={<Navigate to="/museum-computer-lab" replace />} />
            <Route path="/join-us" element={<Navigate to="/careers" replace />} />

            <Route path="/" element={<Index />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/principal-message" element={<PrincipalMessage />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/code-of-conduct-discipline" element={<CodeOfConduct />} />
            <Route path="/faqs" element={<FAQs />} />

            {/* Courses */}
            <Route path="/courses/:courseId" element={<DynamicCourse />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/certificate-programs" element={<CertificatePrograms />} />
            <Route path="/consultation" element={<Consultation />} />

            {/* Faculty */}
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/visiting-faculty" element={<VisitingFaculty />} />

            {/* 10 Labs */}
            <Route path="/pharmaceutical-chemistry" element={<PharmaceuticalChemistry />} />
            <Route path="/pharmaceutics" element={<Pharmaceutics />} />
            <Route path="/pharmacognosy" element={<Pharmacognosy />} />
            <Route path="/pharmacy-practice" element={<PharmacyPractice />} />
            <Route path="/human-anatomy" element={<HumanAnatomy />} />
            <Route path="/pharmacology" element={<Pharmacology />} />
            <Route path="/herbal-garden" element={<HerbalGarden />} />
            <Route path="/machine-room" element={<MachineRoom />} />
            <Route path="/museum-computer-lab" element={<MuseumComputerLab />} />

            {/* Campus Facilities */}
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/library" element={<Library />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/auditorium-sports" element={<AuditoriumSports />} />

            {/* Learning and Gallery */}
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/events-calendar" element={<EventsCalendar />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/press-coverage" element={<PressCoverage />} />
            <Route path="/guest-lectures" element={<GuestLectures />} />
            <Route path="/industrial-visits" element={<IndustrialVisits />} />

            {/* Student Zone */}
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/past-papers" element={<PastPapers />} />
            <Route path="/fee-payment" element={<FeePayment />} />
            <Route path="/student-portal" element={<StudentPortal />} />

            {/* Research & Placements */}
            <Route path="/publications" element={<Publications />} />
            <Route path="/research-projects" element={<ResearchProjects />} />
            <Route path="/alumni-network" element={<AlumniNetwork />} />
            <Route path="/placements" element={<Placements />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/thank-you" element={<ThankYou />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
