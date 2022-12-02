import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { IdTokenContext, StylistIdContext } from "../../App";

export const createQueryWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const queryWrapper = ({ children }: { children: ReactElement }) => {
    return (
      <QueryClientProvider client={queryClient}>
        <IdTokenContext.Provider value={""}>
          <StylistIdContext.Provider value={1}>
            {children}
          </StylistIdContext.Provider>
        </IdTokenContext.Provider>
      </QueryClientProvider>
    );
  };

  return { queryClient, queryWrapper };
};
