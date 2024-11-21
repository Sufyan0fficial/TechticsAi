import "@/components/style.css";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    /* From Uiverse.io by G4b413l */
    <div
      className="w-full h-screen flex justify-center items-center bg-[#45E7FF]"
      //   style={{
      //     background: "linear-gradient(360deg, #0412CB 20.4%, #06072E 74.17%)",
      //   }}
    >
      <div className="loader"></div>
    </div>
  );
}
