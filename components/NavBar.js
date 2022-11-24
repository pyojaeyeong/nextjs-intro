import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";
export default function NavBer() {
  const router = useRouter();
  return (
    <nav>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        about
      </Link>
    </nav>
  );
}
