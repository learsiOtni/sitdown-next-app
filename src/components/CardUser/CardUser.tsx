
import Image from "next/image"
import Card from "@/components/Card/Card"

type User = {
    id: number,
    name: string,
    role: string,
    updates: number,
    teams: number,
    projects: number,
  }
  
  type CardUserProps = {
    data: User
  }

const CardUser = ({data}: CardUserProps) => {
    const { id, name, role, updates, teams, projects } = data;

    return (
      <Card
        key={id}
        className="flex items-center justify-between py-2.5 px-5 mt-2.5"
      >
        <div className="flex">
          <div className="relative w-[40px] h-[40px] md:w-[65px] md:h-[65px]">
            <Image
              className="rounded-full"
              fill
              src="/noavatar.png"
              alt="profile image"
            />
          </div>

          <div className="ml-2">
            <h6 className="text-title">{name}</h6>
            <p className="text-body">{role}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:flex-row md:gap-16 md:mr-5">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-[#FF6565] flex-center text-xs text-white md:w-10 md:h-10 md:text-base">
              {updates}
            </div>
            <p className="text-caption-2 ml-1 md:hidden">Updates</p>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex-center text-xs text-white md:w-10 md:h-10 md:text-base">
              {teams}
            </div>
            <p className="text-caption-2 ml-1 md:hidden">Teams</p>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-[#05E6D7] flex-center text-xs text-white md:w-10 md:h-10 md:text-base">
              {projects}
            </div>
            <p className="text-caption-2 ml-1 md:hidden">Projects</p>
          </div>
        </div>
        {/** Todo, make reusable */}
      </Card>
    );
}

export default CardUser