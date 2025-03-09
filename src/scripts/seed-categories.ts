import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "UI Design",
    "Server-side Architecture",
    "Serverless Functions",
    "Monoliths",
    "Microservices",
    "Web Security",
    "Web Development Fundamentals",
    "DevOps",
    "Hosting"
];

async function main() {
    console.log("Seeding categories...");

    try {
        const values = categoryNames.map((name) => ({
            name,
            description: `Videos related to ${name.toLowerCase()}`,
        }));

        await db.insert(categories).values(values);

        console.log("Categories seeded successfully!")
    } catch (error) {
        console.error("Error seeding categories: ", error);
        process.exit(1);
    }
}

main();