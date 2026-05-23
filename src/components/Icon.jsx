// Lightweight inline SVG icons — avoids shipping a whole icon library.
const paths = {
  truck:
    'M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14',
  box: 'M21 8 12 3 3 8v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8',
  pin: 'M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  warehouse: 'M3 21V8l9-4 9 4v13M3 21h18M7 21v-6h10v6M7 13h10',
  train:
    'M8 4h8a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM5 10h14M9 21l-2 2M15 21l2 2M9 14h.01M15 14h.01',
  plane: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z',
  globe:
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3zM9 12l2 2 4-4',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 7v5l3 2',
  badge: 'M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8.5 13.5 7 22l5-3 5 3-1.5-8.5',
  rupee: 'M6 4h12M6 8h12M14 4c4 0 4 8-2 8H6l8 8',
  headset:
    'M4 14v-2a8 8 0 0 1 16 0v2M4 14a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zM20 14a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM18 16v1a4 4 0 0 1-4 4h-2',
  phone:
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
  mail: 'M4 4h16v16H4zM4 6l8 6 8-6',
  check: 'M20 6 9 17l-5-5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6 6 18',
  whatsapp:
    'M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zM8 8c.3-.7.6-.7.9-.7h.6c.2 0 .5 0 .7.6l.8 2c0 .3 0 .5-.2.7l-.5.6c-.2.2-.3.4-.1.7.7 1.2 1.7 2 2.9 2.5.3.1.5.1.7-.1l.6-.7c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.3.5.5 0 .9-.6 1.7-1.4 1.9-1.6.4-3.7-.4-5.6-2.3C8.7 14.4 7.6 12.3 8 8z',
}

export default function Icon({ name, className = 'h-6 w-6', stroke = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={stroke ? 'none' : 'currentColor'}
      stroke={stroke ? 'currentColor' : 'none'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  )
}
