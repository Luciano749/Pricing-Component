import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const PlanContext = createContext();

export default function PlanProvider({ children }) {
  const [plan, setPlan] = useLocalStorage("plan", "monthly");

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlanContext() {
  const context = useContext(PlanContext);
  const { plan, setPlan } = context;
  return { plan, setPlan };
}
