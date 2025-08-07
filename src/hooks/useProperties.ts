import useSWR from "swr";

const fetcher = (url: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("../utils/sampleProperties").sampleProperties);
    }, 1500); // Simulate network delay
  });

export const useProperties = () => {
  const { data, error, isLoading } = useSWR("/api/properties", fetcher);
  return { data, error, isLoading };
};
