import React from "react";
import Heading from "../Components/Heading";
import { WorkComponentData } from "../Data/constant";
import { partnerPlans } from "../Data/PartnerPlans";
import WorkComponent from "../Components/WorkComponent";
import { PartnerCard } from "../Components/PartnerCard";
const Home = () => {
  return (
    <section className="text-white flex flex-col gap-6">
      <header className="flex flex-col gap-8">
        <Heading otherStyles={""}>
          A turn-key approach to continous user discovery
        </Heading>
        <p>You've got a lot to take on, so we take user research your plate</p>
      </header>

      <div className=" flex flex-col gap-6">
        <h2 className="text-3xl font-semibold ">How we work</h2>
        <div className="grid grid-cols-4 gap-5">
          {WorkComponentData.map((work, index) => (
            <WorkComponent
              img={work.img}
              title={work.title}
              description={work.description}
              key={index}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {partnerPlans.map((plan, index) => (
            <PartnerCard
              title={plan.title}
              description={plan.description}
              features={plan.features}
              price={plan.price}
              key={index}
              gradient={plan.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;