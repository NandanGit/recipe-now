const credentials = {
	API_KEY: 'f538ef86a5af1ee5712af9cfeaf4df92',
	APP_ID: '542eed36',
	API_PROVIDER: 'api.edamam.com',
	URL: undefined,
};

credentials.URL = `https://${credentials.API_PROVIDER}/api/recipes/v2?type=public&app_key=${credentials.API_KEY}&app_id=${credentials.APP_ID}`;

export default credentials;
