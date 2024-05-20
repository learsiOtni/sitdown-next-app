import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/components/Logo/Logo'
import Image from 'next/image'
import Link from 'next/link'
import Icon, { CustomIcons } from '@/components/Icon/Icon'
import links from './links';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { logout } from '@/lib/features/auth/authSlice';
import { clearErrors, setStatus, toggleModal } from '@/lib/features/updates/updatesSlice';

type Link = {
    id: number;
    title: string;
    url: string;
}

const SideNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const status = useAppSelector( state => state.updates.status)

    const handleLogout = () => {
        dispatch(logout())
        router.push('/login')
    }

    const handleAddUpdate = () => {
        if(status !== "failed" && status !== "idle") dispatch( setStatus("idle"))
        dispatch(clearErrors())
        dispatch(toggleModal())
    }
    
    return (
        <header className="w-28 h-screen flex flex-col items-center fixed">

            <div className="mt-11">
                <Logo width={29} height={50} smallLogo />
            </div>

            <div onClick={handleAddUpdate} className="h-7 mt-20 cursor-pointer hover:text-lg hover:opacity-90">
                <Icon name="add" background size="2xl" />
            </div>
            
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

            <button className="hover:opacity-50" onClick={handleLogout}>Logout</button>

        </header>
    )
}

export default SideNav