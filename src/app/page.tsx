import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/logo.svg" height={50} width={50} alt="Logo" />
      <h1 className="text-xl font-semibold tracking-tight">CloneTube</h1>
    </>
  );
}
