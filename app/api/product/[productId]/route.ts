import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const {
      name,
      category,
      description,
      imageUrl,
      ownerId,
      ownerName,
      price,
      quantity,
    } = await req.json();
    const product = await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        name,
        category,
        description,
        imageUrl,
        ownerId,
        ownerName,
        price,
        quantity,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(params);

    console.log("PRODUCT_ID_Delete", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await db.product.delete({
      where: {
        id: params.productId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(params);

    console.log("PRODUCT_ID_Delete", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
