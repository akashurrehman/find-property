import useSWR from "swr";

const fetcher = async () => {
  const mod = await import("@/src/utils/sampleProperties");
  return mod.sampleProperties;
};


export const useProperties = () => {
  const { data, error, isLoading } = useSWR("/api/properties", fetcher);
  return { data, error, isLoading };
};
