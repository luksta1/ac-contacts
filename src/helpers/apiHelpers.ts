export const validateString = (str: string) => {
    const alpha = /^[a-z ]+$/i;
    return alpha.test(str);
}

export const calculateTotalValue = (deals: any[]) => {
    return deals.reduce((total, deal) => total + Number(deal.value), 0);
}

export const collectTags = (id: string, contactTags: any, tags: any) => {
    const finalTags: any[] = [];
    const tagMatches = contactTags.filter((tagInfo: any) => (tagInfo.contact === id)).map((match: any) => (match.id));

    tags.forEach((tag:any) => {
        if (tagMatches.includes(tag.id)) {
            finalTags.push(tag.tag);
        }
    }) 

    return finalTags;
}