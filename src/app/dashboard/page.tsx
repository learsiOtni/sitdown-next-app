import { statistics } from "../../../data";
import Button from "@/components/Button/Button";
import CardProjects from "@/components/CardProjects/CardProjects";
import CardStatistic from "@/components/CardStatistic/CardStatistic";
import CardUpdates from "../../components/CardUpdates/CardUpdates";

const Dashboard = () => {
  return (
    <div className="p-11 w-full">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-heading">Overview Statistics</h1>

        <Button className="px-5 mr-1" dropdown>
          Last 30 days
        </Button>
      </header>

      <div className="flex gap-4 mt-2.5">
        {statistics.map((statistic) => (
          <CardStatistic key={statistic.id} data={statistic} />
        ))}
      </div>
      {/* End of Header */}

      <div className="mt-10 grid grid-cols-2 gap-4">
        {/* status updates */}
        <div className="col-span-1">
          <h1 className="text-heading mb-2.5">Status Updates</h1>

          <CardUpdates />
        </div>

        {/* projects */}
        <div className="col-span-1">
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

          <div className="min-w-[575px] flex flex-wrap gap-4">
            <CardProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
