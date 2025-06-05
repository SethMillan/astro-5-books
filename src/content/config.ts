import { defineCollection, z } from "astro:content";
//z -> zod eschema

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.string(),
        description: z.string(),
        buy: z.object({
            spain: z.string(),
            usa: z.string(),
        })
    })
})

export const collections = {books}