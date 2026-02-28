import Link from "next/link";
import CardFitur from "../CardFitur";
import { DataPortoDisplay } from "@/lib/Mobile";


export default function Mobile() {
return (
    <div>
        <div className="projects-grid">
        {DataPortoDisplay.map((item, idx) => (
            <CardFitur key={idx} {...item} />
        ))}
        </div>
        <div className="w-full size-8 text-end mt-10">
            <Link href="/more/mobile" className="more-link">
                More
            </Link>
        </div>
    </div>
    );
}
