
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
        <Card key={id} className="flex items-center justify-between py-2.5 px-5 mt-2.5">
            <div className="flex items-center">
                <Image
                    className="rounded-full"
                    width={65}
                    height={65}
                    src="/noavatar.png"
                    alt="profile image"
                />

                <div className="ml-7">
                    <h6 className="text-title">{name}</h6>
                    <p className="text-body">{role}</p>
                </div>
            </div>

            <div className="flex gap-16 mr-5">
                <div className="w-10 h-10 rounded-full bg-[#FF6565] text-center text-white pt-2">{updates}</div>
                <div className="w-10 h-10 rounded-full bg-primary text-center text-white pt-2">{teams}</div>
                <div className="w-10 h-10 rounded-full bg-[#05E6D7] text-center text-white pt-2">{projects}</div>
            </div>
            {/** Todo, make reusable */}
        </Card>
    )
}

export default CardUser