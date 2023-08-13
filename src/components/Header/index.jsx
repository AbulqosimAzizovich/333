import "./style.scss";

const index = () => {
  return (
    <div>
      <header className="shadow-lg dark:bg-[#2B3844]">
        <div className="container mx-auto px-5">
          <nav className="h-[80px] flex justify-between items-center">
            <a
              href="#"
              className="logo text-2xl font-extrabold dark:text-white"
            >
              Where in the world?
            </a>
            <div className="mode dark:text-white flex items-center gap-1">
              <i className="bx bx-moon"></i>
              <span>Dark Mode</span>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default index;
