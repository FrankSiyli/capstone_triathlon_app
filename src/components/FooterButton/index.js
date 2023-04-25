import Link from "next/link";

export default function FooterButton({ href, title }) {
  return (
    <>
      <hr />
      <h2>
        <Link href={href}>{title}</Link>
      </h2>
    </>
  );
}
