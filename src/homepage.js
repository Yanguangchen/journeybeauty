import React, { Suspense, lazy } from "react";
// import { ElfsightWidget } from "react-elfsight-widget";

// Lazy load components
const SpliceElement = lazy(() => import("./splice"));
const GridContainer = lazy(() => import("./gridContainer"));
const Listings = lazy(() => import("./listings"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const AboutSection = lazy(() => import("./about"));
const Quote = lazy(() => import("./quote"));
const Horizontalbanner = lazy(() => import("./horizontalbanner"));
// const Announcement = lazy(() => import("./announcement"));

// Create a simple loading component
const Loading = () => <div style={{fontFamily: "Monsteratt"}}>Loading...</div>;

function Homepage() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}>
        <Announcement />
      </Suspense> */}

      <Suspense fallback={<Loading />}>
        <SpliceElement />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Quote />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Horizontalbanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <GridContainer />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Listings />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contactparent />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Socials />
      </Suspense>
    </div>
  );
}

export default Homepage;
