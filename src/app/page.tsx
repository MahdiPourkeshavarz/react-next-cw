import { API_ROUTES, BASE_URL } from "@/constants";
import { TAllProductsResponse } from "./models";
import Button from "@/components/Button";

export async function getData(
  endpoints: string
): Promise<TAllProductsResponse | undefined> {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGFjOTI2YmMzMTYwZGIwMzA2MTNmYyIsImlhdCI6MTcyNjc0NDEyNSwiZXhwIjoxNzI2ODUyMTI1fQ.76zBnlPd_j5Vl5tq9498F2zRNR4N3eMLfJwulUBulLM";
  try {
    const response = await fetch(endpoints, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    return response.json();
  } catch (e: any) {
    throw new Error(e.message);
  }
}

interface props {
  params: {
    sort: string;
  };
}

export default async function Home({ params }: props) {
  const url =
    BASE_URL +
    API_ROUTES.PRODUCT_BASE +
    `${params.sort ? `?${params.sort}` : ""}`;
  console.log(url);
  const response = await getData(url);

  return (
    <div className="flex items-center justify-between w-full">
      <Button />
      <div className="flex mx-auto flex-col gap-y-2 justify-center w-full">
        {response?.data.products?.map((p) => (
          <div key={p._id}>
            <p>{p.name}</p>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
