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

function pageFromLocation(): AppPage {
  const hash = window.location.hash.replace(/^#/, "").toLowerCase();
  if (hash === "explore") {
    return "explore";
  }
  const { pathname } = window.location;
  if (pathname === "/explore" || pathname.startsWith("/explore/")) {
    return "explore";
  }
  return "home";
}

function normalizeExploreUrl() {
  if (window.location.pathname !== "/") {
    window.history.replaceState(null, "", `/#explore`);
    return;
  }
  if (window.location.hash !== "#explore") {
    window.location.hash = "explore";
  }
}

function normalizeHomeUrl() {
  if (window.location.pathname !== "/" || window.location.hash) {
    window.history.replaceState(null, "", "/");
  }
}

type AppNavigationContextValue = {
  page: AppPage;
  navigate: (page: AppPage) => void;
};

const AppNavigationContext = createContext<AppNavigationContextValue | null>(
  null,
);

export function AppNavigationProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<AppPage>(() => pageFromLocation());

  useEffect(() => {
    const sync = () => setPage(pageFromLocation());
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  useEffect(() => {
    if (page === "explore") {
      normalizeExploreUrl();
      return;
    }
    normalizeHomeUrl();
  }, [page]);

  const navigate = useCallback((next: AppPage) => {
    if (next === "explore") {
      if (window.location.hash !== "#explore") {
        window.location.hash = "explore";
      } else if (window.location.pathname !== "/") {
        window.history.replaceState(null, "", "/#explore");
      }
    } else if (window.location.hash) {
      window.location.hash = "";
    } else if (window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
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
