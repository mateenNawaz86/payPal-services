import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-purple-400 py-2 px-5">
      <span>logo</span>

      <div className="flex items-center gap-x-5">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about-us">About Us</Link>
      </div>
    </div>
  );
};
