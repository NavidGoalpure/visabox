import { useLocale } from "Hooks/useLocale";
import { ThemeProvider } from "styled-components";
import "../Styles/global.css";
import { LanguageDirection, Languages } from "Interfaces";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactElement, ReactNode, useContext, useState } from "react";
import ErrorBoundary from "Components/errorBoundary";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeContext } from "Contexts/ThemeContext";

const AllTheProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const { locale } = useLocale();
  const { theme } = useContext(ThemeContext);
  //
  return (
    <>
      <ThemeProvider
        theme={{
          mode: theme,
          languageDirection:
            locale === Languages.fa
              ? LanguageDirection.RTL
              : LanguageDirection.LTR,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>{children}</ErrorBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default AllTheProviders;
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
