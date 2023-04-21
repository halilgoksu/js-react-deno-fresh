/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header>
      <h1 class={tw`font-bold text-2xl`}>React-Deno</h1>
      <nav class={tw`py-4 flex space-x-4`}>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/hello/you">Hello</a>
        <a href="/goodbye/you">Goodbye</a>
      </nav>
    </header>
  );
}
