import "./header.scss";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
