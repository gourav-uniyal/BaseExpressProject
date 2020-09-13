export const promiseHandler = async (promise: any) => {
	try {
		const data = await promise;
		return [data, undefined];
	} catch (error) {
		return await Promise.resolve([undefined, error]);
	}
}