import Container from "@/components/Container/Container";
import SignupForm from "@/components/Form/SignupForm/SignupForm";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";

export default function Signup() {
  return (
    <Container>
      <section className="flex flex-col items-center w-[480px]">
        <Logo width={318} height={85} />

        <h1 className="text-title mt-8">Sign Up</h1>
        <span className="text-caption mb-2">Please fill up the form:</span>

        <SignupForm />

        <p className="text-body text-sm mt-4">
          Already a member?{" "}
          <Link href="/login">
            <span className="underline">Login now!</span>
          </Link>
        </p>
      </section>
    </Container>
  );
}
