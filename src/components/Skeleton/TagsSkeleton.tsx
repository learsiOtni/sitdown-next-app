import Icon from "../Icon/Icon";

const CardSkeleton = () => (
  <div className="p-2.5 flex-center border rounded-lg">
    <div className="w-4 h-4 text-primary">
      <Icon name="tags" />
    </div>
    <div className="ml-1 w-[44px] h-[24px] bg-slate-200" />
  </div>
);

export default function TagsSkeleton() {
  return (
    <div className="flex gap-1 animate-pulse overflow-hidden">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
