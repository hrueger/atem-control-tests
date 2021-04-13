import { Atem } from "atem-connection"
const myAtem = new Atem();
myAtem.on("info", (...d) => console.log("info", ...d));
myAtem.on("error", (...d) => console.error("error", ...d));

myAtem.connect("192.168.178.23");

myAtem.on("connected", async () => {
	console.log("connected");
	// while (true) {
	await sleep();
	await myAtem.changeProgramInput(3)
	await myAtem.autoTransition();
	await sleep();
	await myAtem.changeProgramInput(1)
	await myAtem.autoTransition();
	// }
});

async function sleep(s = 2000): Promise<void> {
	await new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, s);
	});
}