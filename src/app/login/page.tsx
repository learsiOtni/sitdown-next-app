import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import Logo from "@/components/Logo/Logo";
import googleLogo from "@/assets/img/google.png";
import LoginForm from "@/components/Form/LoginForm/LoginForm";

const Login = () => {
  return (
    <Container>
      <section className="flex flex-col items-center w-full md:w-[480px]">
        <Logo />

        <button className="mt-[48px] py-2 flex-center border min-w-full rounded shadow-sm">
          <div className="relative w-3 h-3 md:w-[27px] md:h-[27px]">
            <Image src={googleLogo} fill alt="Google logo" />
          </div>
          <p className="pl-2 text-[#4F5761] text-opacity-95 text-sm md:text-lg">
            Login with Google
          </p>
        </button>

        <p className="text-xs text-body py-2">OR</p>

        <LoginForm />

        <p className="mt-4 text-body">
          Not a member?{" "}
          <Link href="/signup">
            <span className="underline">Register now!</span>
          </Link>
        </p>
      </section>
    </Container>
  );
};

export default Login;