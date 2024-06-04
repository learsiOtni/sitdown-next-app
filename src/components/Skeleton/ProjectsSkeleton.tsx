import Card from "../Card/Card";
import Icon from "../Icon/Icon";

export default function ProjectsSkeleton({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <>
      {[1,2,3,4,5,6].map((x) => (
        <Card className={`${className} min-w-[280px] relative animate-pulse`} key={x}>
          <div className="p-5 w-full flex flex-col">
            <div className="w-[40%] h-[28px] bg-slate-200" />

            <div className="pt-2.5">
              <div className="h-[17px] bg-slate-200" />
              <div className="h-[17px] bg-slate-200 mt-2" />
              <div className="h-[17px] bg-slate-200 mt-2" />
              <div className="h-[17px] bg-slate-200 mt-2" />
            </div>
          </div>

          <div className="border-t border-t-[#E6E7E8] p-5 relative flex items-center text-body text-sm">
            <div className="text-[#707070] text-opacity-50">
              <Icon name="users" size="lg" />
            </div>

            <div className="w-6 h-6 bg-primary text-center ml-2.5 rounded-full pt-1" />
          </div>
        </Card>
      ))}
    </>
  );
}
