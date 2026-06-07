type Props = {
  id: string;
  title: string;
};

export default function FigmaSection({
  id,
  title,
}: Props) {
  return (
    <section
      id={id}
      className="py-24 bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="
          text-5xl
          font-bold
          mb-10
          "
        >
          {title}
        </h2>

        <div
          className="
          bg-black
          rounded-3xl
          overflow-hidden
          shadow-xl
          "
        >

          <iframe
            className="w-full h-[800px]"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/High-Fidelity"
            allowFullScreen
          />

        </div>

      </div>
    </section>
  );
}