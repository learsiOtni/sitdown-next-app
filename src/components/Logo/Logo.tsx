import React from 'react'
import Image from 'next/image'
import logo from '@/assets/img/logo.png'
import smallLogoImg from '@/assets/img/small-logo.png'

type LogoProps = {
    width: number,
    height: number,
    smallLogo?: boolean
}

const Logo = ({width, height, smallLogo}: LogoProps) => {

    let imageSrc = logo;
    smallLogo && (imageSrc = smallLogoImg);
    
    return (
        <Image
            src={imageSrc}
            width={width}
            height={height}
            alt="Sitdown app logo"
        />
    )
}

export default Logo
