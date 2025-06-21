"use client";
// "use client"
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Home() {
//   // return (
//   //   <div> 
//   //     <h1> hiiiiiiiiiiiiiiiiiiiii </h1>
//   //     <Button>Hello</Button>
//   //   </div>
//   // );

//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   if(mounted){
//     router.push("/dashboard");
//   }
//   return null;

// }



import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return null;
}