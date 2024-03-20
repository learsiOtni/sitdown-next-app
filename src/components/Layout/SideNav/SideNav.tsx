"use client"

import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/components/Logo/Logo'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon, { CustomIcons } from '@/components/Icon/Icon'
import links from './links';

import { logout } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';




type Link = {
    id: number;
    title: string;
    url: string;
}

const SideNav = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    }

    return (
        <header className="w-28 h-screen flex flex-col items-center fixed">
            <div className="mt-11">
                <Logo width={29} height={50} smallLogo />
            </div>

            <Icon name="add" iconContainerStyle="w-7 h-7 mt-20" background />

            <nav className="w-5 mt-8">
                <ul>
                    {links.map((link: Link) => (
                        <li 
                            className={
                                `pt-7 transition 
                                ${pathname === link.url ? 'text-primary' : 'text-[#B6B6B6]'}
                                hover:text-primary hover:text-opacity-80`
                            }
                            key={link.id}
                        >
                            <Link href={link.url}>
                                <Icon name={link.title as CustomIcons} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="w-9 h-9 mt-[190px] relative">
                <div className="w-4 h-4 rounded-full bg-brand z-10 absolute left-6 top-[-5px]" />
                <Link href="/profile">
                    <Image
                        className={`rounded-full border hover:opacity-70 ${pathname === "/profile" && 'border-brand'}`}
                        src="/noavatar.png"
                        fill={true}
                        alt="profile image"
                    />
                </Link>
            </div>

            <button onClick={handleLogout}>Logout</button>

        </header>
    )
}

export default SideNav