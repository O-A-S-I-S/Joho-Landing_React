const Header = ({ teamViewFalse, toggleTeamView }) => {
  return (
    <header>
      <nav className="nav">
        <a onClick={teamViewFalse} href="#home">
          Home
        </a>
        <a onClick={teamViewFalse} href="#about">
          About Us
        </a>
        <a onClick={teamViewFalse} href="#testimonials">
          Testimonials
        </a>
        <span onClick={toggleTeamView}>The Team</span>
      </nav>
    </header>
  );
};

export default Header;
