require 'rubygems'

desc "Run server"
task :serverup do
  require 'listen'
  system "rackup -p 3000"
  listener = Listen.to('spec/', 'features/') do |modified, added, removed|
    puts "modified absolute path: #{modified}"
    puts "added absolute path: #{added}"
    puts "removed absolute path: #{removed}"
  end
  listener.start
  sleep
end

desc "Stop server"
task :serverdown do
  system "pkill -9 -f rackup"
end

begin
  require 'cucumber'
  require 'cucumber/rake/task'
  
  desc "Run Acceptance Test"
  Cucumber::Rake::Task.new(:acceptance) do |t|
    t.cucumber_opts = "features"
  end
end

begin
  require 'rspec/core'
  require 'rspec/core/rake_task'
  desc "Run all specs in spec directory (excluding plugin specs)"
  RSpec::Core::RakeTask.new(:spec)
end

begin
  desc "Run jasmine tests"
    require 'jasmine'  
    load 'jasmine/tasks/jasmine.rake'  
end

desc "Run all tests"
task :default => [:acceptance, "jasmine:ci", :spec]

desc "travis"
task :travis do
  ["rspec spec", "rake jasmine:ci", "rake acceptance"].each do |cmd|
    puts "Starting to run #{cmd}..."
    system("export DISPLAY=:99.0 && bundle exec #{cmd}")
    raise "#{cmd} failed!" unless $?.exitstatus == 0
  end
end
