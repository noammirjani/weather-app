import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000, // 5 minutes
      cacheTime: 15 * 60 * 1000, // 10 minutes
      refetch: false,
    },
  },
});

function FetchProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default FetchProvider;
