import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Form } from '@builder.io/qwik-city';
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const loginAction = useAuthSignin();

  return (
    <div>
      <h1>
        Welcome to Login <span class="lightning">⚡️</span>
      </h1>
      <div>
        <Form action={loginAction}>
          <div class="container">
            <input
              type="hidden"
              name="provider"
              value="credentials"
            />
            <div class="login">
              <button>Login</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
