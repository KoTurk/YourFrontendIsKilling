import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import {Average} from "@/app/dashboard/Average";
import {Host} from "@/app/dashboard/Host";
import {PerVisit} from "@/app/dashboard/PerVisit";
import {Comparison} from "@/app/dashboard/Comparison";
import {Introduction} from "@/app/dashboard/Introduction";
import {TotalSite} from "@/app/dashboard/TotalSite";

const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function Home() {
  return (
      <MantineProvider theme={theme}>
        <div>
            <Average />
            <Host />
            <PerVisit />
            <Comparison />
            <Introduction />
            <TotalSite />
        </div>
      </MantineProvider>
  );
}