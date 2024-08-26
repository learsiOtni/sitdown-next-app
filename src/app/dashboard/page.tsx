import { statistics } from "../../../data";
import Button from "@/components/Button/Button";
import CardProjects from "@/components/CardProjects/CardProjects";
import CardStatistic from "@/components/CardStatistic/CardStatistic";
import Updates from "./Updates";

const Dashboard = () => {
  return (
    <div className="p-2 w-full md:p-11 m:w-full">
      {/* Header */}
      <header className="flex items-center justify-between hidden">
        <h1 className="text-heading">Overview Statistics</h1>

        <Button className="px-5 mr-1 text-xs md:text-base" dropdown>
          Last 30 days
        </Button>
      </header>

      <div className="flex gap-1 mt-2.5 flex-wrap md:gap-4 hidden">
        {statistics.map((statistic) => (
          <CardStatistic key={statistic.id} data={statistic} />
        ))}
      </div>
      {/* End of Header */}

      <div className="mt-10 flex flex-col md:grid md:grid-cols-2 md:gap-4">
        {/* status updates */}
        <div className="md:col-span-1">
          <h1 className="text-heading mb-2.5">Status Updates</h1>
          <div className="max-h-screen overflow-scroll">
            <Updates />
          </div>
        </div>

        {/* projects */}
        <div className="mt-10 md:col-span-1 md:mt-0">
          <div className="mb-2.5 relative">
            <h1 className="text-heading">Projects</h1>

            <div className="absolute bottom-[-3px] right-0">
              <span className="text-caption-underline opacity-80">
                See All Projects
              </span>
              <span className="text-primary text-2xl ml-5">&lt;</span>
              <span className="text-primary text-2xl ml-2.5">&gt;</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <CardProjects className="w-[48.5%]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
