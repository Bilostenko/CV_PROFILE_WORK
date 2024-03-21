import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className="container header__container">
        <div className="header__wrapper">
          <a href="#" className='header__hero'>
            <span className='header__surname'>Dima </span>
            <span className='first__name'>BILOSTENKO</span>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;