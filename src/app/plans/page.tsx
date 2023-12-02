import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[80%] text-left">
      <h1 className="font-bold text-[32px] tracking-wide">
        <span className="opacity-50">Only </span>Plans
      </h1>
      <p>
        Only Plans is a project we have been preparing for a while and it will
        be launched in 2024.
      </p>
      <p className="mt-10">
        We will offer:
        <ul className="list-disc list-inside">
          <li>Explore a diverse catalog of existing architectural plans.</li>
          <li>
            Secure high quality architectural plans effortlessly through online
            purchase.
          </li>
          <li>
            Our plans are tailored to meet your specific council requirements.
          </li>
          <li>
            Purchase now and embark on your building journey without delay.
          </li>
        </ul>
      </p>
      <br />
      <br />
      <p className="opacity-70">More details coming soon...</p>
      <br />
      <br />

      <p>Do you have questions? Please reach out to us.</p>
    </div>
  );
}
