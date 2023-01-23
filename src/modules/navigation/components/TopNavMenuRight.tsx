import CartSvg from "../../../assets/CartSvg";
import HamburgerSvg from "../../../assets/HamburgerSvg";

const TopNavMenuRight = () => {
  return (
    <ul className="menu menu-horizontal gap-2 px-1">
      <li className="  hidden xl:block">
        <a className="btn-outline btn-error btn normal-case">List your place</a>
      </li>
      <li>
        <a>
          <CartSvg />
        </a>
      </li>
      <li className=" hidden xl:block">
        <a className="btn-outline btn-primary btn border-none normal-case">
          Sign in
        </a>
      </li>
      <li className=" hidden xl:block">
        <a className="btn-outline btn-primary btn normal-case">
          Create account
        </a>
      </li>
      <li className=" xl:hidden">
        <a>
          <HamburgerSvg />
        </a>
      </li>
    </ul>
  );
};

export default TopNavMenuRight;
