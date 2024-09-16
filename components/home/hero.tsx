export default function Hero() {
  return (
    <header
      className="relative w-full md:h-[400px] h-[25vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black opacity-30 absolute w-full h-full z-1"></div>
      <h1 className="absolute w-full px-8 md:px-16 text-center text-[#fff] md:text-[40px] text-[20px] font-bold z-10">
        Be inspired, cook with passion, and savor unforgettable moments at the
        table.
      </h1>
    </header>
  );
}
