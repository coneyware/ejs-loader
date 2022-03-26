
import templateAsync from "./template_async.ejs";

if (templateAsync !== "hello world") {
	throw new Error(`not match!! [${templateAsync}]`);
}
// eslint-disable-next-line no-console
console.log(`${import.meta.url} OK`);
