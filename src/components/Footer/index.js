import Link from "next/link";
import StyledFooter from "./Footer.styled";

export default function Footer({ href, title }) {
  return (
    <>
      <StyledFooter>
        <h2>
          <Link href={href} style={{ color: "#FFFFFF", cursor: "pointer" }}>
            {title}
          </Link>
        </h2>
      </StyledFooter>
    </>
  );
}
