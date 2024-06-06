import Link from "next/link";

const Footer = () => {
  const navigation = [
    { name: "Blog", href: "/posts" },
    // { name: "Company", href: "/company" },
    // { name: "Recruit", href: "/recruit" },
    // { name: "Archive", href: "/archive" },
  ];

  return (
    <footer className="p-12 text-sm font-medium uppercase">
      <div className="container flex gap-4 justify-between">
        <Link href="/" className="uppercase text-2xl font-semibold">
          TEST
        </Link>

        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
