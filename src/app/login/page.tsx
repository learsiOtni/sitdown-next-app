import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import googleLogo from "@/assets/img/google.png";
import Container from "@/components/Container/Container";
import Link from "next/link";
import LoginForm from "@/components/Form/LoginForm/LoginForm";

const Login = () => {
  return (
    <Container>
      <section className="flex flex-col items-center w-[480px]">
        <Logo width={318} height={85} />

        <button className="mt-[48px] flex py-2 items-center justify-center border min-w-full rounded shadow-sm">
          <Image src={googleLogo} width={27} height={27} alt="Google logo" />
          <p className="pl-2 text-[#4F5761] text-opacity-95 text-lg">
            Login with Google
          </p>
        </button>

        <p className="text-body py-2">OR</p>

        <LoginForm />

        <p className="mt-4 text-body text-sm">
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