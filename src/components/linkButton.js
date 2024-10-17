import Link from "next/link";

const defaultClassName =
  "block max-w-fit rounded-lg border border-sky-700 bg-sky-400/10 px-6 py-2 text-center text-slate-200/90 hover:border-sky-400 hover:bg-sky-400/20 ";

export default function LinkButton(props) {
  return (
    <Link className={defaultClassName + props.className} href={props.href}>
      {props.text}
    </Link>
  );
}
