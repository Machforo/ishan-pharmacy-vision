import CampusLifePage from "@/components/CampusLifePage";

export default function SportsPage() {
  return (
    <CampusLifePage
      sectionKey="sports"
      layout="split"
      breadcrumbs={[{"label":"Campus","href":"/infrastructure"},{"label":"Sports"}]}
      specsGrid="sm:grid-cols-2"
      defaults={{
        title: "Sports",
        subtitle: "Inter-college competitions, annual sports meet, and campus recreational facilities",
      }}
    />
  );
}
