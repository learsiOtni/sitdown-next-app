'use client'

import Text from '@/components/Text/Text';
import Icon from '@/components/Icon/Icon'
import Card from '@/components/Card/Card'
import { Project } from '@/lib/features/projects/projectsSlice';
import TiptapRender from '../TiptapRender/TiptapRender';
import Link from 'next/link';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import ButtonEdit from '../ButtonEdit/ButtonEdit';

type CardProjectProps = {
    data: Project,
    view?: "full",
    enableEdit?: boolean
}

const CardProject = ({data, view, enableEdit}: CardProjectProps) => {

    const { id, title, body, teamMembers, updates, user, editable, createdAt} = data;
    console.log(data)
    return (
        <Card key={id} className={`${view === "full" ? "w-full" : "w-[24%]"} min-w-[280px] relative`}>

            <div className={`p-5 w-full ${view !== "full" && "h-[180px]"}`}>
                <Link href={`/projects/${id}`}>
                    <Text tag="h2" type="title">{title}</Text>
                </Link>
                
                <TiptapRender content={body} className="max-h-[90%] overflow-scroll"/>
            </div>

            <div className="border-t border-t-[#E6E7E8] mt-5 p-5 flex relative items-center">
                <div className="text-[#707070] w-6 h-5 text-opacity-50">
                    <Icon name="users" />
                </div>

                <div className="w-6 h-6 bg-primary text-center ml-2.5 rounded-full pt-1">
                    <p className="text-white text-xs">{teamMembers?.length}</p>
                </div>

                {enableEdit && <div className="absolute bottom-[20px] right-[30px] flex items-center justify-center">
                    <ButtonEdit data={data} slice="projects" />
                    <ButtonDelete data={data} slice="projects"/>
                </div>}
            </div>
        </Card>
    )
}

export default CardProject