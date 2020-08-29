import React from "react";
import { Paredox, Overview, Memory } from "./homeWork";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="page">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Home</h1>
            <Tabs orientation="vertical">
              <div class="tabList">
              <TabList >
                <Tab>Overview</Tab>
                <Tab>PaRedox</Tab>
                <Tab>Memory Game</Tab>
              </TabList>
              </div>
              <div class="jobs">
                <TabPanels >
                  <TabPanel>
                    <Overview />
                  </TabPanel>
                  <TabPanel>
                    <Paredox />
                  </TabPanel>
                  <TabPanel>
                    <Memory />
                  </TabPanel>
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