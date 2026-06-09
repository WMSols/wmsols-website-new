import { servicesDetailedData } from "@/data/services";

export function getServiceBySlug(slug: string) {
  return servicesDetailedData.find(
    (service) => service.id === slug
  );
}