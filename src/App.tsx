import { Cleanup, CountdownTimer, DataList, Tabs } from "./components";

const App = () => {
  const tabs = [
    {
      name: "Task 1",
      title: "Stuff",
      component: <Cleanup />,
    },
    {
      name: "Task 2",
      title: "Users",
      component: <DataList />,
    },
    {
      name: "Task 3",
      title: "Countdown Timer",
      component: <CountdownTimer />,
    },
  ];

  return (
    <div className="p-8">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
