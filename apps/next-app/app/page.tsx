import {inspect} from "util";
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to HybridRenders!</h1>
      <p>
        This website showcases different hybrid rendering techniques using Next.js, Remix, Angular Universal, Nuxt.js, Qwik, and SvelteKit.
      </p>
    </main>
  )
}
