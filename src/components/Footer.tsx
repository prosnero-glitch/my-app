function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <p>&copy; {year}</p>
    </footer>
  )
}

export default Footer
