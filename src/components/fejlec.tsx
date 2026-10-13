type FejlecProps = {
  title: string;
};

export default function Fejlec({ title }: FejlecProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}