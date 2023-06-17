export function getImageUrl(person) {
  const baseUrl = 'https://i.imgur.com/';

  return `${baseUrl}${person.imageId}${person.imageSize || 's' }.jpg`
}