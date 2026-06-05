export const parseLinkHeader = (header: string): { url: string; rel: string }[] => {
    return header.split(',').map(part => {
        const [urlPart, relPart] = part.trim().split(';')

        return {
            url: urlPart.trim().replace(/^<|>$/g, ''),
            rel: relPart.trim().replace(/^rel="|"$/g, ''),
        }
    })
}