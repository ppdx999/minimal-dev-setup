import { appendBan } from "./util";

const root = document.getElementById("root");
const p = document.createElement("p");
p.textContent = appendBan("Hello Typescript");
root?.appendChild(p);
