import clsx from "clsx";

function ServiceTime({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const ServiceTimes = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <ServiceTime name="Sunday" invert={invert}>
          Escuela Dominical 9:45AM
          <br />
          Culto General 11:00AM
        </ServiceTime>
      </li>
    </ul>
  );
};

export default ServiceTimes;
