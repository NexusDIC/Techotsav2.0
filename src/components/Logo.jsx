import NEXUS_LOGO from "../../src/assets/images/logos/nexus-black.png";

export default function Logo() {
  return (
    <div className="flex">
      <a
        href="https://www.linkedin.com/in/nexus-ghrce/"
        className="border-none bg-transparent hover:border-none hover:bg-transparent"
      >
        <div className="flex justify-center align-middle gap-2 ">
          <img
            src={NEXUS_LOGO}
            alt="Nexus Logo"
            className="h-20 rounded-full"
          />
          <div className="names">
            <h2>Nexus Forum</h2>
            <h2>DIC Department</h2>
            <h2>GHRCE</h2>
          </div>
        </div>
      </a>
    </div>
  );
}
