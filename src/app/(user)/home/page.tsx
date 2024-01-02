import Image from "next/image";
import Reel from "../_components/Reel";
import PostItem from "../_components/PostItem";

export default function Home() {
  return (
    <div className="flex flex-col h-full overflow-scroll    flex-1 items-center">
      {/* Reels */}
      <div className="flex gap-3 my-10  max-w-4xl min-w-4xl w-4xl ">
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
      </div>
      <div className="flex flex-col gap-10 my-10  max-w-4xl min-w-4xl w-4xl ">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}
