'use client'

export default function CookieSettingsLink() {
  function handleClick() {
    localStorage.removeItem('te-cookie-consent')
    window.location.reload()
  }

  return (
    <button
      onClick={handleClick}
      className="cookie-btn cookie-btn--reject"
      style={{ display: 'inline-flex', cursor: 'pointer' }}
    >
      Manage cookie preferences
    </button>
  )
}
