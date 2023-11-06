import { Link } from "react-router-dom";

const Logo = (prop) => {
  const {src='/logo.png', link='', children ,styles='' } = prop;
  return (
    <div className={`flex gap-2 items-center z-[200000] ${styles} max-w-[600px]`}>
      <Link  to={link}>
        <img className="w-5 sm:w-14 landscape:w-10" src={src} alt="WorldTravel logo"  />
      </Link>
      {children}
    </div>
  );
};

export default Logo;
