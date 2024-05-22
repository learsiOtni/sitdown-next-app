"use client";

import Icon from "@/components/Icon/Icon";
import Card from "@/components/Card/Card";
import { Project } from "@/lib/features/projects/projectsSlice";
import TiptapRender from "../TiptapRender/TiptapRender";
import Link from "next/link";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import { Update } from "@/lib/features/updates/updatesSlice";
import ProfileImage from "../ProfileImage/ProfileImage";
import { formatDate } from "@/util/helper";

type CardProjectProps = {
  data: Project;
  view?: "full";
  enableEdit?: boolean;
};

const CardProject = ({ data, view, enableEdit }: CardProjectProps) => {
  const { id, title, body, teamMembers, user, createdAt } = data;
  return (
    <Card
      key={id}
      className={`${
        view === "full" ? "w-full" : "w-[23%]"
      } min-w-[280px] relative`}
    >
      <div
        className={`p-5 w-full flex flex-col ${view !== "full" && "h-[180px]"}`}
      >
        {view === "full" ? (
          <div className="flex-col-center">
            <div className="w-[65px] h-[65px] relative">
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
      <div className="border-t border-t-[#E6E7E8] p-5 relative flex items-center text-body text-sm">
        {view === "full" ? (
          <>
            <div className="ml-2.5 pl-2.5 flex-center">
              <div className="text-[#707070] w-10 h-10 text-opacity-50 flex-col-center">
                <Icon name="users" size="lg" />
                <p className="text-xs">Members</p>
              </div>

              <div className="ml-2.5 flex-center">
                {teamMembers.map(
                  (member) =>
                    typeof member !== "string" && (
                      <div className="flex-col-center ml-2.5" key={member.id}>
                        <div className="w-[35px] h-[35px] relative">
                          <ProfileImage image={member.image} />
                        </div>
                        <p className="mt-2"></p>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-[#707070] text-opacity-50">
              <Icon name="users" size="lg" />
            </div>

            <div className="w-6 h-6 bg-primary text-center ml-2.5 rounded-full pt-1">
              <p className="text-white text-xs">{teamMembers?.length}</p>
            </div>
          </>
        )}

        {enableEdit && (
          <div className="absolute bottom-[20px] right-[30px] flex items-center justify-center">
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
