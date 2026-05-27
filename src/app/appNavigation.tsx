import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AppPage = "home" | "explore";

function pageFromPath(pathname: string): AppPage {
  return pathname === "/explore" || pathname.startsWith("/explore/")
    ? "explore"
    : "home";
}

type AppNavigationContextValue = {
  page: AppPage;
  navigate: (page: AppPage) => void;
};

const AppNavigationContext = createContext<AppNavigationContextValue | null>(
  null,
);

export function AppNavigationProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<AppPage>(() =>
    pageFromPath(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((next: AppPage) => {
    const path = next === "explore" ? "/explore" : "/";
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
    setPage(next);
  }, []);

  const value = useMemo(() => ({ page, navigate }), [page, navigate]);

  return (
    <AppNavigationContext.Provider value={value}>
      {children}
    </AppNavigationContext.Provider>
  );
}

export function useAppNavigation() {
  const ctx = useContext(AppNavigationContext);
  if (!ctx) {
    throw new Error("useAppNavigation must be used within AppNavigationProvider");
  }
  return ctx;
}
