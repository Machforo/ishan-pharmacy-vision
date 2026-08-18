import CampusLifePage from "@/components/CampusLifePage";

export default function AuditoriumPage() {
  return (
    <CampusLifePage
      sectionKey="auditorium"
      layout="centered"
      breadcrumbs={[{"label":"Campus","href":"/infrastructure"},{"label":"Auditorium"}]}
      specsGrid="sm:grid-cols-3"
      defaults={{
        title: "Auditorium",
        subtitle: "A modern venue for convocations, seminars, and cultural events",
      }}
    />
  );
}
