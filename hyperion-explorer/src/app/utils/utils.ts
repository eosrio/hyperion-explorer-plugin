export function hLog(input: any, ...extra: any[]) {
	let role;
	if (process.env.worker_role) {
		const id = parseInt(process.env.worker_id);
		role = `[${process.pid} - ${(id < 10 ? '0' : '') + id.toString()}_${process.env.worker_role}]`;
	} else {
		if (process.env.script && process.env.script === './api/server.js') {
			role = `[${process.pid} - api]`;
		} else {
			role = `[${process.pid} - 00_master]`;
		}
	}
	if (process.env.TRACE_LOGS === 'true') {
		const e = new Error();
		const frame = e.stack.split("\n")[2];
		const where = frame.split(" ")[6].split(/[:()]/);
		const arr = where[1].split("/");
		const fileName = arr[arr.length - 1];
		const lineNumber = where[2];
		role += ` ${fileName}:${lineNumber}`;
	}
	console.log(role, input, ...extra);
}