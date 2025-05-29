import { useState, type ReactNode } from "react";

interface TabsProps {
  tabs: {
    name: string;
    title: string;
    component: ReactNode;
  }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="space-y-5">
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => (
            <div
              key={tab.name}
              aria-current={tabIndex === index ? "page" : undefined}
              onClick={() => setTabIndex(index)}
              className={`${
                tabIndex === index
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium cursor-pointer`}
            >
              {tab.name}
            </div>
          ))}
        </nav>
      </div>
      <h2 className="font-bold text-lg text-blue-500">
        {tabs[tabIndex].title}
      </h2>
      <div>{tabs[tabIndex].component}</div>
    </div>
  );
};

export default Tabs;
