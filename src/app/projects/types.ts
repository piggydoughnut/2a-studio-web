export type ProjectDetail = {
  id: string;
  title: string;
  detail?: string | React.ReactNode;
  type: string;
  image: string;
};

export const Types = {
  All: "All",
  Commercial: "Commercial",
  Residential: "Residential",
  Educational: "Educational",
};
