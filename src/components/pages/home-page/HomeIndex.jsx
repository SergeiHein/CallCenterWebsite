import React from "react";

import Header from "./Header";
import Feedback from "./Feedback";
import CCS from "./CCS";
import CRM from "./CRM";
import LatestNews from "./LatestNews";
import Customers from "./Customers";
import Newsletter from "./Newsletter";

export default function HomeIndex() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Feedback */}
      <Feedback />
      {/* Call center solutions */}
      <CCS />
      {/* customer relationship management */}
      <CRM />
      {/* Latest news */}
      <LatestNews />
      {/* customers */}
      <Customers />
      {/* newsletter */}
      <Newsletter />
    </>
  );
}
