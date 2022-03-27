
import templateSync from "./template_sync.ejs";

if (templateSync !== "hello world") {
	throw new Error(`not match!! [${templateSync}]`);
}
// eslint-disable-next-line no-console
console.log("test_sync OK");
