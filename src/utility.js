export function toSlug(text){
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'')
}