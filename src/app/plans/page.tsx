import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[80%] text-left">
      <h3 className="font-bold tracking-wide">
        <span className="opacity-50">Only </span>Plans
      </h3>
      <p>Only Plans will be launched in 2024.</p>
      <p className="mt-10">
        We will offer:
        <ul className="list-disc list-inside">
          <li>A diverse catalog of affordable architectural plans.</li>
          <li>Easy and secure way to purchase plans online.</li>
          <li>
            Options for adjusting plans to fit your specific council
            requirements.
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
