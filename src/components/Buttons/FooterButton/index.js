import Link from "next/link";

export default function FooterButton({ href, title, onClick }) {
  return (
    <>
      <hr />
      <h2>
        <Link href={href} onClick={onClick}>
          {title}
        </Link>
      </h2>
    </>
  );
}
