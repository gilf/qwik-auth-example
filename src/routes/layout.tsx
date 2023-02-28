import { component$, Slot } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

import Header from '../components/header/header';
import { useAuthSession } from "~/routes/plugin@auth";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  const userSignal = useAuthSession();

  return (
    <>
      <main>
        <Header loggedIn={userSignal.value?.user !== undefined} />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
          <div>{serverTime.value.date}</div>
        </a>
      </footer>
    </>
  );
});
