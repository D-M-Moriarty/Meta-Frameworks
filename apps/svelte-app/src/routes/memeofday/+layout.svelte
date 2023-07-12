<script>
  import '../../app.css'
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">
      <img src="/images/om.png" width="200" height="300">
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Meme of the Day (SSR)</a></li>
      <li><a>Meme Gallery (Static Rendering)</a></li>
      <li><a>Meme Creator (Hydration)</a></li>
      <li><a>Vote the Meme (SSG + Revalidation)</a></li>
    </ul>
  </div>
</div>
<slot />
