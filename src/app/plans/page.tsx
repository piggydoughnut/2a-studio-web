export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="flex-1 hidden lg:flex"></div>
      <div className="flex flex-col flex-1 h-[100%]">
        <h4 className="font-bold tracking-wide">
          <span className="opacity-50">Only </span>Plans
        </h4>
        <div className="mt-10">
          <ul className="list-disc list-inside">
            <li>A catalog of affordable architectural plans.</li>
            <li>Purchase plans online.</li>
            <li>Plans are adjusted to fit your specific requirements.</li>
          </ul>
        </div>
        <p className="opacity-70 mt-2">More details coming soon...</p>

        <p className="my-10">
          Feel free to get in touch with any inquiries about our services. If
          you have specific needs, don't hesitate to ask, and we'll do our best
          to help you.
        </p>
      </div>
      <div className="flex-1 hidden lg:flex "></div>
    </div>
  );
}
