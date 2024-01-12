import { getClientDetail } from 'Queries/client';
import { LOOKUP_STORE } from '../const';
import { ILookupEnum } from '../Interface';

export function getLookupLabel(lookup: ILookupEnum) {
  return LOOKUP_STORE?.[lookup];
}

export function convertMarkdownToHTML(markdown: string): string {
  // Handle citations: <Citation title="foo" href="bar"/>
  const citationRegex = /<Citation title="([^"]+)" href="([^"]+)"\s*\/>/g;
  markdown = markdown.replace(citationRegex, '<a href="$2">$1</a>');

  // Handle links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  markdown = markdown.replace(linkRegex, '<a href="$2">$1</a>');

  // Handle bold: **text**
  const boldRegex = /\*\*(.*?)\*\*/g;
  markdown = markdown.replace(boldRegex, '<strong>$1</strong>');

  // Handle italic: _text_
  const italicRegex = /_(.*?)_/g;
  markdown = markdown.replace(italicRegex, '<em>$1</em>');

  // Handle headers: # Header 1, ## Header 2, ... ###### Header 6
  for (let i = 6; i >= 1; i--) {
    const headerRegex = new RegExp(`^#{${i}}\\s+(.*)$`, 'gm');
    markdown = markdown.replace(
      headerRegex,
      (_, text) => `<h${i}>${text}</h${i}>`
    );
  }

  // Handle list items: * or -
  const listItemRegex = /(?:\*|\-)\s+(.*)/g;
  markdown = markdown.replace(listItemRegex, '<li>$1</li>');

  // Handle unordered list: * list item
  const unorderedListRegex = /(?:^\*.*\n)+/gm;
  markdown = markdown.replace(unorderedListRegex, '<ul>$&</ul>');

  // Handle ordered list: 1. list item
  const orderedListRegex = /(?:^\d+\..*\n)+/gm;
  markdown = markdown.replace(orderedListRegex, '<ol>$&</ol>');

  // Handle blockquote: > Blockquote
  const blockquoteRegex = /^>(.*)$/gm;
  markdown = markdown.replace(blockquoteRegex, '<blockquote>$1</blockquote>');

  // Handle UI (Underline): __text__
  const uiRegex = /__(.*?)__/g;
  markdown = markdown.replace(uiRegex, '<u>$1</u>');

  // Handle tables: | Header 1 | Header 2 | ... |
  const tableRegex = /^\|(.+)\|$/gm;
  markdown = markdown.replace(tableRegex, (tableRow) => {
    const cells = tableRow
      .split('|')
      .map((cell) => cell.trim())
      .filter(Boolean);
    const isHeader = tableRow.startsWith('|:') && tableRow.endsWith(':|');
    if (isHeader) {
      return (
        '<thead><tr>' +
        cells.map((cell) => `<th>${cell}</th>`).join('') +
        '</tr></thead><tbody>'
      );
    }
    return '<tr>' + cells.map((cell) => `<td>${cell}</td>`).join('') + '</tr>';
  });
  // Close the tbody for table if opened
  markdown = markdown.replace(/<tbody>/g, '</tbody>');

  return markdown;
}
