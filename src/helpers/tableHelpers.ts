import { statesHash } from '../data';

export const formatTableHeader = (value: string) => {
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    return capitalized.replace(/([A-Z])/g, ' $1').trim();
}

export const formatContact = (contact: Contact) => {
    return {
        ...contact,
        contact: formatName(contact.contact),
        location: formatLocation(contact.location),
        tags: formatTags(contact.tags),
        totalValue: formatValue(contact.totalValue),
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

export const formatLocation = (location: any) => {
    return (location === null || location.city === '')
        ? ''
        : `${location.city}, ${statesHash[location.state]}, ${location.country === 'US'
        ? 'USA' : location.country}`;
}

export const formatTags = (tags: string[]) => {
    return tags.join(', ');
}

