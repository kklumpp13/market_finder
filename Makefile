backup:
	heroku pg:backups capture --app=market-finder
	curl -o pg-production-latest.sql `heroku pg:backups public-url --app=market-finder`
	bzip2 pg-production-latest.sql


