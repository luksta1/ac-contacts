export const formatTableHeader = (value: string) => {
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    return capitalized.replace(/([A-Z])/g, ' $1').trim();
}

export const formatContact = (contact: Contact) => {
    return {
        ...contact,
        contact: formatName(contact.contact),
        totalValue: formatValue(contact.totalValue),
        location: formatLocation(contact.location),
    }
}

export const formatName = (name: string) => {
    const formattedName = name.replace(/([A-Z])/g, ' $1').trim();
    return formattedName.charAt(0).toUpperCase() + name.slice(1);
}

export const formatValue = (value: number) => {
    const formatted = value.toLocaleString();
    return `$${formatted}`;
}

export const formatLocation = (location: string) => {
    return location === ', , ' ? '' : location;
}

