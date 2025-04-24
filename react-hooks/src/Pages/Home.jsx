import React from "react";
import Heading from "../Components/Heading";
import { WorkComponentData } from "../Data/constant";
import { partnerPlans } from "../Data/PartnerPlans";
import WorkComponent from "../Components/WorkComponent";
import { PartnerCard } from "../Components/PartnerCard";

const Home = () => {
  return (
    <section className="text-white px-4 py-10 flex flex-col gap-12 max-w-7xl mx-auto">
      {/* ===== Header Section ===== */}
      <header className="flex flex-col gap-4 text-center sm:text-left">
        <Heading>
          A turn-key approach to continuous user discovery
        </Heading>
        <p className="text-gray-300 text-lg max-w-2xl">
          You've got a lot to take on, so we take user research off your plate.
        </p>
      </header>

      {/* ===== How We Work Section ===== */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">How we work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {WorkComponentData.map((work, index) => (
            <WorkComponent
              key={index}
              img={work.img}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </section>

      {/* ===== Partner Plans Section ===== */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Partner Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerPlans.map((plan, index) => (
            <PartnerCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              price={plan.price}
              gradient={plan.gradient}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
