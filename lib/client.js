import { createClient } from "next-sanity";
import ImageUrl from "@sanity/image-url";

export const client = createClient({
    apiVersion: "2024-02-23",
    dataset: "production",
    projectId: "lv05a39o",
    useCdn: true,
})

const builder = ImageUrl(client)

export function urlFor(source){
    return builder.image(source)
}