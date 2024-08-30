"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Update, deleteUpdate, setStatus as setUpdatesStatus } from "@/lib/features/updates/updatesSlice";
import { Project, deleteProject, setStatus as setProjectsStatus } from "@/lib/features/projects/projectsSlice";
import { ReduxSlice } from "../CardUpdates/CardUpdate";
import { setAlertMessage } from "@/lib/features/ui/uiSlice";
import Icon from "../Icon/Icon";

type ButtonDeleteProps = {
  data: Update | Project;
  slice: ReduxSlice
};

export default function ButtonDelete({ data, slice}: Readonly<ButtonDeleteProps>) {
  const token = getCookie("authToken");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authUserId = useAppSelector((state) => state.auth.credentials.user.id);
  const updatesStatus = useAppSelector( state => state.updates.status)
  const projectsStatus = useAppSelector( state => state.projects.status)

  const handleDelete = () => {
    if (slice === "updates") dispatch(deleteUpdate({ id: data.id, token }));
    if (slice === "projects") dispatch(deleteProject({ id: data.id, token }));
  };

  useEffect( () => {
    if (updatesStatus === "deleteSucceeded" || projectsStatus === "deleteSucceeded") {
      if (slice === "updates") {
        dispatch(setUpdatesStatus("idle"));
        dispatch(setAlertMessage("Status update deleted successfully!"));
      }
      if (slice === "projects") {
        dispatch(setProjectsStatus("idle"));
        dispatch(setAlertMessage("Project deleted successfully!"));
      }

      router.refresh();
      router.replace("/dashboard");
    }

    
  }, [updatesStatus, projectsStatus, dispatch, router, slice])

  if (authUserId === data?.user?.id)
    return (
      <div className="ml-3 text-error cursor-pointer opacity-70 hover:opacity-90 md:ml-5">
        <Icon name="delete" onClick={handleDelete} />
      </div>
    );
}
