"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Update, deleteUpdate } from "@/lib/features/updates/updatesSlice";
import { Project, deleteProject } from "@/lib/features/projects/projectsSlice";
import Icon from "../Icon/Icon";
import { ReduxSlice } from "../CardUpdates/CardUpdate";

type ButtonDeleteProps = {
  data: Update | Project;
  slice: ReduxSlice
};

export default function ButtonDelete({ data, slice}: Readonly<ButtonDeleteProps>) {
  const token = getCookie("authToken");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authUserId = useAppSelector((state) => state.auth.credentials.user.id);

  const handleDelete = () => {
    if (slice === "updates") dispatch(deleteUpdate({ id: data.id, token }));
    if (slice === "projects") dispatch(deleteProject({ id: data.id, token }));
    router.refresh();
    router.replace("/dashboard");
  };

  if (authUserId === data?.user?.id)
    return (
      <div className="ml-5 text-error cursor-pointer opacity-70 hover:opacity-90">
        <Icon name="delete" onClick={handleDelete} />
      </div>
    );
}
