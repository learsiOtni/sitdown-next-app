import Image from "next/image";

type ProfileImageProps = {
  image?: string;
};

export default function ProfileImage({ image }: ProfileImageProps) {
  return (
    <>
      {image ? (
        <img
          src={image}
          alt="profile image"
          className="rounded-full object-cover w-full h-full m-w-full"
        />
      ) : (
        <Image
          src="/noavatar.png"
          fill
          alt="profile image"
          className="rounded-full"
        />
      )}
    </>
  );
}
