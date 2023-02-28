import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { useAuthSignout } from "~/routes/plugin@auth";

interface HeaderProps {
  loggedIn: boolean;
}

export default component$(({ loggedIn } : HeaderProps) => {
  useStylesScoped$(styles);
  const logoutAction = useAuthSignout();

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
        {loggedIn && <li>
          <Form action={logoutAction}>
            <button class="link">Logout</button>
          </Form>
        </li>}
      </ul>
    </header>
  );
});
