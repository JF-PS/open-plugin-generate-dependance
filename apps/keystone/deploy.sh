cd apps/keystone 
&& cp Dockerfile . 
&& heroku container:login 
&& heroku container:push web -a keystone-nx 
&& heroku container:release web -a keystone-nx