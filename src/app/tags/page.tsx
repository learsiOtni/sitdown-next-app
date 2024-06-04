"use client";

import { useRef, useState } from "react";
import { fetchWrapper } from "@/util/fetchWrapper";
import { useAppSelector } from "@/lib/hooks";
import { Update } from "@/lib/features/updates/updatesSlice";
import CardUpdates from "@/components/CardUpdates/CardUpdates";
import Icon from "@/components/Icon/Icon";
import Spinner from "@/components/Spinner/Spinner";
import classes from "./style.module.css";
import TagsSkeleton from "@/components/Skeleton/TagsSkeleton";

const Tags = () => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const [showLeftIcon, setShowLeftIcon] = useState<boolean>(false);
  const [showRightIcon, setShowRightIcon] = useState<boolean>(true);
  const [updates, setUpdates] = useState<Array<Update>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const tags = useAppSelector(state => state.updates.tags);


  const handleScroll = (e: React.UIEvent<HTMLDivElement>, scroll?: "left" | "right") => {
    if (tagsRef.current) {
      const el = tagsRef.current;
      const maxScroll = (el.scrollWidth - el.clientWidth) - 1;

      if (scroll) {
        if (scroll === "left") el.scrollLeft -= 200;
        else el.scrollLeft += 200;      
      }

      const eCurrent = e.currentTarget;
      if (eCurrent.scrollLeft > 0 && !showLeftIcon) setShowLeftIcon(true)
      if (eCurrent.scrollLeft === 0) setShowLeftIcon(false)
      if (eCurrent.scrollLeft >= maxScroll) setShowRightIcon(false)
      if (eCurrent.scrollLeft < maxScroll && !showRightIcon) setShowRightIcon(true)
    }
  };

  const handleClickTag = async (id: string) => {
    setIsLoading(true)
    const data = await fetchWrapper.get(`${process.env.NEXT_PUBLIC_API_URL}tags/${id}`)
    if (!data.error) {
      setUpdates(data.updates)
    }
    setIsLoading(false)
  }
  
  return (
    <div className="w-full p-11">
      <h1 className="text-heading mb-2.5">Tags</h1>

      {/** Tags Heading */}
      {tags.length > 0 ? (
        <div className="flex-center">
          {showLeftIcon && (
            <button
              className={`mr-1 ${classes.icons}`}
              onClick={(e: any) => handleScroll(e, "left")}
            >
              &lt;
            </button>
          )}

          <div
            className={classes.tagsContainer}
            onScroll={handleScroll}
            ref={tagsRef}
          >
            {tags.map((tag) => (
              <button
                className="p-2.5 flex-center border rounded-lg cursor-pointer hover:bg-slate-200"
                key={tag}
                onClick={() => handleClickTag(tag)}
              >
                <Icon name="tags" iconContainerStyle="text-primary" size="lg" />
                <p className="ml-1 text-md text-black">{tag}</p>
              </button>
            ))}
          </div>

          {showRightIcon && (
            <button
              className={`ml-1 ${classes.icons}`}
              onClick={(e: any) => handleScroll(e, "right")}
            >
              &gt;
            </button>
          )}
        </div>
      ) : (
        <TagsSkeleton />
      )}
      {/** End of Tags Heading */}

      <div className="mt-10">
        <div className="flex-col-center gap-3">
          {!isLoading ? (
            <CardUpdates data={updates} view="table"/>
          ) : (
            <Spinner showText/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;
