require('dotenv').config();

const axios = require('../services/axios.js');
const fs = require('node:fs');
const AdmZip = require('adm-zip');

const zipPath = './chrome/anti-captcha.zip';
const extractPath = './chrome/plugins';

(async () => {
	if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
	if (fs.existsSync(extractPath)) fs.rmSync(extractPath, { recursive: true, force: true });

	const { data } = await axios.get('https://antcpt.com/anticaptcha-plugin.zip', { responseType: 'stream' });
	const writer = fs.createWriteStream(zipPath);
	data.pipe(writer);

	await new Promise((resolve, reject) => {
		writer.on('finish', resolve);
		writer.on('error', reject);
	});

	new AdmZip(zipPath).extractAllTo(extractPath, true);
	fs.unlinkSync(zipPath);

	const jsFile = `${extractPath}/js/config_ac_api_key.js`;
	if (fs.existsSync(jsFile)) {
		let confData = fs.readFileSync(jsFile, 'utf8');
		confData = confData.replace(/antiCapthaPredefinedApiKey = ''/g, `antiCapthaPredefinedApiKey = '${process.env.ANTI_CAPTCHA_SECRET}'`);
		fs.writeFileSync(jsFile, confData, 'utf8');

		console.log(`Successfully! Downloaded anticaptcha-plugin.zip and modified ${jsFile}`);
	} else {
		console.error('Plugin configuration not found!');
	}
})();