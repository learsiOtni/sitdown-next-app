"use client";

import { Project } from "@/lib/features/projects/projectsSlice";
import { Update } from "@/lib/features/updates/updatesSlice";
import { formatDate } from "@/util/helper";
import Link from "next/link";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import Card from "@/components/Card/Card";
import Icon from "@/components/Icon/Icon";
import ProfileImage from "../ProfileImage/ProfileImage";
import TiptapRender from "../TiptapRender/TiptapRender";

type CardProjectProps = {
  data: Project;
  view?: "full";
  enableEdit?: boolean;
  className?: string;
};

const CardProject = ({ data, view, enableEdit, className }: CardProjectProps) => {
  const { id, title, body, teamMembers, user, createdAt } = data;
  return (
    <Card
      key={id}
      className={`${className}
      ${view === "full" && "w-full"} 
      min-w-[280px] relative`}
    >
      <div
        className={`p-5 w-full flex flex-col ${view !== "full" && "h-[180px]"}`}
      >
        {view === "full" ? (
          <div className="flex-col-center">
            <div className="w-[45px] h-[45px] relative mb-2.5 md:w-[65px] md:h-[65px]">
              <ProfileImage image={user.image} />
            </div>

            <Link href={`/projects/${id}`}>
              <h2 className="text-title">{title}</h2>
            </Link>
            <p className="text-caption-2">Created {formatDate(createdAt)}</p>
          </div>
        ) : (
          <Link href={`/projects/${id}`}>
            <h2 className="text-title">{title}</h2>
          </Link>
        )}

        <TiptapRender content={body} className="max-h-[90%] overflow-scroll" />
      </div>

      {/** Start of Card Footer */}
      <div className="border-t border-t-[#E6E7E8] p-2.5 flex items-center md:p-5 md:relative">
        {view === "full" ? (
            <div className="ml-2.5 flex-center md:ml-5">
              <div className="text-[#707070] w-10 h-10 text-opacity-50 flex-col-center">
                <Icon name="users" iconContainerStyle="text-xs md:text-base"/>
                <p className="text-[8px] md:text-xs">Members</p>
              </div>

              <div className="flex-center md:ml-2.5 overflow-scroll">
                {teamMembers.map(
                  (member) =>
                    typeof member !== "string" && (
                      <div className="flex-col-center ml-2.5" key={member.id}>
                        <div className="w-[20px] h-[20px] relative md:w-[35px] md:h-[35px]  ">
                          <ProfileImage image={member.image} />
                        </div>
                        <p className="mt-2"></p>
                      </div>
                    )
                )}
              </div>
            </div>
        ) : (
          <>
            <Icon name="users" iconContainerStyle="text-[#707070] text-opacity-50 text-xs md:text-xl"/>

            <div className="ml-1 w-3 h-3 flex-center bg-primary rounded-full md:w-6 md:h-6 md:ml-2.5">
              <p className="text-white text-[8px] md:text-xs">{teamMembers?.length}</p>
            </div>
          </>
        )}

        {enableEdit && (
          <div className="absolute top-[10px] right-[10px] flex-center text-[10px] md:bottom-[20px] md:right-[30px] md:text-base">
            <ButtonEdit data={data as Project & Update} slice="projects" />
            <ButtonDelete data={data} slice="projects" />
          </div>
        )}
      </div>
      {/** End of Card Footer */}
    </Card>
  );
};

export default CardProject;
