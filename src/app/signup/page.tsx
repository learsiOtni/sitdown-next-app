import Link from "next/link";
import Container from "@/components/Container/Container";
import SignupForm from "@/components/Form/SignupForm/SignupForm";
import Logo from "@/components/Logo/Logo";


export default function Signup() {
  return (
    <Container>
      <section className="flex flex-col items-center w-full md:w-[480px]">
        <Logo />

        <h1 className="text-title mt-8">Sign Up</h1>
        <span className="text-caption mb-2">Please fill up the form:</span>

        <SignupForm />

        <p className="text-body mt-4">
          Already a member?{" "}
          <Link href="/login">
            <span className="underline">Login now!</span>
          </Link>
        </p>
      </section>
    </Container>
  );
}
