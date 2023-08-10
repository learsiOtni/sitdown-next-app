import React from 'react'
import Image from 'next/image'
import logo from '../../assets/img/logo.png'
import smallLogo from '../../assets/img/small-logo.png'

type Props = {
    width: number,
    height: number,
    smallLogo?: boolean
}

const Logo = (props: Props) => {

    let imageSrc = logo;
    props.smallLogo && (imageSrc = smallLogo);
    
    return (
        <Image
            src={imageSrc}
            width={props.width}
            height={props.height}
            alt="Sitdown app logo"
        />
    )
}

export default Logo
