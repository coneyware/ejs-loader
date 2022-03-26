
import templateSync from "./template_sync.ejs";

if (templateSync !== "hello world") {
	throw new Error(`not match!! [${templateSync}]`);
}
// eslint-disable-next-line no-console
console.log(`${import.meta.url} OK`);
