
import templateAsync from "./template_async.ejs";

if (templateAsync !== "hello world") {
	throw new Error(`not match!! [${templateAsync}]`);
}
// eslint-disable-next-line no-console
console.log("test_async OK");
