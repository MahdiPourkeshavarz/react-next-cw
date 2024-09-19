"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Button() {
  const searchParams = useSearchParams();
  const url = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <input
        onChange={(e) => {
          if (e.target.checked) {
            url.set("sort", "-price");
          } else {
            url.set("sort", "price");
          }
          replace(`?${url.toString()}`);
        }}
        type="checkbox"
        name="price"
        id="price"
      />
    </div>
  );
}
