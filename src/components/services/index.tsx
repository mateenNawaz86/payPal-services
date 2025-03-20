import { WebIcon } from "@/assets/svgs/components/web-icon";
import { ServiceCard } from "./service-card";
import { GraphicIcon } from "@/assets/svgs/components/graphic-icon";

export const Services = () => {
  const servicesData = [
    {
      icon: WebIcon,
      heading: "Website Development",
      description: `Maximize the potential of your online presence with our professional web
        development services. We create aesthetically pleasing websites that
        captivate and engage your audience.`,
      link: "",
    },
    {
      icon: GraphicIcon,
      heading: "Website Development",
      description: `Maximize the potential of your online presence with our professional web
        development services. We create aesthetically pleasing websites that
        captivate and engage your audience.`,
      link: "",
    },
  ];
  return (
    <div className="max-w-[90%] m-auto">
      <h1 className="text-2xl font-semibold mb-5 text-center">Our Services</h1>
      <div className="grid grid-cols-3 gap-8">
        {servicesData?.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              icon={item?.icon}
              heading={item?.heading}
              description={item?.description}
              link={item?.link}
            />
          );
        })}
      </div>
    </div>
  );
};
