import Link from "next/link"


export default function FooterButton ({title}) {
  return (<>
    <h2>
            <Link href={"/"}>{title}</Link>
            </h2>
    </>
  )
}

