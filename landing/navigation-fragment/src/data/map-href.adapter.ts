const labelToHref = {
  contacts: '/contacts',
  контакты: '/contacts',
  'переезд в сша': '/relocation',
  relocation: '/relocation',
}

const mapHref = (items) =>
  items.map((item) => ({ ...item, href: labelToHref[item?.label?.toLowerCase()] }))

export { mapHref }
