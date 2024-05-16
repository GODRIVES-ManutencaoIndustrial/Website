import Image from "next/image"

export default function Hero() {
  return (
    <>
      <Image
        src={"/heroWallpaper.svg"}
        width={0}
        height={0}
        className="min-w-max opacity-80 mix-blend-overlay"
        alt="papel de parede represetado por um emaranhado de fios"
      />
    </>
  )
}
