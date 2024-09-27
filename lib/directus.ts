import { createDirectus, rest } from '@directus/sdk';
const dirctus_url = import.meta.env.DIRECTUS_URL;

type Global = {
    title: string;
    description: string;
    logo: string;
}

type Author = {
    name: string
    avatar: string
    slug: string
    bio: string

}

type Page = {
    title: string;
    content: string;
    slug: string;
}

type Post = {
    banner: string;
    title: string;
    subtitle: string;
    meta_description: string;
    content: string;
    published_at: string
    slug: string;
    canonical_url: string;
    series: string;
    tags: string[];
}

type Schema = {
    Blogs: Post[];
    Global: Global;
    Pages: Page[];
}

const directus = createDirectus<Schema>(dirctus_url).with(rest());

export default directus;