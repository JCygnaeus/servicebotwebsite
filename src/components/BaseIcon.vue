<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <component
      :is="shape.tag"
      v-for="(shape, index) in shapes"
      :key="index"
      v-bind="shape.attrs"
    />
  </svg>
</template>

<script>
const ICONS = {
  check: [{ tag: 'path', attrs: { d: 'M5 12l5 5L20 7' } }],
  home: [
    { tag: 'path', attrs: { d: 'M3 11l9-7 9 7' } },
    { tag: 'path', attrs: { d: 'M5 10v10h14V10' } },
    { tag: 'path', attrs: { d: 'M9 15h6' } }
  ],
  qr: [
    { tag: 'rect', attrs: { x: 3, y: 3, width: 7, height: 7, rx: 1 } },
    { tag: 'rect', attrs: { x: 14, y: 3, width: 7, height: 7, rx: 1 } },
    { tag: 'rect', attrs: { x: 3, y: 14, width: 7, height: 7, rx: 1 } },
    { tag: 'path', attrs: { d: 'M14 14h3v3M21 14v7h-4M14 18v3' } }
  ],
  chat: [
    { tag: 'path', attrs: { d: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.9A8 8 0 1 1 21 12z' } },
    { tag: 'path', attrs: { d: 'M8 11h8M8 14h5' } }
  ],
  triage: [
    { tag: 'path', attrs: { d: 'M4 6h16M4 12h10M4 18h6' } },
    { tag: 'circle', attrs: { cx: 18, cy: 16, r: 3 } },
    { tag: 'path', attrs: { d: 'M20.2 18.2L22 20' } }
  ],
  calendar: [
    { tag: 'rect', attrs: { x: 3, y: 5, width: 18, height: 16, rx: 2 } },
    { tag: 'path', attrs: { d: 'M3 10h18M8 3v4M16 3v4' } },
    { tag: 'path', attrs: { d: 'M9 15l2 2 4-4' } }
  ],
  pin: [
    { tag: 'path', attrs: { d: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z' } },
    { tag: 'circle', attrs: { cx: 12, cy: 9.5, r: 2.5 } }
  ],
  photo: [
    { tag: 'rect', attrs: { x: 3, y: 5, width: 18, height: 14, rx: 2 } },
    { tag: 'circle', attrs: { cx: 9, cy: 11, r: 2 } },
    { tag: 'path', attrs: { d: 'M21 16l-5-5-8 8' } }
  ],
  priority: [
    { tag: 'path', attrs: { d: 'M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5' } },
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 4 } }
  ],
  route: [
    { tag: 'path', attrs: { d: 'M4 5h16M4 12h16M4 19h16' } },
    { tag: 'path', attrs: { d: 'M16 2l4 3-4 3M8 16l-4 3 4 3' } }
  ],
  globe: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 9 } },
    { tag: 'path', attrs: { d: 'M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z' } }
  ],
  plug: [
    { tag: 'path', attrs: { d: 'M9 7H6a3 3 0 0 0 0 6h3M15 7h3a3 3 0 0 1 0 6h-3M8 10h8' } },
    { tag: 'path', attrs: { d: 'M12 15v6' } }
  ],
  menu: [{ tag: 'path', attrs: { d: 'M4 6h16M4 12h16M4 18h16' } }],
  close: [{ tag: 'path', attrs: { d: 'M6 6l12 12M18 6L6 18' } }]
}

export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 24
    },
    strokeWidth: {
      type: [Number, String],
      default: 1.8
    }
  },
  computed: {
    shapes() {
      return ICONS[this.name] || []
    }
  }
}
</script>
