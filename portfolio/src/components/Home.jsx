import React from "react";
import { Paredox, Contact } from "./homeWork";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">

          <div class="col-lg-12">
            <h1 class="font-weight-light">Home</h1>
            <Tabs orientation="vertical">
              <TabList>
                <Tab>PaRedox</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <div class="jobs">
                <TabPanels>
                  <TabPanel>
                    <Paredox />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
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