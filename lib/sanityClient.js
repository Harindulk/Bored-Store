import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '27ksw9p3',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skdIEOaxdyQEwlRckqeJZgRqOPrMwe5BzzkbNL9k6gpGGeW5uPHRGeKGQPGG8GrdOlUBFmwSEX8VMpqE4dEqbvhWEFLWafBG6fPZiQtWbarJUYCF7R14aIbRpfCdl5xUV0KNqaAUBSyRK4mkwoiWCGGTLtVy5S8wAwirNQDXFk5zh9AszYD2',
  useCdn: false,
})