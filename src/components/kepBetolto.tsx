type KepBetoltoProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

export default function KepBetolto({ src, alt, onClick }: KepBetoltoProps) {
  return (
    <button type="button" onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
}
