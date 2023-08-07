import logo from "./GloboLogo.png";

function Header({ subTitle }) {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subTitle}</div>
    </header>
  );
}

export default Header;
