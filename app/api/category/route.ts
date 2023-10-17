import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    const product = await db.category.create({
      data: {
        name,
        imageUrl,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("PRODUCT_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
