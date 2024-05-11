import Container from "@/components/Container/Container";
import SignupForm from "@/components/Form/SignupForm/SignupForm";
import Logo from "@/components/Logo/Logo";
import Text from "@/components/Text/Text";
import Link from "next/link";

export default function Signup() {
  return (
    <Container>
      <section className="flex flex-col items-center w-[480px]">
        <Logo width={318} height={85} />
        <Text tag="h1" type="title" className="mt-8">Sign up</Text>
        <Text tag="span" type="caption" className="mb-2">Please fill up the form:</Text>

        <SignupForm />

        <p className="mt-4 text-body text-sm">
          Already a member?{" "}
          <Link href="/login">
            <span className="underline">Login now!</span>
          </Link>
        </p>
      </section>
    </Container>
  );
}
