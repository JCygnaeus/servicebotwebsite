<template>
  <div class="qr-sticker">
    <span class="qr-sticker-title">Something broken?</span>
    <svg
      class="qr-sticker-code"
      width="140"
      height="140"
      viewBox="0 0 21 21"
      role="img"
      aria-label="Example QR code"
      shape-rendering="crispEdges"
    >
      <rect width="21" height="21" fill="#fff" />
      <path fill="currentColor" d="M0 0h7v7H0zM14 0h7v7h-7zM0 14h7v7H0z" />
      <path fill="#fff" d="M1 1h5v5H1zM15 1h5v5h-5zM1 15h5v5H1z" />
      <path
        fill="currentColor"
        d="M2 2h3v3H2zM16 2h3v3h-3zM2 16h3v3H2zM8 0h1v1H8zM10 1h2v1h-2zM9 3h1v2H9zM11 4h2v1h-2zM8 6h1v1H8zM10 6h1v1h-1zM12 6h1v1h-1zM0 8h1v1H0zM2 8h2v1H2zM5 9h3v1H5zM9 8h2v2H9zM12 8h1v3h-1zM14 8h2v1h-2zM17 9h2v1h-2zM20 8h1v2h-1zM1 10h2v1H1zM4 11h1v1H4zM7 11h3v1H7zM14 10h1v2h-1zM16 11h3v1h-3zM0 12h1v1H0zM6 12h1v1H6zM10 12h2v1h-2zM8 14h2v1H8zM11 14h1v2h-1zM13 13h2v1h-2zM16 13h1v2h-1zM18 13h3v1h-3zM9 16h1v2H9zM13 15h2v2h-2zM17 16h2v1h-2zM20 15h1v2h-1zM8 19h2v1H8zM11 18h3v1h-3zM15 18h1v3h-1zM17 19h2v2h-2zM12 20h2v1h-2zM20 19h1v1h-1z"
      />
    </svg>
    <span class="qr-sticker-text">Scan to report it on WhatsApp</span>
    <span class="qr-sticker-location">{{ location }}</span>
  </div>
</template>

<script>

export default {
  name: 'QrSticker',
  props: {
    location: {
      type: String,
      default: 'Elm Court · Laundry room'
    }
  }
}
</script>

<style>
.qr-sticker {
  width: 200px;
  padding: 20px;
  border-radius: 18px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-line);
  box-shadow: 0 12px 30px rgba(19, 32, 27, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.qr-sticker-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.15;
}

.qr-sticker-code {
  color: var(--color-ink);
}

.qr-sticker-text {
  font-size: 13px;
  color: var(--color-muted);
}

.qr-sticker-location {
  font-size: 11px;
  color: var(--color-subtle);
}
</style>
