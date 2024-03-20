
import Image from 'next/image'
import Card from '../Card/Card';
import Text from '@/components/Text/Text';
import Icon from '@/components/Icon/Icon'
import { formatDate } from '@/util/helper';

export type StatusUpdate = {
    id: number,
    user: {
        userId: number,
        firstname: string,
        lastname?: string
    },
    title: string,
    body: string,
    createdAt: string,
    tags: []
}

type Props = {
    data: StatusUpdate;
    view?: "card" | "table"
}

const CardUpdate = ({ data, view }: Props) => {

    let header = <Text tag="p" type="caption-primary" className="mb-4">
        {`${data.user.firstname} ${data.user.lastname && data.user.lastname}`} <Text tag="span" type="body">updated his status</Text> {formatDate( new Date(data.createdAt))}
    </Text>

    let imageSize = 52;
    let cardStyle = "p-5 border flex border-[#E2E5E6]"
    let contentStyle = "";

    if (view === "table") {
        header = <div className="float-right mt-[-10px]">
            <Text tag="p" type="caption-primary">{ formatDate( new Date(data.createdAt))}</Text>
        </div>;

        imageSize = 68;
        contentStyle = contentStyle + " ml-2.5";
    }

    let image = <div className="mr-2.5">
        <Image src="/noavatar.png" width={imageSize} height={imageSize} alt="profile image" className="rounded-full" />
    </div>

    if (view === "card") {
        cardStyle = cardStyle + " w-[32.5%]";
        imageSize = 40;

        header = header = <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
            {image}
            <Text tag="p" type="caption-underline">{data.user.firstname + data.user.lastname}</Text>
        </div>

        <Text tag="p" type="caption-primary" className="">{data.createdAt}</Text>
    </div>
    }


    return (
        <Card key={data.id} className={cardStyle}>
            
            {view !== "card" && image}

            <div className={contentStyle}>
                {header}
                
                <Text tag="h4" type="title">{data.title}</Text>
                <Text tag="p" type="body" className="mt-2.5">{data.body}</Text>

                <div className="flex mt-4">
                    <div className="w-4 h-4 text-primary">
                        <Icon name="tags" />
                    </div>
                    {data.tags.map(tag => (
                        <Text tag="p" type="caption-underline" className="ml-2.5" key={tag}>
                            {tag}
                        </Text>
                    ))}
                </div>

            </div>
        </Card>
    )
}

export default CardUpdate