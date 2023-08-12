import Logo from '@/components/Logo/Logo'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import links from './links';

type Link = {
    id: number;
    title: string;
    url: string;
    icon: IconDefinition;
    className?: string;
}

const SideNav = () => {
  return (
    <header className="w-28 h-screen flex flex-col items-center fixed">
        <div className="mt-11">
            <Logo width={29} height={50} smallLogo/>
        </div>

        <div className="w-7 h-7 mt-20">
            <FontAwesomeIcon className="text-brand" icon={faPlusCircle} />
        </div>

        <nav className="w-5 mt-8">
            <ul>
                { links.map( (link: Link) => (
                    <li className="text-[#B6B6B6] pt-7" key={link.id}>
                        <Link href={link.url}>
                            <FontAwesomeIcon className={link.className} icon={link.icon} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        
        <div className="w-9 h-9 mt-[190px] relative">
            <div className="w-4 h-4 rounded-full bg-brand z-10 absolute left-6 top-[-5px]" />
            <Image 
                className="rounded-full border"
                src="/noavatar.png"
                fill={true}
                alt="profile image"
            />
        </div>

    </header>
  )
}

export default SideNav