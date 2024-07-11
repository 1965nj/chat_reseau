import Image from "next/image";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-2">
        <LeftComponent/>
      </div>
      <div className="flex-1">
        <RightComponent/>
      </div>
    </div>
  );
}
