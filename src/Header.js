const Header = ({ toggleTeamView }) => {
  return (
    <header>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#testimonials">Testimonials</a>
        <span onClick={toggleTeamView}>The Team</span>
      </nav>
    </header>
  );
};

export default Header;
