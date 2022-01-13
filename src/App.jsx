import { useState } from "react";

import GlobalStyle from "./styles/Global";
import { OutInformations, SwitchArea } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import NormalTheme from "./styles/theme/NormalTheme";
import ReverseTheme from "./styles/theme/ReverseTheme";

import Card1 from "./components/Card1";
import Switch from "react-switch";

import { useThemeValueContext } from "./context/ThemeContext";
import { usePlanContext } from "./context/PlanContext";

const App = () => {
  const { theme, setTheme } = useThemeValueContext();
  const { plan, setPlan } = usePlanContext();

  const toggleThemeAndPlan = () => {
    setTheme(theme.tittle === "NormalTheme" ? ReverseTheme : NormalTheme);
    if (plan === "monthly") setPlan("anually");
    else setPlan("monthly");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <OutInformations>
          <h1>OUR PRICES</h1>

          <SwitchArea>
            <h2>Monthly</h2>
            <Switch
              onChange={() => toggleThemeAndPlan()}
              checked={theme.tittle === "NormalTheme"}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor="#9B7EDE"
              offColor="#d1d1d1"
              onHandleColor="#fff"
              offHandleColor="#9B7EDE"
            />
            <h2>Anually</h2>
          </SwitchArea>
        </OutInformations>

        <Card1 />
      </ThemeProvider>
    </div>
  );
};

export default App;
