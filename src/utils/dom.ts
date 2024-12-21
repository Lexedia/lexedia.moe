type Child = Node | string | null | false
type Children = Child | Children[]

function processChildren(children: Children[], e: Element) {
  for (const child of children) {
    if (Array.isArray(child)) {
      processChildren(child, e)
    } else if (child) {
      if (typeof child === 'string' && child.startsWith('<')) {
        e.insertAdjacentHTML('beforeend', child)
        continue
      }

      e.appendChild(
        typeof child === 'string' ? document.createTextNode(child) : child,
      )
    }
  }
}

export function h(
  tag: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any> | null,
  ...children: Children[]
): HTMLElement {
  const e = document.createElement(tag)

  if (props) {
    for (const key in props) {
      if (key in props) {
        if (key.startsWith('on')) {
          const event = key.slice(2).toLowerCase()
          e.addEventListener(event, props[key])
        } else {
          e.setAttribute(key, String(props[key]))
        }
      }
    }
  }

  processChildren(children, e)
  return e
}
