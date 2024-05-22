'use client'

import Link from 'next/link';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import Card from '../Card/Card';
import Icon from '@/components/Icon/Icon'
import ProfileImage from '../ProfileImage/ProfileImage';
import TiptapRender from '../TiptapRender/TiptapRender';
import { Update } from '@/lib/features/updates/updatesSlice';
import { formatDate } from '@/util/helper';

export type CardView = "card" | "table" | "full";
export type ReduxSlice = "updates" | "projects";

type CardUpdateProps = {
    data: Update
    view?: CardView
    enableEdit?: boolean
}

const Title = ({ id, title }: { id: string; title: string }) => {
  return (
    <Link href={`/updates/${id}`}>
      <h4 className="text-title">{title}</h4>
    </Link>
  );
};

const tiptapClass = "h-16 max-h-16 overflow-scroll"

const FormattedDate = ({ date }: { date: string }) => (
  <p className="text-caption-primary">{formatDate(date)}</p>
)

const Tags = ({ tags, updateId }: { tags: string[]; updateId: string }) => (
  <div className="flex items-center mt-4">
    <div className="w-4 h-4 text-primary">
      <Icon name="tags" />
    </div>

    {tags?.map((tag) => (
      <p
        key={`${updateId}-${tag}`}
        className="text-caption underline ml-2.5 "
      >
        {tag}
      </p>
    ))}
  </div>
);


const CardView = ({ data }: { data: Update }) => (
  <>
    <div className="flex-between mb-6">
      <div className="flex items-center">
        <div className="min-w-[40px] w-[40px] h-[40px] relative mr-2.5">
          <ProfileImage image={data.user.image} />
        </div>

        <p className="text-caption-underline capitalize">
          {`${data.user.firstname} ${data.user.lastname}`}
        </p>
      </div>

      <FormattedDate date={data.createdAt} />
    </div>

    <Title id={data.id} title={data.title} />
    <TiptapRender
      content={data.body}
      className={tiptapClass}
    />
    <Tags tags={data.tags} updateId={data.id} />
  </>
);

const TableView = ({ data, fullView }: { data: Update, fullView: boolean }) => {
  return (
    <>
      <div className="mr-5 min-w-[65px] w-[65px] h-[65px] relative">
        <ProfileImage image={data.user.image} />
      </div>

      <div className="min-w-0 w-full">
        <div className="flex justify-between">
          <Title id={data.id} title={data.title} />
          <FormattedDate date={data.createdAt} />
        </div>

        <TiptapRender
          content={data.body}
          className={`${!fullView && tiptapClass}`}
        />
        <Tags tags={data.tags} updateId={data.id} />

        {data.lastUpdated && (
          <p className="mt-10 text-body text-xs">
            Last Updated: {formatDate(data.lastUpdated)}
          </p>
        )}
      </div>
    </>
  );
};

const DefaultView = ({ data }: { data: Update }) => {
  return (
    <>
      <div className="mr-2.5 relative min-w-[35px] w-[35px] h-[35px]">
        <ProfileImage image={data.user.image}/>
      </div>

      <div className="min-w-0 w-full">

        <p className="text-caption-primary mt-2 mb-4">
          <span className="capitalize">{`${data.user?.firstname} ${data.user?.lastname} `}</span>
          <span className="text-body">{`updated his status `}</span>
          {formatDate(data.createdAt)}
        </p>

        <Title id={data.id} title={data.title}/>
        <TiptapRender content={data.body} className={tiptapClass}/>
        <Tags tags={data.tags} updateId={data.id}/>
      </div>
    </>
  );
};

const CardUpdate = ({ data, view, enableEdit }: CardUpdateProps) => {

  let content = <DefaultView data={data} />;
  if (view === "table" || view === "full") content = <TableView data={data} fullView={view === "full"}/>;
  else if (view === "card") content = <CardView data={data} />; 

  return (
    <Card
      className={`p-5 border border-[#E2E5E6] relative ${
        view !== "card" ? "flex" : "w-[32%]"
      }`}
    >
      {content}

      {enableEdit && (
        <div className="absolute bottom-[20px] right-[30px] flex-center">
          <ButtonEdit data={data} slice="updates" />
          <ButtonDelete data={data} slice="updates"/>
        </div>
      )}
    </Card>
  );
};

export default CardUpdate;