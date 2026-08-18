import CampusLifePage from "@/components/CampusLifePage";

export default function CulturalActivitiesPage() {
  return (
    <CampusLifePage
      sectionKey="culturalActivities"
      layout="split"
      breadcrumbs={[{"label":"Learning"},{"label":"Cultural Activities"}]}
      specsGrid="sm:grid-cols-2"
      defaults={{
        title: "Cultural Activities",
        subtitle: "Festivals, drama, music, dance, and creative expression on campus",
      }}
    />
  );
}
