import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const location = searchParams.get("location");
    const search = searchParams.get("search");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const sort = searchParams.get("sort") || "newest";
    const featured = searchParams.get("featured");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    const where = { status: "active" };

    if (category && category !== "All") {
      where.category = category;
    }

    if (location && location !== "All Locations") {
      where.province = location;
    }

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { breed: { contains: search } },
        { location: { contains: search } },
        { description: { contains: search } },
      ];
    }

    if (minPrice) {
      where.price = { ...where.price, gte: parseInt(minPrice) };
    }

    if (maxPrice) {
      where.price = { ...where.price, lte: parseInt(maxPrice) };
    }

    if (featured === "true") {
      where.featured = true;
    }

    const orderBy = {};
    switch (sort) {
      case "price-low":
        orderBy.price = "asc";
        break;
      case "price-high":
        orderBy.price = "desc";
        break;
      case "newest":
      default:
        orderBy.createdAt = "desc";
        break;
    }

    const skip = (page - 1) * limit;

    const [listings, total] = await Promise.all([
      prisma.listing.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      prisma.listing.count({ where }),
    ]);

    return NextResponse.json({
      listings,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      breed,
      category,
      subtype,
      age,
      weight,
      gender,
      price,
      description,
      milkYield,
      image,
      images,
      location,
      city,
      province,
      sellerName,
      phone,
    } = body;

    if (!name || !breed || !category || !age || !weight || !gender || !price || !sellerName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const listing = await prisma.listing.create({
      data: {
        name,
        breed,
        category,
        subtype,
        age,
        weight,
        gender,
        price: parseInt(price),
        description,
        milkYield,
        image: image || "",
        images: JSON.stringify(images || []),
        location: location || "",
        city,
        province,
        sellerName,
        phone,
      },
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json(
      { error: "Failed to create listing" },
      { status: 500 }
    );
  }
}
