import Image from "next/image";

export const NavLogo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Image
        className="h-8 w-auto"
        src="https://hagenfaber.eu/assets/hagenfaber.png"
        width={500}
        height={500}
        priority
        alt="Hagenfaber"
      />
    </div>
  );
};
