function formatBookCitation(citation) {
  const names = citation.author.split(' ')
  let author = names.shift().toUpperCase()

  if (names.length > 0) {
    author = author + ', '
    const initials = names.map((name) => name[0].toUpperCase() + '.')
    author = author + initials.join(' ')
  }

  return `${author} ${citation.title}${citation.subtitle ? ': ' + citation.subtitle : ''}. ${citation.edition ? citation.edition + 'ª ed.' : ''} ${citation.place}: ${citation.editor}, ${citation.year}.`
}

export default function formatCitation(citation) {
  switch (citation.source) {
    case 'book':
      return formatBookCitation(citation)
    default:
      return 'Ops! Ocorreu um erro ao formatar sua citação :('
  }
}
