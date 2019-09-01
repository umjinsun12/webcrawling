var request = require("request");
var express = require('express');

var app = express();


app.get('/sport', function(req, res){

	var type = req.query.type;
	var start = req.query.start;
	var end = req.query.end;
	
	console.log('test');
	var options = { method: 'GET',
  	url: 'https://sports-api.named.com/named/v1/sports/'+ type +'/games/',
  	qs: 
   		{ broadcast: 'true',
     		broadcastLatest: 'true',
     	odds: 'true',
     	scores: 'true',
     	specials: 'true',
     	seasonTeamStat: 'true',
     	startDate: start,
     	endDate: end,
     	v: '1567123561932' },
  	headers: 
   	{ 
     		'oki-api-key': '1rar2zCZvKjp',
     		'oki-api-name': 'named_score',
     		referer: 'http://sports.named.com/baseball' } };

	request(options, function (error, response, body) {
  		if (error) throw new Error(error);
  		res.json(JSON.parse(body));
	});
});

app.get('/soccerlist',function(req, res){
	var id = req.query.id;

var options = { method: 'GET',
  url: 'https://sports-api.named.com/named/v1/sports/games/' + id,
  qs: { lineups: 'true', gameTeamStat: 'true' },
  headers:
   { 
     'oki-api-name': 'named_score',
     'oki-api-key': '1rar2zCZvKjp',
     origin: 'http://sports.named.com' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

	res.json(JSON.parse(body));
	});

});



app.get('/baseballlist',function(req, res){
	var id = req.query.id;

var options = { method: 'GET',
  url: 'https://sports-api.named.com/named/v1/sports/baseball/' + id + '/lineups',
  headers:
   { 'postman-token': '1df49d1d-1ff5-3a0e-f034-55313b4c82dd',
     'cache-control': 'no-cache',
     'oki-api-name': 'named_score',
     'oki-api-key': '1rar2zCZvKjp',
     origin: 'http://sports.named.com' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.json(JSON.parse(body));
});

});


app.get('/boxoffice', function(req, res){
	var date = req.query.date;

	var options = { method: 'GET',
  url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
  qs: 
   { key: '4697b8d55f5ad147f7acb1012b103924',
     targetDt: date } 
	};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.json(JSON.parse(body));
});
});


app.get('/movie', function(req, res){
	var query = req.query.query;
var options = { method: 'GET',
  url: 'https://openapi.naver.com/v1/search/movie.json',
  qs: { query: query, display: '100', start: '1' },
  headers:
   {
     'x-naver-client-secret': 'HL6iiE5ADr',
     'x-naver-client-id': 'UtPMk7lvWhK9v2771X21' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.json(JSON.parse(body));
});

});


app.get('/book', function(req, res){
	var categoryId = req.query.categoryId;

	var options = { method: 'GET',
  url: 'http://book.interpark.com/api/bestSeller.api',
  qs:
   { key: '557BE93FBD927C7349417B271D092A1F5DAD3CB7D276568E87D9A3AC8FB7D1D9',
     categoryId: categoryId,
     output: 'json' },
  headers:
   { 'postman-token': 'e65e0909-cf01-c588-c755-6c745b773bde',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.json(JSON.parse(body));
});

});

var server = app.listen(80, '178.128.100.202', function(){
	console.log("Express server has started on port 80");
});
