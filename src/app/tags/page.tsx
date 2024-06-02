"use client";

import { useEffect, useRef, useState } from "react";
import { fetchWrapper } from "@/util/fetchWrapper";
import { Update } from "@/lib/features/updates/updatesSlice";
import CardUpdates from "@/components/CardUpdates/CardUpdates";
import Icon from "@/components/Icon/Icon";
import classes from "./style.module.css";

const Tags = () => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<Array<any>>([]);
  const [showLeftIcon, setShowLeftIcon] = useState<boolean>(false);
  const [showRightIcon, setShowRightIcon] = useState<boolean>(true);
  const [updates, setUpdates] = useState<Array<Update>>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchWrapper.get(
        `${process.env.NEXT_PUBLIC_API_URL}tags`
      );
      if (!data.error) setTags(data);
    };

    fetch();
  }, []);


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

    const data = await fetchWrapper.get(`${process.env.NEXT_PUBLIC_API_URL}tags/${id}`)
    if (!data.error) setUpdates(data.updates)
  }

  
  return (
    <div className="w-full p-11">
      <h1 className="text-heading mb-2.5">Tags</h1>

      {/** Tags Heading */}
      <div className="flex-center">
        {showLeftIcon && (
          <span
            className={`mr-1 ${classes.icons}`}
            onClick={(e: any) => handleScroll(e, "left")}
          >
            &lt;
          </span>
        )}

        <div
          className={classes.tagsContainer}
          onScroll={handleScroll}
          ref={tagsRef}
        >
          {tags.length > 0 &&
            tags.map((tag) => (
              <button
                className="p-2.5 flex-center border rounded-lg cursor-pointer hover:bg-slate-200"
                key={tag.id}
                onClick={() => handleClickTag(tag.id)}
              >
                <Icon name="tags" iconContainerStyle="text-primary" size="lg"/>
                <p className="ml-1 text-md text-black">{tag.id}</p>
              </button>
            ))}
        </div>

        {showRightIcon && (
          <span
            className={`ml-1 ${classes.icons}`}
            onClick={(e: any) => handleScroll(e, "right")}
          >
            &gt;
          </span>
        )}
      </div>
      {/** End of Tags Heading */}

      <div className="my-5">
        
        <div className="flex-col-center gap-3">
          <CardUpdates data={updates} view="table"/>
        </div>
      </div>
    </div>
  );
};

export default Tags;
