import Logo from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/moodToggler";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <Link to="/" className="text-xl flex">
        <Logo /> <span className="font-bold ml-2 pr-1">Physics</span>Library
      </Link>
      <Link className="hover:underline" to="/">
        Books
      </Link>
      <Link className="hover:underline" to="/users">
        Borrow Summary
      </Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
