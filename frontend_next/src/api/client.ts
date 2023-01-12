import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
export const client = sanityClient({
    projectId: "fswwnj2d",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skgvyV1n5F39fKgUoihUJCVx1Nugb7HFSOKKNFNSyLmCvmnhqqECGHjVD8y2VhBeIrR4mXR2z0OONRDM3N8VimGpDvRoL0SzWTWK8OQtvBw2DzCKUq2tQni46MwJMjb1mrvdnCQmzwdZblivJto1Zqz7U2xvSbWRNgkPja9bOMbp90e3XGsH"

})
 
const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)