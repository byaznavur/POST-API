const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 shadow-lg bg-gray-300">
      <div className="container flex justify-between items-center">
        <div>
          <a href="#" className="font-semibold text-3xl">
            POST API
          </a>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a className="font-semibold" href="https://github.com/byaznavur">
                Git Hub
              </a>
            </li>
            <li>
              <a
                className="font-semibold"
                href="https://www.linkedin.com/in/azizbek-bakhtiyarovich-0b0358302/"
              >
                Linkledn
              </a>
            </li>
            <li>
              <a className="font-semibold" href="tel:+998930766923">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
