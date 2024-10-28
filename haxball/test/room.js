const room = HBInit({
	roomName: 'KPYRHAX.PRO TEST ROOM',
	maxPlayers: 16,
	public: false,
	playerName: 'KPYRHAX.PRO TEST',
	token: '{TOKEN}',
	noPlayer: true,
	geo: { code: 'RU', lat: 55.751244, lon: 37.618423 }
});

room.setTeamsLock(true);
room.setKickRateLimit(0, 0, 0);
room.setCustomStadium('{"name":"JEBAC ZDUNA POWER 2.0","width":420,"height":200,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75},"vertexes":[{"x":-370,"y":170,"cMask":["ball"]},{"x":-370,"y":64,"cMask":["ball"]},{"x":-370,"y":-64,"cMask":["ball"]},{"x":-370,"y":-170,"cMask":["ball"]},{"x":370,"y":170,"cMask":["ball"]},{"x":370,"y":64,"cMask":["ball"]},{"x":370,"y":-64,"cMask":["ball"]},{"x":370,"y":-170,"cMask":["ball"]},{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue","c0","c1"],"cGroup":["redKO","blueKO"]},{"x":0,"y":75,"bCoef":0.1,"cMask":["red","blue","c0","c1"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-75,"bCoef":0.1,"cMask":["red","blue","c0","c1"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue","c0","c1"],"cGroup":["redKO","blueKO"]},{"x":-380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":-380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":-380,"y":-64,"cMask":["ball"]},{"x":-380,"y":64,"cMask":["ball"]},{"x":380,"y":-64,"cMask":["ball"]},{"x":380,"y":64,"cMask":["ball"]},{"x":385,"y":64,"cMask":["ball"]},{"x":385,"y":170,"cMask":["ball"]},{"x":385,"y":-170,"cMask":["ball"]},{"x":385,"y":-64,"cMask":["ball"]},{"x":-385,"y":64,"cMask":["ball"]},{"x":-385,"y":170,"cMask":["ball"]},{"x":-385,"y":-170,"cMask":["ball"]},{"x":-385,"y":-64,"cMask":["ball"]},{"x":-385,"y":-170,"cMask":["ball"]},{"x":-385,"y":-64,"cMask":["ball"]},{"x":-385,"y":-170,"cMask":["ball"]},{"x":-385,"y":-64,"cMask":["ball"]},{"x":-385,"y":64,"cMask":["ball"]},{"x":-385,"y":170,"cMask":["ball"]},{"x":-385,"y":64,"cMask":["ball"]},{"x":-385,"y":170,"cMask":["ball"]},{"x":385,"y":-170,"cMask":["ball"]},{"x":385,"y":-64,"cMask":["ball"]},{"x":385,"y":-170,"cMask":["ball"]},{"x":385,"y":-64,"cMask":["ball"]},{"x":385,"y":64,"cMask":["ball"]},{"x":385,"y":170,"cMask":["ball"]},{"x":385,"y":64,"cMask":["ball"]},{"x":385,"y":170,"cMask":["ball"]},{"x":369,"y":-110,"bCoef":0,"cMask":["c1"]},{"x":260,"y":-110,"bCoef":0,"cMask":["c1"]},{"x":369,"y":110,"bCoef":0,"cMask":["c1"]},{"x":260,"y":110,"bCoef":0,"cMask":["c1"]},{"x":-369,"y":-110,"bCoef":0,"cMask":["c0"]},{"x":-260,"y":-110,"bCoef":0,"cMask":["c0"]},{"x":-369,"y":110,"bCoef":0,"cMask":["c0"]},{"x":-260,"y":110,"bCoef":0,"cMask":["c0"]},{"x":-260,"y":-40,"cMask":[]},{"x":-260,"y":40,"cMask":[]},{"x":260,"y":-40,"cMask":[]},{"x":260,"y":40,"cMask":[]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue","c0","c1"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue","c0","c1"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue","c0","c1"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue","c0","c1"],"cGroup":["redKO","blueKO"]},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"CCCCFF"},{"v0":28,"v1":29,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":30,"v1":31,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":31,"v1":31,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":33,"v1":32,"curve":38.60257680170001,"curveF":2.85534591194784,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":34,"v1":35,"curve":31.9608748015,"curveF":3.4919137466345362,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":37,"v1":36,"curve":55.067096350300005,"curveF":1.9182389937118522,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":38,"v1":39,"curve":30.1056948262,"curveF":3.7183288409655497,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":40,"v1":41,"curve":48.80166713940001,"curveF":2.204402515723351,"vis":false,"cMask":["ball"],"color":"CCCCFF"},{"v0":43,"v1":42,"curve":34.5238570872,"curveF":3.2181603773579353,"vis":false,"cMask":["ball"],"color":"CCCCFF"},{"v0":44,"v1":45,"curve":43.4541918718,"curveF":2.509433962266446,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":47,"v1":46,"curve":35.5522115092,"curveF":3.1191037735842007,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":48,"v1":49,"bCoef":0,"cMask":["c1"],"color":"C7E6BD"},{"v0":50,"v1":51,"bCoef":0,"cMask":["c1"],"color":"C7E6BD"},{"v0":49,"v1":51,"bCoef":0,"cMask":["c1"],"color":"C7E6BD"},{"v0":52,"v1":53,"bCoef":0,"cMask":["c0"],"color":"C7E6BD"},{"v0":54,"v1":55,"bCoef":0,"cMask":["c0"],"color":"C7E6BD"},{"v0":53,"v1":55,"bCoef":0,"cMask":["c0"],"color":"C7E6BD"},{"v0":56,"v1":57,"bCoef":0,"curve":147,"curveF":0.2962134949620804,"cMask":[],"color":"C7E6BD"},{"v0":59,"v1":58,"bCoef":0,"curve":147,"curveF":0.2962134949620804,"cMask":[],"color":"C7E6BD"},{"v0":54,"v1":52,"bCoef":0,"curve":31.890791801845708,"curveF":3.5,"vis":false,"cMask":["c0"],"color":"C7E6BD"},{"v0":48,"v1":50,"bCoef":0,"curve":31.890791801845708,"curveF":3.5,"vis":false,"cMask":["c1"],"color":"C7E6BD"}],"planes":[{"normal":[0,1],"dist":-170,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.1,"cMask":["red","blue","wall","c0","c1"]},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"cMask":["red","blue","wall","c0","c1"]},{"normal":[1,0],"dist":-420,"bCoef":0.1,"cMask":["red","blue","wall","c0","c1"]},{"normal":[-1,0],"dist":-420,"bCoef":0.1,"cMask":["red","blue","wall","c0","c1"]}],"goals":[{"p0":[-376,65],"p1":[-376,-63],"team":"red"},{"p0":[377,63],"p1":[377,-65],"team":"blue"}],"discs":[{"cMask":["red","blue","wall","c0","c1"],"cGroup":["ball","kick","score"]},{"pos":[-370,64],"radius":8,"invMass":0,"color":"FFCCCC","cMask":["red","blue","ball","wall","c0","c1"]},{"pos":[-370,-64],"radius":8,"invMass":0,"color":"FFCCCC","cMask":["red","blue","ball","wall","c0","c1"]},{"pos":[370,64],"radius":8,"invMass":0,"color":"CCCCFF","cMask":["red","blue","ball","wall","c0","c1"]},{"pos":[370,-64],"radius":8,"invMass":0,"color":"CCCCFF","cMask":["red","blue","ball","wall","c0","c1"]}],"playerPhysics":{"acceleration":0.12,"kickingAcceleration":0.12,"kickStrength":11},"ballPhysics":"disc0"}');
// room.setRequireRecaptcha(true);

room.onRoomLink = url => {
	console.log(`Room started: ${url}`);
	room.startGame();
};

room.onPlayerJoin = player => {
	console.log(`Connected ${player.name} (${player.conn})`);
	room.setPlayerTeam(player.id, 1);
};