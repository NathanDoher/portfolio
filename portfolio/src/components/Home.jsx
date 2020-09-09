import React from "react";
import { Paredox, Overview, Memory, DrumProject, CrewSchedule } from "./homeWork";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="page">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Projects</h1>
            <Tabs orientation="vertical">
              <div class="tabList">
              <TabList >
                <Tab>Overview</Tab>
                <Tab>PaRedox</Tab>
                <Tab>Crew Scheduler</Tab>
                <Tab>Robot Drums</Tab>
                <Tab>Memory Game</Tab>
              </TabList>
              </div>
              <div class="jobs">
                <TabPanels >
                  <TabPanel><Overview /></TabPanel>
                  <TabPanel><Paredox /></TabPanel>
                  <TabPanel><CrewSchedule /></TabPanel>
                  <TabPanel><DrumProject /></TabPanel>
                  <TabPanel><Memory /></TabPanel>
                </TabPanels>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;