import React, { useState } from 'react'
import { Stack, Tab, Tabs } from '@mui/material'
import { useMediaQuery } from "@mui/material";
import TabPanel from './product/TabPanel';

interface TabsInterface {
  tab: string[];
  tabPanel: React.ReactChild[];
}

const TabsSection: React.FC<TabsInterface> = ({ tab, tabPanel }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_, newValue: number) => {
    setTabIndex(newValue);
  };

  //@ts-ignore
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Stack width="100%" gap="24px" sx={{ borderRadius: "12px"}}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        aria-label="tabs"
        orientation={isXs ? "vertical" : "horizontal"}
        sx={{
          bgcolor: "var(--grey)",
          borderRadius: "12px",
          width: '100%',
        }}
      >
        {tab.map((topic: string) => (
          <Tab
            sx={{
              textTransform: "none",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "500",
              color: "var(--low-emphasis)",
              "&:hover": {
                color: "var(--primary)",
                backgroundColor: "inherit",
              },
              "&.Mui-selected": {
                color: "var(--bright)",
                fontWeight: "500",
                backgroundColor: "var(--primary)",
                borderRadius: "8px",
                fontSize: "16px",
                padding: "6px 18px",
                m: "16px",
              },
            }}
            label={topic}
          />
        ))}
      </Tabs>

      {tabPanel.map((content, key) => (
        <TabPanel width="100%" value={tabIndex} index={key}>
          {content}
        </TabPanel>
      ))}
    </Stack>
  )
}

export default TabsSection;
