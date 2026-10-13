type KepBetoltoProps = {
  src: string;
  alt: string;
};

export default function KepBetolto({ src, alt }: KepBetoltoProps) {
  return (
    <img
      src={src}
      alt={alt}
    />
  )
}
