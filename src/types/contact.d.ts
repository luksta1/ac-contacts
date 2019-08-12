type Contact = {
    contact: string,
    deals: number,
    id: string,
    location: {
        city: string,
        state: string,
        country: string,
    }
    tags: string[]
    totalValue: number,
}