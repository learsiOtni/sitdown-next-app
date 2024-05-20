'use client'
import Image from 'next/image'
import Card from '../Card/Card';
import Text from '@/components/Text/Text';
import Icon from '@/components/Icon/Icon'
import { formatDate } from '@/util/helper';
import { Update } from '@/lib/features/updates/updatesSlice';
import Link from 'next/link';
import TiptapRender from '../TiptapRender/TiptapRender';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import Tiptap from '../Tiptap/Tiptap';

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
      <Text tag="h4" type="title">
        {title}
      </Text>
    </Link>
  );
};

const Tags = ({tags, updateId}: {tags: String[], updateId:string}) => (
  <div className="flex items-center mt-4">
    <div className="w-4 h-4 text-primary">
      <Icon name="tags" />
    </div>
    {tags &&
      tags.map((tag) => (
        <p className="ml-2.5 underline text-black text-sm" key={`${updateId}-${tag}`}>
          {tag}
        </p>
      ))}
  </div>
);

const ProfileImage = () => <Image
  src="/noavatar.png"
  fill
  alt="profile image"
  className="rounded-full"
/>

const CardView = ({ data }: { data: Update }) => {
  //w-[32.5%]
  return (
    <>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="min-w-[40px] w-[40px] h-[40px] relative mr-2.5">
              <ProfileImage />
            </div>

            <p className="text-black capitalize text-sm underline">
              {`${data.user.firstname} ${data.user.lastname}`}
            </p>
          </div>

          <Text tag="p" type="caption-primary">
            {formatDate(new Date(data.createdAt))}
          </Text>
        </div>

        <Title id={data.id} title={data.title}/>
        <TiptapRender content={data.body} className="max-h-16 overflow-scroll"/>
        <Tags tags={data.tags} updateId={data.id}/>
    </>
  );
};

const TableView = ({ data, fullView }: { data: Update, fullView: boolean }) => {
  return (
    <>
      <div className="min-w-[65px] w-[65px] h-[65px] relative mr-5">
        <ProfileImage />
      </div>

      <div className="min-w-0 w-full">
        <div className="flex justify-between">
          <Title id={data.id} title={data.title}/>

          <Text tag="p" type="caption-primary">
            {formatDate(new Date(data.createdAt))}
          </Text>
        </div>

        <TiptapRender content={data.body} className={`${!fullView && "max-h-16 overflow-scroll"}`}/>
        <Tags tags={data.tags} updateId={data.id}/>

        {data.lastUpdated && <p className="text-xs text-body mt-10">Last Updated: {formatDate(new Date(data.lastUpdated))}</p>}
      </div>
    </>
  );
};

const DefaultView = ({ data }: { data: Update }) => {
  return (
    <>
      <div className="min-w-[35px] w-[35px] h-[35px] relative mr-2.5">
        <ProfileImage />
      </div>

      <div className="min-w-0 w-full">
        <Text tag="p" type="caption-primary" className="mt-2 mb-4">
          <Text tag="span" type="caption-primary" className="capitalize">{`${data.user?.firstname} ${data.user?.lastname}`}{" "}</Text>
          <Text tag="span" type="body">
            updated his status
          </Text>{" "}
          {formatDate(new Date(data.createdAt))}
        </Text>

        <Title id={data.id} title={data.title}/>
        <TiptapRender content={data.body} className="max-h-16 overflow-scroll"/>
        <Tags tags={data.tags} updateId={data.id}/>
      </div>
    </>
  );
};

const CardUpdate = ({ data, view, enableEdit }: CardUpdateProps) => {

  let content = <DefaultView data={data} />;
  if (view === "table" || view === "full") content = <TableView data={data} fullView={view === "full" ? true : false}/>;
  else if (view === "card") content = <CardView data={data} />; 

  return (
    <Card
      className={`p-5 border border-[#E2E5E6] relative ${
        view !== "card" ? "flex" : "w-[32%]"
      }`}
    >
      {content}

      {enableEdit && (
        <div className="absolute bottom-[20px] right-[30px] flex items-center justify-center">
          <ButtonEdit data={data} slice="updates" />
          <ButtonDelete data={data} slice="updates"/>
        </div>
      )}
    </Card>
  );
};

export default CardUpdate;