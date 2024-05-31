import Image from "next/image";

type ProfileImageProps = {
  image?: string;
};

export default function ProfileImage({ image }: Readonly<ProfileImageProps>) {
  return (
    <>
      {image ? (
        <img
          src={image}
          alt="user profile"
          className="rounded-full object-cover w-full h-full m-w-full"
        />
      ) : (
        <Image
          src="/noavatar.png"
          fill
          alt="user profile image"
          className="rounded-full"
        />
      )}
    </>
  );
}
