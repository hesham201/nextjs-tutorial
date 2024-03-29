import Link from "next/link";
const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/prisma-example", label: "prisma" },
  { href: "/tasks", label: "tasks" },
];
const Navbar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href={"/"} className="btn btn-primary">
          {" "}
          Nextjs
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((item) => (
            <li key={item.href}>
              <Link className="capitalize" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
