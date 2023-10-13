import { CopyrightIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="absolute bottom-1 right-0 text-xs font-extralight">
      <CopyrightIcon className="h-4 w-4 text-lime-100 inline mx-2" />
      <span className="text-lime-100 font-light">JJ Development</span> - All
      rights reserved
    </div>
  );
}
