etiquetica
==========

[![Build Status](https://travis-ci.org/desarrollolocal/etiquetica.png?branch=master)](https://travis-ci.org/desarrollolocal/etiquetica)

Ruby 1.9.3

First install Bundler

gem install bundler

Then run bundle

It installs:
Installing rack (1.5.2) 
Installing rack-protection (1.5.1) 
Installing tilt (1.4.1) 
Installing sinatra (1.4.4) 

To run cucumber files:
gem install cucumber
If it fails with 'ERROR: Failed to build gem native extension' in Ubuntu then....
apt-get install ruby1.9.1-dev
does the trick

gem install capybara

then run: 
cucumber AcceptanceTests/
