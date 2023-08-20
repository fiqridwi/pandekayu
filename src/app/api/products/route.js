import connectMongoDB from "@/libs/mongodb";
import Product from "../../../../models/product";
import { NextResponse } from "next/server";

// export async function POST(request) {
// 	const { title, description } = await request.json();
// 	await connectMongoDB();
// 	await Topic.create({ title, description });
// 	return NextResponse.json({ message: "Topic Created" }, { status: 201 });
// }

export async function GET() {
	await connectMongoDB();
	const products = await Product.find();
	// console.log(products, "await connectMongoDB()");
	return NextResponse.json({ products });
}

// export async function DELETE(request) {
// 	const id = request.nextUrl.searchParams.get("id");
// 	await connectMongoDB();
// 	await Topic.findByIdAndDelete(id);
// 	return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }
