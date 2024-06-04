import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import ProfileImage from "../ProfileImage/ProfileImage";

const CardSkeleton = ({ view }: { view?: "table" }) => (
  <Card className="p-5 border border-[#E2E5E6] relative flex">
    {view === "table" ? (
      <div className="mr-5 relative min-w-[65px] w-[65px] h-[65px]">
        <ProfileImage />
      </div>
    ) : (
      <div className="mr-2.5 relative min-w-[35px] w-[35px] h-[35px]">
        <ProfileImage />
      </div>
    )}

    <div className="min-w-0 w-full">
      {view === "table" ? (
        <div className="flex justify-between">
          <div className="w-[40%] h-[27.5px] bg-slate-200" />
          <div className="w-[80.3px] h-[16.5px] bg-primary" />
        </div>
      ) : (
        <>
          {/** Name / Date */}
          <div className="flex mt-2 mb-4">
            <div className="w-[80.3px] h-[16.5px] bg-primary" />
            <div className="ml-2.5 w-[118px] h-[16.5px] bg-slate-200" />
            <div className="ml-2.5 w-[80.3px] h-[16.5px] bg-primary" />
          </div>

          {/** Title */}
          <div className="w-[40%] h-[27.5px] bg-slate-200" />
        </>
      )}

      {/** body */}
      <div className="pt-2.5">
        <div className="h-[26px] bg-slate-200" />
        <div className="w-[75%] h-[26px] bg-slate-200 mt-2.5" />
      </div>

      {/** Tags */}
      <div className="flex items-center mt-4">
        <div className="w-4 h-4 text-primary">
          <Icon name="tags" />
        </div>

        <div className="w-[46px] h-[15px] bg-slate-200 ml-2.5" />
        <div className="w-[40px] h-[15px] bg-slate-200 ml-2.5" />
        <div className="w-[42px] h-[15px] bg-slate-200 ml-2.5" />
      </div>
    </div>
  </Card>
);

export const UpdatesPageSkeleton = () => (
  <div className="animate-pulse">
    <div className="mt-6">
      {/** Divider */}
      <div className="flex-center">
        <div className="w-[84px] h-[20px] bg-slate-200" />
        <div className="ml-2.5 w-full h-1 bg-slate-200" />
      </div>

      <div className="mt-2.5 flex flex-col gap-3">
        <CardSkeleton view="table" />
        <CardSkeleton view="table" />
      </div>
    </div>

    <div className="mt-6">
      <div className="flex-center">
        <div className="w-[84px] h-[20px] bg-slate-200" />
        <div className="ml-2.5 w-full h-1 bg-slate-200" />
      </div>

      <div className="mt-2.5 flex flex-col gap-3">
        <CardSkeleton view="table" />
        <CardSkeleton view="table" />
      </div>
    </div>
  </div>
);

export default function UpdatesSkeleton() {
  return (
    <div className="animate-pulse">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
