const Par = ({ black }: { black?: boolean }) => (
  <div className={`w-6 h-1 ${black ? "bg-black" : "bg-accents-heavy"}`}></div>
);

export default Par;
