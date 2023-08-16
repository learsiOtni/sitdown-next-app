

import Text from '@/components/Text/Text';
import Icon from '@/components/Icon/Icon'
import Card from '@/components/Card/Card'

type Project = {
    id: number,
    title: string,
    body: string,
    user: {
        userId: number,
        name: string
    },
    createdAt: string,
    teamMembers: string[],
    editable: boolean
}

type Props = {
    data: Project,
    className?: string 
}

const CardProject = (props: Props) => {

    const { id, title, body, editable } = props.data;

    return (
        <Card key={id} className={props.className}>

            <div className="p-5">
                <Text tag="h2" type="title">{title}</Text>
                <Text tag="p" type="body" className="mt-4">{body}</Text>
            </div>

            <div className="border-t border-t-[#E6E7E8] p-5 flex relative items-center">
                <div className="text-[#707070] w-6 h-5 text-opacity-50">
                    <Icon name="users" />
                </div>

                <div className="w-6 h-6 bg-primary text-center ml-2.5 rounded-full pt-1">
                    <p className="text-white text-xs">2</p>
                </div>

                {editable && <div className="w-4 h-4 text-[#707070] absolute right-5">
                    <Icon name="edit" />
                </div>}
            </div>
        </Card>
    )
}

export default CardProject