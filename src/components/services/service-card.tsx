import Link from "next/link";

export interface ServiceCardProps {
  icon: React.ElementType;
  heading: string;
  description: string;
  link: string;
}

export const ServiceCard = ({
  icon: Icon,
  heading,
  description,
  link,
}: ServiceCardProps) => {
  return (
    <div className="group">
      <Link
        href={link}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-y-3 hover:bg-[#DB0000]"
      >
        <div className="bg-amber-200 min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]  rounded-full flex items-center justify-center">
          <Icon />
        </div>

        <h2 className="text-lg font-medium text-primary group-hover:text-white">
          {heading}
        </h2>
        <p className="text-sm font-normal text-dark group-hover:text-white">
          {description}
        </p>
      </Link>
    </div>
  );
};
