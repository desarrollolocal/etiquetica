require 'rubygems'
require 'cucumber'
require 'cucumber/rake/task'


desc "Run server"

  task :serverup do
    system "rackup -p 3000 &"
  end

  task :serverdown do
    system "pkill -9 -f rackup"
  end

desc "Run Acceptance Test"

  Cucumber::Rake::Task.new(:acceptance) do |t|
    t.cucumber_opts = "AcceptanceTests"
  end

desc "default"
  task :default => [:acceptance]
