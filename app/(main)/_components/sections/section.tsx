import { FC } from "react";
import Categories from "./categories";
import SectionSlider from "./slider";

interface SectionProps {
  component: React.ReactNode;
  header: string;
}

const Section: FC<SectionProps> = ({ component, header }) => {
  return (
    <>
      <Categories header={header} />
      <div className="py-4">
        <SectionSlider component={component} />
      </div>
    </>
  );
};

export default Section;
