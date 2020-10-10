
module.exports = (client) => {
	console.log('Prêt a l\'usage.');

	client.user.setStatus('online');

	client.user.setActivity('slt à tous');
};