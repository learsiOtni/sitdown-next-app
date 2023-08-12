"use client";

import Image from 'next/image'

import Logo from '@/components/Logo/Logo';
import googleLogo from "@/assets/img/google.png";
import Container from "@/components/Container/Container";

const Login = () => {
  return (
    <Container>
        <section className="flex flex-col items-center w-[480px]">

            <Logo 
                width={318}
                height={85}
            />

            <button className="mt-[48px] flex py-2 items-center justify-center border min-w-full rounded shadow-sm">
                <Image 
                    src={googleLogo}
                    width={27}
                    height={27}
                    alt="Google logo"
                />
                <p className="pl-2 text-[#4F5761] text-opacity-95 text-lg">Login with Google</p>
            </button>

            <p className="text-body py-2">OR</p>

            <form 
                className="flex flex-col min-w-full"
                onSubmit={ () => {}}
            >
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className="p-2 mb-3 border rounded text-lg bg-[#FBFBFD]"
                />

                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    className="p-2 border rounder text-lg bg-[#FBFBFD]"
                />

                <p className="self-end underline text-body text-sm mb-4 mt-1 ">Forgotten Password?</p>

                <button 
                    type="submit" 
                    className="border rounded py-2 text-white bg-primary text-xl"
                >
                    Login
                </button>
            </form>

            <p 
                className="mt-4 text-body text-sm"
            >
                Not a member? <span className="underline">Register now!</span>
            </p>
        </section>
    </Container>
  )
}

export default Login;

