import CampusLifePage from "@/components/CampusLifePage";

export default function ITLabPage() {
  return (
    <CampusLifePage
      sectionKey="itLab"
      layout="centered"
      breadcrumbs={[{"label":"Campus","href":"/infrastructure"},{"label":"Research Lab"}]}
      specsGrid="sm:grid-cols-2 lg:grid-cols-3"
      defaults={{
        title: "Digital Research Lab",
        subtitle: "State-of-the-art computing facilities for research and academic writing",
      }}
    />
  );
}
