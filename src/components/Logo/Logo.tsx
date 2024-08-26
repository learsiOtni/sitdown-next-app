import React from 'react'
import Image from 'next/image'
import logo from '@/assets/img/logo.png'
import smallLogoImg from '@/assets/img/small-logo.png'

type LogoProps = {
    smallLogo?: boolean
}

const Logo = ({smallLogo}: LogoProps) => {

    let imageSrc = logo;
    smallLogo && (imageSrc = smallLogoImg);
    
    return (
        <Image
            src={imageSrc}
            style={{
                width: `${smallLogo ? "100%" : "70%"}`,
                height: "auto",
                minWidth: `${smallLogo ? "15px" : "150px"}`,
                maxWidth: `${smallLogo ? "30px" : "318px"}`
            }}
            sizes="(max-width: 768px) 100vw, 30vw"
            alt="Sitdown app logo"
        />
    )
    
}

export default Logo
