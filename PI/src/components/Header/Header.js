function Header() {
  return (
    <header>
      <h1>UdeSA Movies</h1>

      <nav>
        <ul class="nav nav-tabs my-4">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/movies">Películas</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/series">Series</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/favorites">Favoritas</a>
          </li>

          <li class="nav-item ml-auto">
            <a class="nav-link" href="/register">Registro</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;