export const validateString = (str: string) => {
    const alpha = /^[a-z ]+$/i;
    return alpha.test(str);
}

export const calculateTotalValue = (deals: any[]) => {
    return deals.reduce((total, deal) => total + Number(deal.value), 0);
}

export const validateTags = (tags: string[]) => {
    return tags.filter((tag) => {
        return tag && tag.length < 12;
    })
}